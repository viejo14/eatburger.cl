# Deploy en Vercel

## Estructura de carpetas
- `apps/frontend`: app React/Vite

## Variables de entorno requeridas
- `VITE_FORMSPREE_ENDPOINT`
- `VITE_WHATSAPP_PHONE`
- `VITE_UBEREATS_STORE_URL` (perfil publico de Uber Eats)
- `VITE_RAPPI_STORE_URL` (perfil publico de Rappi)
- `VITE_PEDIDOSYA_STORE_URL` (perfil publico de PedidosYa)

## Ambientes
Configuralas en:
- `Production`
- `Preview`
- `Development` (opcional si trabajas con Vercel CLI)

## Build
- Build Command: `pnpm build`
- Output Directory: `apps/frontend/dist`

## Desarrollo local
- `pnpm dev` para frontend.
- `apps/frontend/vite.config.js` usa `envDir: ../../` para leer variables desde el `.env` raiz.

## Verificacion post-deploy
- `https://TU_DOMINIO/robots.txt`
- `https://TU_DOMINIO/sitemap.xml`
- Revisar favicon y metadatos Open Graph.
- Probar la seccion "Compra a domicilio" (Rappi/PedidosYa).
