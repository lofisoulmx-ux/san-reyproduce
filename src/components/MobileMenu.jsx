export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobmenu ${open ? 'open' : ''}`}>
      <a href="#proceso" onClick={onClose}>Proceso</a>
      <a href="#productos" onClick={onClose}>Productos</a>
      <a href="#ruta" onClick={onClose}>Ruta</a>
      <a href="#contacto" onClick={onClose}>Contacto</a>
    </div>
  )
}
