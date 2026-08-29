const STEPS = [
  { idx: '01', title: 'Producción', text: 'Campos propios y aliados con manejo agronómico controlado para calidad consistente todo el año.' },
  { idx: '02', title: 'Cosecha', text: 'Corte en punto óptimo de frescura, minimizando el tiempo entre campo y empaque.' },
  { idx: '03', title: 'Empaque', text: 'Selección, lavado e hidroenfriado en instalaciones propias antes del embarque.' },
  { idx: '04', title: 'Refrigeración', text: 'Preenfriado y almacenamiento a temperatura constante desde el primer minuto.' },
  { idx: '05', title: 'Transporte', text: 'Flota propia con monitoreo de temperatura en tiempo real hasta el destino final.' },
]

export default function Process() {
  return (
    <section className="section reveal" id="proceso">
      <div className="section-head wrap">
        <div className="eyebrow">Del campo a la distribución</div>
        <h2>Una cadena, cinco pasos, cero interrupciones.</h2>
      </div>
      <div className="process-scroll">
        {STEPS.map((s) => (
          <div className="pcard" key={s.idx}>
            <div className="idx">{s.idx}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
