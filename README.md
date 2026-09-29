# BlockSec@FIT website

Astro + strict TypeScript + Tailwind CSS 4, deployed as static HTML. No Ruby or server required.

Content is populated from the official FIT group, team, and publication records.
See [content sources](docs/content-sources.md) for the import scope, author-credit corrections, and project selection.

## Run locally

Use Node.js 24 (`.node-version`), then:

```sh
npm install
npm run dev
```

`npm run build` checks types and builds `dist/`. `npm run preview` previews that build.

## Make changes

| Change | File |
| --- | --- |
| Group name, description, language, navigation | `src/site.config.ts` |
| Homepage headline and introduction | `src/site.config.ts` (`home`) |
| Contact text | `src/pages/contact.md` |
| People, projects, publications | `src/data/` (copy the commented examples) |
| News | Copy `src/content/news/example.md`, rename it, edit it, and set `draft: false` |
| Theme colors and fonts | `src/styles/global.css` (`@theme`, local font files) |
| Layout, spacing, responsive styles | Tailwind classes in `src/pages/` and `src/layouts/` |
| Markdown typography | `src/components/Prose.astro` (Tailwind Typography) |
| Shared page layout | `src/layouts/Layout.astro` |
| Images and PDFs | `public/` |

Put images in `public/assets/images/`; reference them as `/assets/images/...` in data files.
News filenames become `/news/filename/`. Drafts are excluded from both the list and generated pages.
In Markdown, use `[People](/people/)` or `![Photo](/assets/images/people/person.webp)`. The GitHub Pages prefix is added automatically to these paths.
Manrope and Instrument Serif are self-hosted. The homepage graphic is a static SVG generated at build time; neither fonts nor artwork require third-party services.
Astro's lightweight client router keeps navigation within the current document. Only the full-width main content fades for 160ms; the footer is preserved and the shared shell does not animate. Font preloads avoid repeat font loading. Pages remain statically generated for GitHub Pages, and regular links still work without JavaScript. Reduced-motion preferences disable transition animations.

Use `withBase()` from `src/lib/urls.ts` for internal paths in Astro components.

### Link people, publications, and projects

Give each person a stable `personId` in `src/data/people.ts`, for example `daniel-rolnik`.
Publications and projects also need unique `publicationId` and `projectId` values.
Use lowercase letters, numbers, and hyphens for IDs; keep them unchanged when renaming an entry so existing links keep working.

In `src/data/publications.ts`, list authors in their published order:

```ts
authors: [
  { name: 'Daniel Rolnik', personId: 'daniel-rolnik' },
  { name: 'External Author' },
],
```

`name` is the displayed credit and can differ from the person's profile name.
Omit `personId` for authors without a profile; they remain plain text. Do not use an empty ID.

In `src/data/projects.ts`, list the IDs of the people involved:

```ts
personIds: ['daniel-rolnik'],
```

Use `personIds: []` if nobody is linked yet. Add people to `people.ts` before referencing them.
Each person's publications and projects appear automatically on the People page; do not maintain a second list on the person.
Links point to `/people/#<personId>`, `/publications/#<publicationId>`, and `/projects/#<projectId>`.
The former `/research/` route redirects to `/projects/`.

`npm run build` rejects invalid or duplicate IDs and references to missing people.
Run `npm test` to check relationship validation and automatic reverse links.

## GitHub Pages

1. Push this project to a GitHub repository with a `main` branch.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Push to `main` or run **Build and deploy website** from the Actions tab.

The workflow installs Node.js, checks and builds the site, then deploys `dist/`.
Pull requests run the build without deploying.
The site URL and repository prefix come from GitHub Pages automatically; there is no repository name to hardcode.
For a custom domain, configure it in GitHub Pages settings and rerun the workflow.

To check a repository subpath locally:

```sh
SITE_URL=https://example.github.io SITE_BASE_PATH=/research-group-website npm run build
npm run preview -- --base /research-group-website
```
