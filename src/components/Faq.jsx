const FAQS = [
  { q: '¿Qué productos manejan actualmente?', a: 'Actualmente nos enfocamos en cilantro y cebollín, con planes de ampliar el catálogo conforme crece la operación.', open: true },
  { q: '¿Cómo garantizan la cadena de frío?', a: 'Controlamos preenfriado, almacenamiento y transporte con equipo propio y monitoreo de temperatura en tránsito.' },
  { q: '¿A qué regiones de EE.UU. distribuyen?', a: 'Trabajamos con distribuidores en distintas regiones; contáctanos para confirmar cobertura específica.' },
]

export default function Faq() {
  return (
    <section className="section reveal">
      <div className="section-head wrap"><div className="eyebrow">Preguntas frecuentes</div></div>
      <div className="faq">
        {FAQS.map((f) => (
          <details className="pillar" key={f.q} open={f.open}>
            <summary>{f.q} <span className="plus">+</span></summary>
            <div className="body"><p>{f.a}</p></div>
          </details>
        ))}
      </div>
    </section>
  )
}
