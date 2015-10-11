# cssdotcool

A fun resource for helping learners get creative with CSS.

## dependencies
- node

## To run locally
`npm install -g webpack`

`npm install -g webpack-dev-server`

`npm install`

`npm run server`

Will start a live-reloading local server at http://localhost:8080/webpack-dev-server/. If you happen to forget this URL, you can run `npm run open` to open it in your browser.

## To build

`npm build`

Will build output to bundle.js

## Adding new CSS property examples

1. edit styles.js with a CSS property name (camelcased instead of dashes) and an array of example values for that property. You can set up other styles for each example using the `defaultStyles` property.

## Adding new pages

1. Create a new component in ./src/components
2. Imoprt your component into index.js
3. Add a new `<Route>`  component to `routes` in index.js, with `handler` property set to your component
4. Import your component to main.js and add a new `<link>` component to `links`

## To use offline

Click the "download zip" button, extract, and open index.html in your browser.
