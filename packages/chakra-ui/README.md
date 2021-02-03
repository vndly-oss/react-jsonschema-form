<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/cybertec-postgresql/rjsf-chakra-ui">
    <img src="https://raw.githubusercontent.com/cybertec-postgresql/rjsf-chakra-ui/master/rjsf-chakra-ui-logo.png" alt="Logo" width="140" height="120">
  </a>

  <h3 align="center">@rjsf/chakra-ui</h3>

  <p align="center">
  Material-UI theme, fields and widgets for <a href="https://github.com/mozilla-services/react-jsonschema-form/"><code>react-jsonschema-form</code></a>.
    <br />
    <a href="https://react-jsonschema-form.readthedocs.io/en/latest/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rjsf-team.github.io/rjsf-chakra-ui/">View Playground</a>
    ·
    <a href="https://github.com/rjsf-team/rjsf-chakra-ui/issues">Report Bug</a>
    ·
    <a href="https://github.com/rjsf-team/rjsf-chakra-ui/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

[![rjsf-chakra-ui Screen Shot][product-screenshot]](https://cybertec-postgresql.github.io/rjsf-chakra-ui)

Exports `chakra-ui` theme, fields and widgets for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form/)
- [Material-UI](https://chakra-ui.com/)
- [Typescript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- `@chakra-ui/core`
- `@rjsf/core >= 2.0.0`

```bash
yarn add @chakra-ui/core @rjsf/core
```

### Installation

```bash
yarn add @rjsf/chakra-ui
```

## Usage

```js
import Form from '@rjsf/chakra-ui';
```

or

```js
import { withTheme } from '@rjsf/core';
import { Theme as ChakraTheme } from '@rjsf/chakra-ui';

const Form = withTheme(ChakraTheme);
```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[build-shield]: https://img.shields.io/circleci/build/github/cybertec-postgresql/rjsf-chakra-ui.svg?style=flat-square&token=a58b0890f96bff2b53eef0f4d9c9e5d16eec2200
[build-url]: https://circleci.com/gh/cybertec-postgresql/rjsf-chakra-ui
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[contributors-url]: https://github.com/cybertec-postgresql/rjsf-chakra-ui/graphs/contributors
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
[npm-shield]: https://img.shields.io/npm/v/rjsf-chakra-ui/latest.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/rjsf-chakra-ui
[npm-dl-shield]: https://img.shields.io/npm/dm/rjsf-chakra-ui.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/rjsf-chakra-ui
[product-screenshot]: https://raw.githubusercontent.com/cybertec-postgresql/rjsf-chakra-ui/master/screenshot.png