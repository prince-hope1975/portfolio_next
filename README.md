# Prince Charles — The connected system

A graphic portfolio connecting frontend experiences, backend services, and AI workflows. Built with Next.js Pages Router, TypeScript, Framer Motion, React Three Fiber, Three.js, and locally hosted Bricolage Grotesque / Manrope fonts.

## Development

Use Node.js 24 LTS from `.nvmrc`, plus the pnpm version pinned in `package.json` and the checked-in pnpm lockfile.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm exec tsc --noEmit
pnpm lint
pnpm build
pnpm start
```

## Production URL

Set `NEXT_PUBLIC_SITE_URL` to the deployment origin before building, for example your actual HTTPS portfolio domain. Vercel deployments also support `VERCEL_PROJECT_PRODUCTION_URL`. Without an origin, canonical and absolute social-image URLs are omitted and the sitemap is empty. No placeholder domain is published.

## Content

- `data/projects.ts` contains projects, case study content, and the experience timeline.
- `/projects/[slug]` is statically generated for simplecx, DrapOn, alswap, and Atlas DAO.
- simplecx uses actual website and walkthrough captures. DrapOn uses actual garment input/output assets from its local demo. alswap and Atlas DAO use labeled architecture illustrations.
- Project media includes alt text, captions, and provenance in `data/projects.ts`; case study images open in an accessible native dialog.
- The interactive 3D apparatus connects an interface surface, API junction, worker mechanism, and storage unit. It supports component selection, bounded drag rotation, a pause-motion control, and a request simulation with optional retry and event trace. It makes no live provider requests.
- The general resume download is `public/prince-charles-resume.pdf`, copied from the clean resume selected during planning.
- Contact is direct email, with GitHub and LinkedIn links.
- Motion respects `prefers-reduced-motion`. All scene controls work through HTML buttons; WebGL failure retains a 2D illustration. Rendering pauses offscreen and while the document is hidden.

Fonts are licensed under the SIL Open Font License; licenses are included in `public/fonts/`.
