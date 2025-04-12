[![Installs](https://vsmarketplacebadges.dev/installs-short/ember-tooling.snippets.svg)](https://marketplace.visualstudio.com/items?itemName=ember-tooling.snippets)
![Downloads](https://vsmarketplacebadges.dev/downloads-short/ember-tooling.snippets.svg)
![Rating](https://vsmarketplacebadges.dev/rating-star/ember-tooling.snippets.svg)

# Snippets for GJS and GTS in VSCode and (neo)vim

Preconfigured snippets for ember projects following Polaris Patterns.

## Installation

- VSCode: https://marketplace.visualstudio.com/items?itemName=EmberTooling.emberjs-snippets
- Open VSX: https://open-vsx.org/extension/embertooling/emberjs-snippets
- (neo)vim:
    - packer.nvim: `use { "ember-tooling/snippets" }`


## Important

This extension is optimized for developers that use Ember Polaris patterns and features, which are supported back to ember-source 3.28.
If you need Ember Octane (and earlier) snippets, this snippet pack is not for you.

## Usage

Many snippets will show up in auto-completion prompts as you're typing.
For example,

- `@ser` will have a suggestion for `@service declare $name: $type;`
- `@cach` will have a suggestion for a `@cached` getter.
- `await render` will have a suggestion for the rendering tests' render boilerplate
- etc

Whole file generating boilerplate, such as for tests are prefixed with `g-` for generate, similar to the ember-cli command's you'd use in the terminal to generate the same file contents.

- `g-rendering-test`, `g-application-test`, `g-unit-test`
- `g-class-component`, `g-component`
- `g-route`
- `g-route-template`
- `g-service`
- etc


## Debugging

- clone the repo
- cd to the cloned repo
- `pnpm i`
- `pnpm build`
- if using vscode, on the extensions panel, click "Install from VSIX" and select the vsix file generated from `pnpm build`
