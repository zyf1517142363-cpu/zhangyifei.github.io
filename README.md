# Personal Blog

A modern minimalist personal blog inspired by the design language of Anthropic.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- Markdown for blog posts
- Framer Motion for animations

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Blog Posts

Create new markdown files in the `/posts` directory with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-12-15"
description: "A brief description of your post."
tags: ["Tag1", "Tag2"]
---

Your content here...
```

## Deployment

This project is configured for static export and can be deployed to GitHub Pages.

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select "GitHub Actions" as the source
4. The deployment workflow will automatically run on push to main

### Manual Deployment

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Project Structure

```
/app          - Next.js app router pages
/components   - React components
/posts        - Blog post markdown files
/lib          - Utility functions
/public       - Static assets
```

## Customization

- Update the site metadata in `app/layout.tsx`
- Modify the color scheme in `app/globals.css`
- Edit the homepage content in `app/home-page.tsx`
- Update social links in `components/footer.tsx`

## License

MIT
