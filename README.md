# WP Blocks for Every Action

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) &nbsp;&nbsp; [![Codacy Badge](https://api.codacy.com/project/badge/Grade/cdd7bddb8b7d47bf899195af76f7bef5)](https://www.codacy.com/app/pixelcollective/wp-blocks-for-every-action?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pixelcollective/wp-blocks-for-every-action&amp;utm_campaign=Badge_Grade)

[![Waffle.io - Columns and their card count](https://badge.waffle.io/pixelcollective/wp-blocks-for-every-action.svg?columns=all&style=flat-square)](https://waffle.io/pixelcollective/wp-blocks-for-every-action)

[![GitHub pull-requests](https://img.shields.io/github/issues-pr/pixelcollective/wp-blocks-for-every-action.svg)](https://GitHub.com/pixelcollective/wp-blocks-for-every-action/pull/) &nbsp;&nbsp;[![GitHub pull-requests](https://img.shields.io/github/issues-pr-closed/pixelcollective/wp-blocks-for-every-action.svg)](https://GitHub.com/pixelcollective/wp-blocks-for-every-action/pull/)


WordPress 5.0 blocks for NGP VAN's Every Action CRM platform.

## Note

I am in no way affiliated with NGP VAN. I just build tools for non-profits.

## What's inside the box?

```
/every-action             # → Root of plugin
├── assets/               # → Packed JS/CSS
├── includes/             # → PHP Classes, etc.
├── languages/            # → i18n
├── node_modules/         # → Node.js packages (never edit)
├── src                   # → Blocks
│   ├── blocks/           # → Block Assets
│   │   ├── action-tag/   # → Every Action Blocks
│   │   ├── button/       # → Button
│   │   ├── card/         # → Simple container block
│   │   ├── components/   # → Abstractions/utilities
│   │   ├── _common.scss  # → Baseline stylesheet
│   │   ├── _vars.scss    # → Stylesheet settings and variables
│   │   ├── editor.js     # → JS Entrypoint
│   │   ├── editor.scss   # → SCSS Main for wp-admin
│   │   ├── icons.js      # → svg icons
│   │   ├── public.js     # → JS Entrypoint for public
│   │   ├── public.scss   # → SCSS Main for public
│   │   └───wp_imports.js # → WordPress API wrapper
│   └── client/           # → Public scripts
├── vendor/               # → Composer packages (never edit)
├── composer.json         # → Composer dependencies (never edit)
├── composer.lock         # → Composer lockfile (never edit)
├── index.php             # → // silence is golden
├── LICENSE               # → MIT License
├── package.json          # → npm packages
├── postcss.config.js     # → postcss configuration
├── uninstall.php         # → Plugin uninstaller
├── README.md             # → ** YOU ARE HERE **
├── every-action.php      # → Plugin main
├── wpackio.php           # → PHP style and script loader (dev and prod)
├── wpackio.project.js    # → wpack.io configuration
├── wpackio.server.js     # → wpack.io dev server configuration
└── yarn.lock             # → yarn lockfile (never edit)
```

## Credit Where It's Due
- [wpack.io](https://wpack.io)