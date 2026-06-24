# Senior Full-Stack Portfolio

A responsive React and Vite portfolio for a senior full-stack developer.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy to Vercel

Import the GitHub repository into Vercel. The included `vercel.json` configures:

- Framework: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Immutable caching for fingerprinted assets
- Basic security headers

No environment variables are required.
