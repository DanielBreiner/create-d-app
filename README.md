# create-d-app: Tauri (native and mobile) + Next.js + tRPC

**A fullstack cross-platform (really _all_ the platforms) application template**

-   Single codebase for:

-   -   web
-   -   desktop (Windows/MacOS/Linux)
-   -   mobile (Android/iOS)

-   Fullstack type-safe monorepo using tRPC.

Why use D app?

-   Code what you're used to - responsive websites
-   Leverage the performance benefits of Next.js (SSR/SSG)
-   Use the best of both world - Web and Native APIs - all thanks to Tauri

Why not use D app?

-   Tauri-mobile is in Alpha and shouldn't be used in production
-   You're a masochist and want to have 7 separate repos for every major platform and your backend.

## Getting started

-   Follow Tauri setup instructions at https://tauri.app/v1/guides/getting-started/prerequisites
-   Install dependencies using `yarn`
-   If you want to develop for mobile, initialize the project using `yarn tauri android init` or `yarn tauri ios init`
-   You can now run any of the dev scripts (`yarn dev`, `yarn dev:desktop`, `yarn dev:android`, `yarn dev:ios`)
