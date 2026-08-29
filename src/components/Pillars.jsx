const PILLARS = [
  { title: 'Operaciones', heading: 'Cadena de frío propia', text: 'Controlamos empaque, preenfriado y transporte internamente, sin depender de terceros para el eslabón más crítico del producto.', open: true },
  { title: 'Calidad', heading: 'Estándares verificables', text: 'Procesos documentados de inocuidad y trazabilidad desde el corte hasta la entrega.' },
  { title: 'Flota', heading: 'Transporte refrigerado propio', text: 'Unidades dedicadas con monitoreo de temperatura, reduciendo tiempos muertos y variabilidad térmica.' },
  { title: 'Transparencia', heading: 'Visibilidad de principio a fin', text: 'Información clara del estatus del embarque, desde el empaque hasta la recepción en destino.' },
  { title: 'Alianzas', heading: 'Red de distribución en EE.UU.', text: 'Relaciones directas con distribuidores y compradores para acortar la cadena entre campo y anaquel.' },
]

export default function Pillars() {
  return (
    <section className="section reveal">
      <div className="section-head wrap">
        <div className="eyebrow">Por qué San Rey</div>
        <h2>Operación agrícola con disciplina industrial.</h2>
      </div>
      <div className="pillars">
        {PILLARS.map((p) => (
          <details className="pillar" key={p.title} open={p.open}>
            <summary>{p.title} <span className="plus">+</span></summary>
            <div className="body">
              <div>
                <h3>{p.heading}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
