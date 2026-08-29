const STATS = [
  { num: '34–38°F', label: 'Temperatura controlada en tránsito' },
  { num: '24–48h', label: 'Tiempo promedio campo a destino' },
  { num: '99.2%', label: 'Entregas a tiempo' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="num mono">{s.num}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
