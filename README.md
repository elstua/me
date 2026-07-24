# Artem Savelev — Portfolio

An Astro portfolio with React islands for the interactive case-study sections and an MDX content collection for writing.

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:4321` by default.

## Commands

```bash
npm run dev       # Start the development server
npm run check     # Run Astro and TypeScript checks
npm run build     # Validate and create the production site in dist/
npm run preview   # Preview the production build locally
```

## Publishing a blog post

1. Copy `src/content/blog/example-post.mdx` to a new kebab-case filename, such as `designing-agent-feedback.mdx`.
2. Update the title, description, publication date, and tags in the frontmatter.
3. Write the article using Markdown or MDX.
4. Set `draft: false` when it is ready to appear on `/blog/`.
5. Run `npm run build` before publishing.

Blog metadata is validated by `src/content.config.ts`. Invalid or incomplete frontmatter fails the build instead of publishing a broken page.

## Project structure

```text
src/
├── pages/                 Astro routes
│   ├── index.astro        Portfolio homepage
│   └── blog/              Writing index and article route
├── content/blog/          MDX articles and drafts
├── layouts/               Shared document metadata and layout
├── styles/                Blog/editorial styles
└── Projects/              Existing interactive React case studies
```

Static media stays in `public/`. The site is generated as static files and remains compatible with the existing Cloudflare Pages setup.

The build also adds a tiny static-file worker entry used by private Sites previews. It does not change the generated pages or require a runtime for the existing Cloudflare Pages deployment.
