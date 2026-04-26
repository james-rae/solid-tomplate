# SolidJS Tomplate

Just a basic starter template for a vanilla Typescript [SolidJS](https://www.solidjs.com/) website :sunflower:

- SolidJS 1.9
- Typescript 5.9
- Vite 8 builder
- Internal pattern for circular references
- Oxfmt formatting
- Basic VSCode settings
- [ES-Toolkit](https://es-toolkit.dev/) for helpful extras
- Mild NPM package protections
  - Install scripts won't run
  - Three-day package cooldown
- No router
- No CSS frameworks
- No testing frameworks (just write fantastic code and you're all good eh!)

## Setup

Have Node installed. `v24.15.0` or higher preferred. Earlier versions might throw errors due to the `min-release-age` setting.

To install the dependencies at the versions they last knowingly worked at:

```
$ npm ci
```

To install / update the dependencies with latest minor or patch updates:

```
$ npm install
```

## Coding

`index.html` is the startup page. `src/index.tsx` is the startup module. Anything in `public/` will be included in the build output root.

To run the source via local webserver:

```
$ npm run dev
```

The site will be accessible at `localhost:5173`. Code changes should trigger a hot reload.

## Build

```
$ npm run build
```

Output will appear in the `build` folder with the following structure

```
index.html
assets/
  package-name.js
  package-name.css
  package-name.js.map
  possibly bundled chunks from any imported package.json items
anything from public/
```