# cssdotcool

A fun resource for helping learners get creative with CSS.

## dependencies
- node

## To run locally

`npm install`

`npm run server`

Will start a live-reloading local server at http://localhost:8080/webpack-dev-server/. If you happen to forget this URL, you can run `npm run open` to open it in your browser.

## To build

`npm build`

Will build output to bundle.js

## Adding new CSS property examples

1. edit styles.js with a CSS property name (camelcased instead of dashes) and an array of example values for that property. You can set up other styles for each example using the `defaultStyles` property.
