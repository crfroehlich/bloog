---
title: "Quick Start"
order: 3
---

## Prerequisites

1. Install NodeJS (newest 14+ recommended, minimal 12.18).
2. Install Yarn: `npm install -g yarn`
3. Install HmD CLI: `npm install -g hmd-cli`

These commands may require root rights, depending on your operating
system and configuration.

## Quick start

1. Initialize HikingMyDesk project in current directory:
   ```bash
   hmd init
   ```
   Now wizard will guide you through core HikingMyDesk
   configuration.

2. Run your app in development mode with live reload
   ```bash
   hmd develop
   ```
   You can access your app on `localhost:8000`. Any changes
   applied will be automatically applied on running
   development server.

3. Build you app package ready for deployment
   ```bash
   hmd build
   ```
   Built package will be available in `public` directory.

## HikingMyDesk directory structure

Below is defined HikingMyDesk app directory structure.
**Important** This is applicable only for apps initialized and
using HikingMyDesk CLI.

```bash
+-- .hmd.yml   # HikingMyDesk CLI configuration file
+-- package.json # 
+-- README.md    # Your HikingMyDesk app readme
│
+-- assets/      # Directory with static assets not used inside content (e.g. logo)
│
+-- config/      # Directory with HikingMyDesk app configuration
│   +-- config.yml  # HikingMyDesk configuration file
│   +-- jargon.yml  # Jargon (abbrevations / definitions) configuration file
│   +-- theme/      # Directory with HikingMyDesk app theme (look-and-feel) configuration
│       +-- colors.js # Base colors configuration file
│       +-- dark.js   # Dark theme configuration file
│       +-- light.js  # Light theme configuration file
│
+-- content/     # Directory with your app content
│   +-- index.md # Root page content file (do not remove!)
│
+-- snippets/ # Directory with external code snippets, which can be embedded in content
```