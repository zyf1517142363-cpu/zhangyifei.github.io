# Anthropic Style Personal Blog Website

Build a modern minimalist personal blog inspired by the design language of Anthropic.

The website should feel elegant, calm, intelligent, and highly readable.

## Tech Stack

Use:

* Next.js 15 (App Router)
* TypeScript
* TailwindCSS
* MDX or Markdown for blog posts
* Framer Motion for subtle animations
* shadcn/ui components when appropriate

The project must be fully deployable to GitHub Pages.

---

# Design Direction

The design should strongly resemble Anthropic’s visual style:

* Large whitespace
* Minimalist layout
* Warm cream background
* Elegant typography
* Calm and premium feeling
* Subtle hover animations
* Left-aligned content
* Clean navigation
* Soft borders
* No excessive gradients
* No flashy startup aesthetics

Visual references:

* anthropic.com
* linear.app
* vercel.com
* openai.com/blog

---

# Color Style

Use a warm neutral palette:

Background:

* #f7f5f2
* #f5f3ef

Text:

* #171717
* #404040

Accent:

* muted black
* subtle gray

Avoid:

* saturated colors
* neon colors
* glassmorphism
* strong shadows

---

# Typography

Use modern clean typography.

Preferred fonts:

* Geist
* Inter
* IBM Plex Sans

Typography should emphasize readability.

Use:

* large headings
* generous line height
* narrow readable content width

---

# Pages Required

## 1. Homepage

The homepage should include:

* Hero section
* Personal introduction
* Featured articles
* Latest articles
* Smooth scroll experience
* Elegant hover effects
* Responsive layout

The hero section should feel thoughtful and editorial rather than corporate.

---

## 2. Blog List Page

A clean article index page.

Each article card should show:

* title
* date
* tags
* short description

Use subtle hover animations.

---

## 3. Blog Post Page

Each article page should support:

* Markdown/MDX rendering
* Syntax highlighting
* Reading progress bar
* Table of contents
* Responsive typography
* Dark mode
* Smooth scrolling

Code blocks should look beautiful and modern.

---

# Blog Content System

The blog system must be file-based.

Use:

/posts

Example:

/posts/agent-system.md
/posts/rag-introduction.md

The owner can add articles locally.

Visitors can only read articles.

Do NOT build a CMS backend.

Automatically generate blog routes from markdown files.

---

# Features

Implement:

* Dark mode toggle
* Responsive mobile layout
* SEO optimization
* OpenGraph support
* Sitemap generation
* RSS feed
* Smooth page transitions
* Lazy loading animations
* Copy code button
* Back to top button

---

# Navigation

Create a clean top navigation bar similar to Anthropic.

Navigation items:

* Home
* Articles
* About
* GitHub

The navbar should become slightly blurred or translucent on scroll.

---

# Footer

Simple elegant footer including:

* copyright
* social links
* GitHub link

Minimal style.

---

# Animation Style

Animations should feel subtle and intelligent.

Use:

* opacity transitions
* slight translateY
* smooth fade-ins

Avoid:

* bouncing animations
* excessive motion
* flashy transitions

---

# GitHub Pages Deployment

Prepare the project for GitHub Pages deployment.

Requirements:

* static export compatible
* generateStaticParams where needed
* proper next.config setup
* GitHub Actions deployment workflow

Include:

.github/workflows/deploy.yml

The deployment should automatically trigger on push to main branch.

---

# Code Quality

Requirements:

* clean folder structure
* reusable components
* modular architecture
* readable code
* production-ready

Organize components properly.

Use modern React best practices.

---

# Folder Structure

Recommended structure:

/app
/components
/posts
/lib
/styles
/public

---

# Additional Goal

The website should feel like a thoughtful AI researcher / builder's personal space.

It should feel editorial, intelligent, calm, and highly crafted.

The final result should feel close to:

* Anthropic Blog
* Vercel Blog
* Linear design language

but personalized as an independent creator website.
