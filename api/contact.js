// Vercel Function — POST /api/contact
// Sends the contact form via Resend (https://resend.com) if RESEND_API_KEY is set.
// Without RESEND_API_KEY, returns 503 so the frontend can fall back to mailto:.
//
// Setup:
//   1. Sign up at https://resend.com (free 3000 emails/month)
//   2. Verify a domain (or use the resend.dev test sender for development)
//   3. In Vercel project settings → Environment Variables, add:
//        RESEND_API_KEY=re_xxxxxxxxxxxxx
//        CONTACT_TO_EMAIL=lenguedilan@gmail.com   (recipient — defaults to this)
//        CONTACT_FROM_EMAIL=onboarding@resend.dev  (sender — must be verified)
//   4. Redeploy.

export const config = { runtime: 'edge' }

const RATE_LIMIT_WINDOW_MS = 60_000
const lastSubmissions = new Map()

function rateLimited(ip) {
  const now = Date.now()
  for (const [k, t] of lastSubmissions) {
    if (now - t > RATE_LIMIT_WINDOW_MS) lastSubmissions.delete(k)
  }
  if (lastSubmissions.has(ip)) return true
  lastSubmissions.set(ip, now)
  return false
}

function isValidEmail(s) {
  return typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && s.length <= 200
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json' },
    })
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  if (rateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: 'Trop de requêtes. Réessayez dans une minute.' }),
      { status: 429, headers: { 'content-type': 'application/json' } },
    )
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Corps JSON invalide.' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }

  const name = String(body?.name || '').trim().slice(0, 100)
  const email = String(body?.email || '').trim().slice(0, 200)
  const subject = String(body?.subject || '').trim().slice(0, 150)
  const message = String(body?.message || '').trim().slice(0, 4000)
  const honeypot = String(body?.company || '').trim()

  if (honeypot) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })
  }

  if (!name || !isValidEmail(email) || !subject || !message) {
    return new Response(
      JSON.stringify({
        error: 'Champs manquants ou invalides (nom, email, sujet, message).',
      }),
      { status: 400, headers: { 'content-type': 'application/json' } },
    )
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  if (!RESEND_API_KEY) {
    return new Response(
      JSON.stringify({
        error: 'Service email non configuré.',
        fallback: 'mailto',
      }),
      { status: 503, headers: { 'content-type': 'application/json' } },
    )
  }

  const to = process.env.CONTACT_TO_EMAIL || 'lenguedilan@gmail.com'
  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
      <h2 style="color: #6366f1; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Nouveau message — Portfolio</h2>
      <p><strong>De :</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
      <pre style="white-space: pre-wrap; font-family: system-ui, sans-serif; font-size: 14px; line-height: 1.6;">${escapeHtml(message)}</pre>
    </div>`

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: `Portfolio Dilan <${from}>`,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html,
      }),
    })

    if (!r.ok) {
      const detail = await r.text()
      return new Response(
        JSON.stringify({ error: 'Échec de l\'envoi.', detail: detail.slice(0, 200) }),
        { status: 502, headers: { 'content-type': 'application/json' } },
      )
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })
  } catch (e) {
    return new Response(
      JSON.stringify({ error: 'Erreur réseau.', detail: String(e).slice(0, 200) }),
      { status: 500, headers: { 'content-type': 'application/json' } },
    )
  }
}
