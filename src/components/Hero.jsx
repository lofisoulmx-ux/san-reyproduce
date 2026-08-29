export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grain"></div>
      <svg className="route-line" width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="none" style={{ top: 0, left: 0 }}>
        <path d="M -20 120 C 120 200, 60 380, 220 420 C 340 450, 300 620, 420 700" stroke="#3E7A57" strokeWidth="1" fill="none" strokeDasharray="2 6" opacity="0.6" />
      </svg>
      <div className="hero-content">
        <div className="hero-badge"><span className="dot-live"></span> Envíos activos hoy · 34–38°F</div>
        <h1>Fresh Produce.<br /><em>Reliable</em> Distribution.</h1>
        <p className="sub">Cilantro y cebollín cultivados, empacados y transportados bajo cadena de frío controlada desde el campo mexicano hasta la mesa de Estados Unidos.</p>
        <div className="cta-row">
          <a href="#ruta" className="btn btn-primary">Ver la ruta</a>
          <a href="#contacto" className="btn btn-ghost">Solicitar cotización</a>
        </div>
      </div>
    </section>
  )
}
