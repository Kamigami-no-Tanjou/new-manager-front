# new-manager-front

This is the front-end for the rewrite of the KnT Manager we all know and love!

The desire to rewrite it comes from the fact that the code is pretty dirty, and PHP is a technology slowly dying.

## Recommended IDE Setup

JetBrains Webstorm, with a fast debug configuration.

## Project dependencies

- Node.js, preferably v20.18.0 and above
- Npm, preferably v10.8.2 and above

All the rest are node modules that will be added at the setup.

### Project back-end

This repo relies on the [new-manager-back](https://github.com/Kamigami-no-Tanjou/new-manager-back) repo. You'll find the instructions on how to get it up and running in the appropriate README.md file.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

> **Note:**  
> Linting and prettying are done automatically during runtime in the `dev` target.
```sh
npm run lint
```
