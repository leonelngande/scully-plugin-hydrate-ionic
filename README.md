# An Attempt at Prerendering Ionic Components with Scully

This project includes a ScullyIO plugin that attempts to prerender Ionic components. You can find it here `scully/plugins/hydrate-ionic-components.ts`.

It is a `post render` plugin that passes the html string from prerendering to the function `renderToString` imported from `@ionic/core/hydrate`.

I got the idea to attempt using `renderToString` after reading [this Tweet](https://twitter.com/mhartington/status/1303296794680594434) under a thread discussing prerendering Ionic components with Scully.

At this point the results are not as expected though and I'd like help from anyone with a good understanding of how Ionic components are hydrated.

## Install the Ionic app
```sh
npm install
```

## Run the Ionic app on the browser

```sh
npm run start
```

## Prerender the Ionic app

```sh
npm run scully
```

## Serve the prerendered Ionic app

```sh
npm run scully:serve
```

## Demo
- [Online demo](https://leonelngande.github.io/scully-plugin-hydrate-ionic/)
