# Facturasis Landing Page

Landing page moderna para **Facturasis**, enfocada en presentar soluciones de software empresarial, facturacion electronica, POS e innovacion tecnologica para negocios en Ecuador.

## Preview

- Sitio oficial: `https://facturasis.shop`
- Ubicacion: Cuenca, Ecuador
- Enfoque: conversion comercial por WhatsApp

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Features

- Diseno responsive con enfoque mobile first
- Hero comercial con llamados a la accion
- Secciones de servicios, beneficios y sectores atendidos
- Formulario que abre WhatsApp con mensaje prellenado
- SEO basico con metadata y JSON-LD
- Exportacion estatica lista para hosting tradicional

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    contact-form.tsx
next.config.ts
package.json
README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 3. Lint

```bash
npm run lint
```

### 4. Build

```bash
npm run build
```

## Static Export

This project is configured for static export in [next.config.ts](C:/xampp/htdocs/facturasis/web/next.config.ts):

```ts
const nextConfig = {
  output: "export",
  trailingSlash: true,
};
```

After running the build, Next.js generates:

```text
out/
```

## Deployment

### HestiaCP

Upload the **contents** of the `out` folder to your domain public directory, usually:

```text
/home/TU_USUARIO/web/TU_DOMINIO/public_html/
```

Upload:

- `out/index.html`
- `out/404.html`
- `out/_next/`

Do not upload:

- `src/`
- `node_modules/`
- `.next/`
- project source files

## Important Files

- [src/app/page.tsx](C:/xampp/htdocs/facturasis/web/src/app/page.tsx)
- [src/app/layout.tsx](C:/xampp/htdocs/facturasis/web/src/app/layout.tsx)
- [src/app/globals.css](C:/xampp/htdocs/facturasis/web/src/app/globals.css)
- [src/components/contact-form.tsx](C:/xampp/htdocs/facturasis/web/src/components/contact-form.tsx)
- [next.config.ts](C:/xampp/htdocs/facturasis/web/next.config.ts)

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Notes

- In development, Next.js shows a floating `N` badge. It does not appear in production.
- Production publishing for this project is intended through the generated `out` folder.

## License

Private project for Facturasis.
