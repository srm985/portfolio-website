# Portfolio Website

A static website generated from [Gatsby](https://www.gatsbyjs.org/) and [React](https://reactjs.org/). Intended to replace my legacy portfolio website built with vanilla JavaScript and [Bootstrap](https://getbootstrap.com/) V3.

## Getting Started

### Running / Developing

```
npm install
npm start
```

### Building

```
npm install
npm run build
```

### Serving

```
npm install
npm run build
npm run serve
```

## Technical Stack

This project leverages [Gatsby](https://www.gatsbyjs.org/), which sits atop [React](https://reactjs.org/) to generate a static website. Development and build tasks are handled through NPM scripts. We lint both JavaScript and SCSS with [eslint](https://www.npmjs.com/package/eslint) and [sass-lint](https://www.npmjs.com/package/sass-lint) respectively. For component development, [Storybook](https://storybook.js.org/) is used.

## Design Architecture

#### Components

This project follows a `CDD (Component-Driven Development)` philosophy, where `components` are defined as our smallest, reusable building blocks. Components may or may not contain state, but typically should not. Components may contain the composition of other components.

#### Templates

From components, the next step up is `templates`. Templates typically contain reusable page layouts. For example, all projects use the same layout. Some templates may be one-offs however, such as the landing page or a contact page.

#### Pages

Finally, we leverage `pages` to define out website architecture. Pages identify our routing structure and contain page-specific data, but should not contain any logic or styling. Their use is to simply mate page data with the styling of a given template.

## Storybook

> Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient.
>
> &mdash; [Storybook](https://storybook.js.org/)

### Adding Stories

In each existing component, you will find a `stories.js` file. This file contains all stories related to that given component. When creating a new component, generate a new `stories.js` and populate with all component options.

### Running / Developing

Running Storybook allows us to develop new React components in isolation. To run an instance, issue the following commands:

```
npm install
npm run storybook
```

### Building

Storybook provides us with the option to generate a static website from its library, similar to Gatsby. To regenerate this instance, issue the following commands:

```
npm install
npm run build-storybook
```
