# Deploy en Vercel

## Variables de entorno requeridas
- `VITE_FORMSPREE_ENDPOINT`
- `VITE_WHATSAPP_PHONE`

## Ambientes
Configuralas en:
- `Production`
- `Preview`
- `Development` (opcional si trabajas con Vercel CLI)

## Build
- Framework: `Vite`
- Build Command: `pnpm build`
- Output Directory: `dist`

## Verificacion post-deploy
- `https://TU_DOMINIO/robots.txt`
- `https://TU_DOMINIO/sitemap.xml`
- Revisar favicon y metadatos Open Graph.

