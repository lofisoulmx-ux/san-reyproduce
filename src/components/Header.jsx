import { useEffect, useState } from 'react'

export default function Header({ onBurgerClick }) {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={solid ? 'solid' : ''}>
      <div className="wordmark">
        <span className="san">San</span> <span className="rey">Rey</span> Produce
        <small>MX &rarr; USA · COLD CHAIN LOGISTICS</small>
      </div>
      <nav className="desk">
        <a href="#proceso">Proceso</a>
        <a href="#productos">Productos</a>
        <a href="#ruta">Ruta</a>
        <a href="#contacto" className="navbtn">Contacto</a>
      </nav>
      <div className="burger" onClick={onBurgerClick}>
        <span></span><span></span><span></span>
      </div>
    </header>
  )
}
