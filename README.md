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
| People, projects, publications | `src/data/` (publication example below) |
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
Give each project a unique `projectId` in `src/data/projects.ts`.
Use lowercase letters, numbers, and hyphens for IDs; keep them unchanged when renaming an entry so existing links keep working.

To add a publication, paste one BibTeX entry into `publicationEntries` in `src/data/publications.ts`:

```ts
{
  bibtex: String.raw`@inproceedings{my-paper-2026,
    title = {My Paper Title},
    author = {Rolnik, Daniel and Doe, Jane},
    booktitle = {Example Conference},
    year = {2026},
    doi = {10.1234/example}
  }`,
  personIds: ['daniel-rolnik'],
  projectIds: ['my-project'],
},
```

**Only `bibtex` is required.** Omit `personIds` and `projectIds` (or use empty arrays) when no links are needed.
When adding IDs, reference existing people/projects; the example above assumes `daniel-rolnik` and `my-project` already exist.

The title, ordered authors, venue, year, and external link are derived at build time; do not duplicate them outside the BibTeX block.
Each entry must have a citation key, title, author, and four-digit `year` (or a BibLaTeX ISO `date`).
Venues use `journal` / `journaltitle`, `booktitle`, `publisher`, `institution`, or `school`, in that order.
A `url` takes precedence over a DOI link. Without either, the paper is shown without an external link.
Use `String.raw` as shown so LaTeX commands such as `\v{s}` and `\&` reach the parser unchanged.
Brace protection, quoted fields, Unicode/LaTeX accents, and standalone `@string` definitions in the same block are supported.
Include one publication per object; references to entries outside the block are not resolved.

The citation key becomes the anchor ID: `MyPaper:2026` becomes `mypaper-2026`, and `my-paper-2026` remains unchanged.
Keep keys stable. Keys that normalize to the same ID are rejected.

`personIds` links only the selected authors. Matching uses their full names, ignoring case and whitespace; external authors remain plain text.
If a BibTeX credit uses initials or a different spelling, add that exact displayed name to the person's `authorAliases`, for example `authorAliases: ['I. Homoliak']`.
Missing or ambiguous author matches fail the build instead of silently linking the wrong person.

`projectIds` assigns the publication to one or more projects. The publication links to those projects, and each project automatically lists its publications, newest first.
This does not assign every publication author as a project member: maintain a project's own `personIds` list separately for its team.
A project's optional `url` points to its own homepage or code repository. Omit it when no separate destination is available; its related publications already provide paper links.

Each person's publications and projects appear automatically on the People page; do not maintain a second list on the person.
Links point to `/people/#<personId>`, `/publications/#<publicationId>`, and `/projects/#<projectId>`.
The former `/research/` route redirects to `/projects/`.

`npm run build` rejects malformed BibTeX, incomplete required fields, invalid or duplicate IDs, and references to missing people or projects.
Run `npm test` to check parsing, relationship validation, and automatic reverse links. These tests also run in CI.

## GitHub Pages

On GitHub Free, Pages requires a public repository. Private repositories support Pages with GitHub Pro, Team, or Enterprise; see [GitHub's availability requirements](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

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

## License

The website source code is licensed under the [MIT License](LICENSE).
Third-party dependencies and linked publications retain their own licenses.
