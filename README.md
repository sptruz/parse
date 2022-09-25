<div align="center">
  <img src="https://raw.githubusercontent.com/sptruz/parse/main/assets/logo.svg" alt="@MKAbuMattar/sptruz"
   width="400" height="200"
  />

  <h1>@sptruz/parse</h1>

<a href="https://sptruz.vercel.app/">https://sptruz.vercel.app/</a>

  <p>@sptruz/parse is a package for parse CSS color strings.</p>
</div>

## Installation

### Node/npm

```sh
#npm
npm install --save @sptruz/parse

#yarn
yarn add @sptruz/parse

#pnpm
pnpm add @sptruz/parse
```

### Deno

Unlike Node, Deno doesn't use a package management like NPM and instead depends on direct URL imports. You can access @sptruz/parse on deno.land/x. This is how the most recent version may be imported:

You can also specify a particular version:

```ts
import * as sptruzParse from 'https://deno.land/x/sptruz_parse@0.0.0-beta.0.0.1/mod.ts';
```

or letest version:

```ts
import * as sptruzParse from 'https://deno.land/x/sptruz_parse/mod.ts';
```

### CDN

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@sptruz/parse/lib/index.umd.js"></script>

<!-- Unpkg -->
<script src="https://unpkg.com/@sptruz/parse/lib/index.umd.js"></script>
```

> NOTE: There isn't much of a change in how it's used, but the remainder of this README assumes you're using npm and importing straight from the @sptruz/parse.

## Basic Usage

```ts
import sptruzParse from '@sptruz/parse';

(() => {
  // Parse HEX/a
  console.log(sptruzParse('#FF0000'));
  // output: { type: 'rgb', values: [ 255, 0, 0 ], alpha: 1 }

  console.log(sptruzParse('#FF000084'));
  // output: { type: 'rgb', values: [ 255, 0, 0 ], alpha: 0.5176470588235295 }

  console.log(sptruzParse('#F00'));
  // output: { type: 'rgb', values: [ 255, 0, 0 ], alpha: 1 }

  console.log(sptruzParse('#F008'));
  // output: { type: 'rgb', values: [ 255, 0, 0 ], alpha: 0.5333333333333333 }

  // Parse RGB/a
  console.log(sptruzParse('rgb(255, 0, 0)'));
  // output: { type: 'rgb', values: [ 255, 0, 0 ], alpha: 1 }

  console.log(sptruzParse('rgb(100%, 0%, 0%)'));
  // output: { type: 'rgb', values: [ 255, 0, 0 ], alpha: 1 }

  console.log(sptruzParse('rgb(255, 0, 0, 0.5)'));
  // output: { type: 'rgb', values: [ 255, 0, 0 ], alpha: 0.5 }

  console.log(sptruzParse('rgb(100%, 0%, 0%, 50%)'));
  // output: { type: 'rgb', values: [ 255, 0, 0 ], alpha: 0.5 }

  // Parse HSL/a
  console.log(sptruzParse('hsl(0, 100%, 50%)'));
  // output: { type: 'hsl', values: [ 0, 100, 50 ], alpha: 1 }

  console.log(sptruzParse('hsl(0turn, 100%, 50%)'));
  // output: { type: 'hsl', values: [ 0, 100, 50 ], alpha: 1 }

  console.log(sptruzParse('hsl(0rad, 100%, 50%)'));
  // output: { type: 'hsl', values: [ 0, 100, 50 ], alpha: 1 }

  console.log(sptruzParse('hsl(0deg, 100%, 50%)'));
  // output: { type: 'hsl', values: [ 0, 100, 50 ], alpha: 1 }

  console.log(sptruzParse('hsla(0, 100%, 50%, 0.5)'));
  // output: { type: 'hsl', values: [ 0, 100, 50 ], alpha: 0.5 }

  console.log(sptruzParse('hsla(0turn, 100%, 50%, 50%)'));
  // output: { type: 'hsl', values: [ 0, 100, 50 ], alpha: 0.5 }

  console.log(sptruzParse('hsla(0rad, 100%, 50%, 50%)'));
  // output: { type: 'hsl', values: [ 0, 100, 50 ], alpha: 0.5 }

  console.log(sptruzParse('hsla(0deg, 100%, 50%, 50%)'));
  // output: { type: 'hsl', values: [ 0, 100, 50 ], alpha: 0.5 }
})();
```

## Supports

- color value
  - HEX/a (hexadecimal) | example: #FF0000, #FF0000FF, #F00, #F00F
  - RGB/a (red, green, blue) | example: rgb(255, 0, 0), rgb(100%, 0%, 0%), rgba(255, 0, 0, 0.5), rgba(100%, 0%, 0%, 50%)
  - HSL/a (hue, saturation, lightness) | example: hsl(0, 100%, 50%), hsl(0turn, 100%, 50%), hsl(0rad, 100%, 50%), hsl(0deg, 100%, 50%), hsla(0, 100%, 50%, 0.5), hsla(0turn, 100%, 50%, 50%), hsla(0rad, 100%, 50%, 50%), hsla(0deg, 100%, 50%, 50%)
- color name
  - example: red, green, blue, yellow, orange, purple, pink, brown, black, white, gray, silver, gold, cyan, magenta, lime, maroon, navy, olive, teal, aqua, fuchsia, transparent.

## License

@sptruz/parse is licensed under the [MIT License](https://raw.githubusercontent.com/sptruz/parse/main/LICENSE).

Created with ♥ by [@MKAbuMattar](https://github.com/MKAbuMattar).
