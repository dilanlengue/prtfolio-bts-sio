import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Presentation from './pages/Presentation'
import AProposPage from './pages/AProposPage'
import CompetencesPage from './pages/CompetencesPage'
import CVPage from './pages/CVPage'
import EntreprisePage from './pages/EntreprisePage'
import ProjetsPage from './pages/ProjetsPage'
import BTSPage from './pages/BTSPage'
import VeillePage from './pages/VeillePage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import { useScrollAnimation } from './hooks/useScrollAnimation'

function AppContent() {
  useScrollAnimation()

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Presentation />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/competences" element={<CompetencesPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/entreprise" element={<EntreprisePage />} />
        <Route path="/projets" element={<ProjetsPage />} />
        <Route path="/bts" element={<BTSPage />} />
        <Route path="/veille" element={<VeillePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
