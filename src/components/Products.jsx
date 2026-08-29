export default function Products() {
  return (
    <section className="section reveal" id="productos">
      <div className="section-head wrap">
        <div className="eyebrow">Productos</div>
        <h2>Enfoque en frescura, no en catálogo extenso.</h2>
      </div>
      <div className="products-grid">
        <div className="pcard2">
          <div className="art cilantro">
            <span className="tag">Fotografía próximamente</span>
            <svg viewBox="0 0 64 64" fill="none" stroke="#5FA377" strokeWidth="1.4">
              <path d="M32 58V20M32 20c0-8 6-14 14-14M32 20c0-8-6-14-14-14M32 34c0-6 5-11 11-11M32 34c0-6-5-11-11-11M32 46c0-5 4-9 9-9M32 46c0-5-4-9-9-9" />
            </svg>
          </div>
          <div className="info">
            <h3>Cilantro</h3>
            <p>Manojos frescos empacados y preenfriados el mismo día de corte.</p>
          </div>
        </div>
        <div className="pcard2">
          <div className="art cebollin">
            <span className="tag">Fotografía próximamente</span>
            <svg viewBox="0 0 64 64" fill="none" stroke="#B23A2E" strokeWidth="1.4">
              <path d="M20 58V26M20 26c-3-6-3-14 2-20M20 26c3-6 3-14-2-20M44 58V26M44 26c-3-6-3-14 2-20M44 26c3-6 3-14-2-20" />
            </svg>
          </div>
          <div className="info">
            <h3>Cebollín</h3>
            <p>Corte uniforme y empaque higienizado listo para distribución mayorista.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
