# HikingMyDesk

[![Netlify Status](https://api.netlify.com/api/v1/badges/c0cec88f-db01-4c57-8b8d-782e07a9f73f/deploy-status)](https://app.netlify.com/sites/hmd/deploys)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/filipowm/hmd)
![CI](https://github.com/filipowm/hmd/workflows/CI/badge.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d0d45783a9bb47058b574a8a42d736fd)](https://www.codacy.com/manual/matfilipowicz/HikingMyDesk?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=filipowm/HikingMyDesk&amp;utm_campaign=Badge_Grade)

Create **awesome documentation** or tutorial pages with modern look-and-feel.
Customize it to your needs, run locally, deploy anywhere.

**Important** Check [hmd-cli](https://github.com/filipowm/hmd-cli) to start
quickly, simplify your codebase, easily run locally and build you HikingMyDesk-based app.
We recommend using `hmd-cli` instead of using `gatsby-cli` directly.

## Motivation

Goal is to give teams powerful tool which they can use to efficiently and
collaboratively share their knowledge. They can easily host it on any
infrastructure of choice or SaaS hosting like Netlify, Vercel or
GitHub / GitLab Pages. We want to provide a product, which can be customized
to (nearly) any needs, either using basic or advanced configuration options.

HikingMyDesk is inspired by popular [Gitbook](https://gitbook.com) look and feel.
It offers custom styling and components that enable building beautiful documentation
for projects and products quickly. It follows docs-as-code principles, where
you treat your documentation in the same way as your code.

It is a fork of https://github.com/hasura/gatsby-gitbook-starter, however
it went through total rework and changes. We improve it to provide significantly
more features, make look-and-feel more similar to Gitbook, improve stability,
performance, make it more configurable and easier to start with.

## 🔥 Features

- Write using Markdown / [MDX](https://github.com/mdx-js/mdx)
- customizing your page to match your branding and needs
- GitBook-like style theme, inspired by https://docs.gitbook.com/
- light / dark mode themes
- responsive design with mobile / tablet support
- rich-content and rich-text features like text formatting, graphs and diagrams,
  quotes, columnar layout, emojis, highlights, live code editor,
  syntax highlighting, external code snippets and many many more!
- Progressive Web App which can work offline
- integration with Google Analytics
- full screen mode
- Search Engine Optimization (_SEO_) friendliness
- RSS feed
- easy way to edit content on Gitlab, Github or Bitbucket
- custom CLI to easily initialize and develop HikingMyDesk app
- easy deployment on platform of your choice

## 🔗 Docs and live Demo

Here's a [HikingMyDesk documentation](https://hmd.netlify.app) being
also a live demo.

## 🚀 Quickstart

### Using `hmd-cli` (recommended)

You need to have `hmd-cli` installed: `npm install -g hmd-cli`.

1. Initialize HikingMyDesk project (config wizard will help you to
   set it up!) in current directory:
   ```bash
   hmd init
   ```

2. Run your app in development mode with live reload
   ```bash
   hmd develop
   ```

3. Build you app package ready for deployment
   ```bash
   hmd build
   ```

### Using `gatsby-cli`

You need to have `gatsby-cli` installed: `npm install -g gatsby-cli`.

Get started by running the following commands (using Gatsby CLI):

```
$ git clone git@github.com:filipowm/hmd.git
$ yarn
$ gatsby develop
```

Visit `http://localhost:8000/` to view the app.

## ☁️ Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/filipowm/hmd)
