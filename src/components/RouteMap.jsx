export default function RouteMap() {
  return (
    <section className="section reveal" id="ruta">
      <div className="section-head wrap">
        <div className="eyebrow">Ruta</div>
        <h2>México &rarr; Estados Unidos, sin romper la cadena de frío.</h2>
      </div>
      <div className="routemap">
        <div className="routebox">
          <svg viewBox="0 0 300 160">
            <path d="M20 130 C 80 120, 100 60, 160 55 C 210 50, 230 30, 280 25" stroke="#3E7A57" strokeWidth="1.2" strokeDasharray="3 5" fill="none" />
            <circle cx="20" cy="130" r="4" fill="#5FA377" />
            <circle cx="280" cy="25" r="4" fill="#B23A2E" />
            <text x="14" y="148" fill="#9AA39B" fontSize="9" fontFamily="IBM Plex Mono, monospace">ORIGEN · MX</text>
            <text x="222" y="18" fill="#9AA39B" fontSize="9" fontFamily="IBM Plex Mono, monospace">DESTINO · USA</text>
          </svg>
          <div className="route-legend">
            <span>Salida <span className="mono">06:00</span></span>
            <span>Cruce fronterizo <span className="mono">monitoreado</span></span>
            <span>Entrega <span className="mono">&lt; 48h</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
