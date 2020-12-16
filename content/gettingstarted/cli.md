---
title: "HikingMyDesk CLI"
order: 4
---

<Tip>

**HikingMyDesk CLI is a recommended way of working with HikingMyDesk apps**.
However, if you need full control over your app, what comes with
a cost of significantly increased complexity, you can
still use Gatsby CLI.

</Tip>

CLI for HikingMyDesk used to speed up and simplify development
of HikingMyDesk-based apps.

## :label: Requirements

- NodeJS in version _12.13_ or higher
- Yarn (`npm install -g yarn`)
- HikingMyDesk CLI `npm install -g hmd-cli`

## :book: Guide


### App structure

HikingMyDesk CLI is creating following directory structure

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

### hmd init

Initialize HikingMyDesk app in a given path. This gives a way to easily and quickly
start a HikingMyDesk project.

```
hmd init [path] [-f|--full] [--skip|--skip-config] [-d|--debug]
```

`path` - path where HikingMyDesk project will be initialized. Defaults to current directory.

`-f`, `--full` - use full (advanced) configuration wizard. Guides you through most of available configuration options.

`--skip`, `--skip-config` - skip configuration wizard. Default values will be applied.

`-d`, `--debug` - enable debugging mode.

### hmd develop

Start HikingMyDesk development server on specified port (default 8000).
The development server supports live (hot) reload on any changes.

```
hmd develop [-p|--port] [-d|--debug]
```
`-p`, `--port` - port on which development server will run. Defaults to `8000`.

`-d`, `--debug` - enable debugging mode.

**Note** Changes done to `config/jargon.yml` will not be reloaded.
To apply changes to jargon you must restart server.

### hmd build

Build HikingMyDesk project. Deployment-ready package will be created
in `public` directory.

```
hmd build [-a|--archive] [-d|--debug]
```

`-a`, `--archive` - archive (zip) result directory. `public.zip` file will be created
with your built app.

`-d`, `--debug` - enable debugging mode.

### hmd clean

Wipe the local HikingMyDesk environment including built assets and cache.
Useful in case of issues while running `build` or `develop` commands.

```
hmd clean
```

## :construction_worker: Roadmap

- add feature to manage navigation sidebar (create, edit, remove groups etc..)
- add feature to manage pages (create, edit, remove etc..)
- add feature to manage theme