# Estructura Del Proyecto (Frontend)

Este proyecto queda como sitio frontend en React + Vite, sin backend propio.

## Estructura

```text
eatburger.cl/
|- apps/
|  `- frontend/
|     |- src/
|     |- public/
|     |- tests/
|     |- index.html
|     |- vite.config.js
|     |- tailwind.config.js
|     `- postcss.config.js
|
|- docs/
|- package.json
|- pnpm-workspace.yaml
|- pnpm-lock.yaml
|- vercel.json
|- .env
`- .env.example
```

## Regla Clave

- Toda la experiencia de compra se deriva a plataformas externas (Rappi/PedidosYa).
- No hay endpoints `/api/*` ni logica server-side dentro del repo.
