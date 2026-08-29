# San Rey Produce — Landing

Proyecto React + Vite. Cada sección de la página vive en su propio archivo dentro de `src/components/`, así que para "parchar" algo solo edita el archivo correspondiente:

- `src/components/Hero.jsx` — sección principal
- `src/components/Stats.jsx` — barra de métricas
- `src/components/Process.jsx` — pasos 01–05
- `src/components/Pillars.jsx` — acordeón de valores
- `src/components/Products.jsx` — cilantro / cebollín
- `src/components/RouteMap.jsx` — mapa MX → USA
- `src/components/CtaFinal.jsx` / `Faq.jsx` / `Footer.jsx`
- `src/index.css` — todos los estilos y colores de marca (variables al inicio del archivo)

## Correr en local

```bash
npm install
npm run dev
```

## Deploy

1. Sube esta carpeta a un repo de GitHub.
2. Entra a vercel.com → "Add New Project" → importa el repo.
3. Vercel detecta Vite automáticamente (build: `npm run build`, output: `dist`). Dale Deploy.
