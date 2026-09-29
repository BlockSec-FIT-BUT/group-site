# Dependency audit

Checked on 2026-09-29 against live npm registry metadata, the official Node release index, and GitHub Action releases.
Use the newest stable, compatible releases. Prerelease packages are not selected solely because their version number is higher.

## Build toolchain and direct dependencies

| Component | Version | Status |
| --- | --- | --- |
| Node.js | 26.10.0 | Latest Current release; pinned in `.node-version` |
| pnpm | 12.6.0 | Latest; pinned in `package.json` and installed by `pnpm/action-setup` in CI |
| Astro | 7.3.5 | Latest |
| `@astrojs/markdown-satteri` | 0.4.2 | Latest |
| Tailwind CSS / `@tailwindcss/vite` | 4.3.3 | Latest |
| `@tailwindcss/typography` | 0.5.20 | Latest |
| `@fontsource-variable/manrope` | 5.3.0 | Latest |
| `@fontsource/instrument-serif` | 5.3.0 | Latest |
| `@retorquere/bibtex-parser` | 11.0.0 | Latest |
| `@astrojs/check` | 0.9.10 | Latest |
| `@types/node` | 26.6.3 | Latest; matches the Node 26 release line |
| TypeScript | 6.0.3 | Latest compatible release; 7.0.2 is not compatible with Astro's checker |

The [Node release index](https://nodejs.org/dist/index.json) identifies Node 26 as Current and Node 24 as LTS. This static site uses Node only during development/builds.

TypeScript 7 does not provide the compiler API needed by Astro's language tools. The latest `@astrojs/check` declares `typescript: ^5.0.0 || ^6.0.0`.
Keep type checking enabled and use TypeScript 6 until upstream support lands; do not bypass peer dependencies to force TypeScript 7.
Sources: [TypeScript 7 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/), [Astro tracking issue](https://github.com/withastro/astro/issues/17268).

## GitHub Actions

| Action | Workflow reference | Latest release checked |
| --- | --- | --- |
| `actions/checkout` | `v7` | [v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1) |
| `pnpm/action-setup` | `v6` | [v6.1.0](https://github.com/pnpm/action-setup/releases/tag/v6.1.0) |
| `actions/setup-node` | `v7` | [v7.0.0](https://github.com/actions/setup-node/releases/tag/v7.0.0) |
| `actions/configure-pages` | `v6` | [v6.0.0](https://github.com/actions/configure-pages/releases/tag/v6.0.0) |
| `actions/upload-pages-artifact` | `v5` | [v5.0.0](https://github.com/actions/upload-pages-artifact/releases/tag/v5.0.0) |
| `actions/deploy-pages` | `v5` | [v5.0.1](https://github.com/actions/deploy-pages/releases/tag/v5.0.1) |

All JavaScript actions use the supported Node 24 action runtime. The composite Pages upload action embeds `actions/upload-artifact` v7, also using Node 24. This runtime is separate from the Node 26 version installed to build the site.
The Pages upload explicitly includes hidden files so `dist/.nojekyll` remains in the artifact.

## Lockfile and install scripts

Refreshed transitive packages within upstream dependency ranges. Checked all 452 unique locked package versions, including optional platform packages, against the registry: none is marked deprecated. `pnpm audit` reports zero known vulnerabilities.

Some indirect dependencies remain on older versions required by Astro, Tailwind, the BibTeX parser, and their tools. They are not all the newest published major. Overrides have not been used to replace upstream APIs with incompatible versions. The direct dependency reported by `pnpm outdated` is TypeScript, for the reason above.

`pnpm-lock.yaml` is the only dependency lockfile; local installs and CI use `pnpm install --frozen-lockfile`. It was imported from the existing lockfile, with the resulting versions checked again.

[Build-script decisions](https://pnpm.io/settings/build#allowbuilds) are recorded in `pnpm-workspace.yaml`: `allowBuilds` permits esbuild's binary setup for the reviewed version and disables an unnecessary native rebuild of the optional macOS fsevents package, which ships a working binary. Both load successfully on Node 26. A clean pnpm install completes without blocked-script or deprecation warnings.
When updating dependencies, review any unreviewed build scripts and update the version-specific esbuild approval if needed. Do not blanket-enable all dependency scripts.
