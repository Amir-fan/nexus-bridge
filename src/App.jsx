import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import FindProfessionals from './pages/FindProfessionals'
import WorkFlexibly from './pages/WorkFlexibly'
import About from './pages/About'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import Privacy from './pages/Privacy'
import CookieBanner from './components/CookieBanner'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fachkraefte-finden" element={<FindProfessionals />} />
          <Route path="/flexibel-arbeiten" element={<WorkFlexibly />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}
