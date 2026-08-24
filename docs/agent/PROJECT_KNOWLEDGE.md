# Project Knowledge

- Repository: `classicitbb/astro-blog-starter-template`
- Default branch: `main`
- Visibility: `public`
- Last verified: 2026-08-24
- Business owner: Russell Hunte
- Existing instructions: none detected
- Existing status ledger: none detected

## Purpose

Build a personal website, blog, or portfolio with Astro.

## Verified stack

- Astro (5.16.9)
- TypeScript (5.9.3)



## Commands

| Script | Command | Implementation |
|---|---|---|
| astro | `npm run astro` | `astro` |
| build | `npm run build` | `astro build` |
| cf-typegen | `npm run cf-typegen` | `wrangler types` |
| check | `npm run check` | `astro build && tsc && wrangler deploy --dry-run` |
| deploy | `npm run deploy` | `wrangler deploy` |
| dev | `npm run dev` | `astro dev` |
| preview | `npm run preview` | `astro build && wrangler dev` |

Commands are discovered from the manifest and were not run during this rollout. Use the committed lockfile/package manager.

## Environment-variable names

No environment example detected.

Record names and purpose only. Update this file when code, configuration, architecture, or the project’s operational status changes.

## Sources of truth

- Code: this repository.
- Commands: manifests/lockfiles.
- Current work: `docs/agent/HANDOFF.md`.
- Rules: continuity override.
- Hosting: needs verification.
- Data/schema: needs verification.
