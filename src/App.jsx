import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Process from './components/Process'
import Pillars from './components/Pillars'
import Products from './components/Products'
import RouteMap from './components/RouteMap'
import CtaFinal from './components/CtaFinal'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { useState } from 'react'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useScrollReveal()

  return (
    <>
      <Header onBurgerClick={() => setMenuOpen((v) => !v)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
      <Stats />
      <Process />
      <Pillars />
      <Products />
      <RouteMap />
      <CtaFinal />
      <Faq />
      <Footer />
    </>
  )
}
