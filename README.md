# Valparaiso website

 **Initial scaffolding was done by [`vue-CLI`](https://github.com/vuejs/vue-cli) using the [Webpack template](https://github.com/vuejs-templates/webpack)**
>
> *Using [runtime-only](https://gist.github.com/anchal20/f2ac9807263e106c1308f7143df1cf09) build of Vue*

### **Staging**

[**valparaiso.surge.sh**](https://valparaiso.surge.sh) will be regularly updated to reflect the latest stage of development! 

### **NPM commands**

The build command will use [surge](http://surge.sh/) to deploy to staging. You'll need to install it.

Check package.json for additional details and commands that might not be listed here.

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build and deploy to staging (new developers will first need to be added as collaborator to deploy to staging!)
$ npm run build

# build locally
$ npm run build-local
```

For detailed explanation on how the Webpack template works, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### **Service worker and offline caching**

A service worker is generated to cache all assets for offline use. The site is a fully functional Progressive Web App.

### **Lighthouse**

You're recommended to install Google's [Lighthouse](https://github.com/GoogleChrome/lighthouse) for performance auditing. PWA score should always be 100. The rest should score above 80.

### **Releases / Roadmap**

- **`Version 2.0 - Initial release`**
	- **October 2017**
		+ Initial release of the new website
- **`Version 2.1 - First iteration`**
	- **November 2017**
	- Tweak and expand initial release
		+ layout optimizations
		+ transitions
		+ animations
		+ copy changes
<!-- - **`Version 2.2 - Blog`**
	- **December/January 2017**
	- Introduce blog
		+ 1.0 version of blog
- **`Version 2.3 - PWA`**
	- **January/February 2017**
	- Convert site to a Progressive Web App
	- Expand and tweak blog features
- **`Version 2.5 - CMS`**
	- **April 2017**
	- Introduce a Content Management System
		+ Initial release of custom CMS -->

---
## **Additional info, hints and tips:**

_In no particular order.._

> **Only seeing the Under Construction page?**

Switch the site mode to `0` or `1` in _/src/config/index.js_!

> **Styleguide**

Adhere to the [official VueJS styleguide](https://vuejs.org/v2/style-guide/)! Partially enforced by the linting configuration.

> **Image optimization**

Done automatically for all images [`png|jpe?g|gif|svg`].

> **Convert embedded SVG**

You can convert any embedded SVG (`<img src="something.svg">`) to inline SVG by adding the `markup-inline` tag to the `img` element like so: `<img markup-inline src="something.svg">`. That way you can easily target the SVG's elements (`svg > path` etc) with e.g. CSS.

> **Linting**

Refer to `.eslintrc.js` for configuration. The default extends [JavaScript Standard Style](https://github.com/standard/standard/blob/master/docs/RULES-en.md) and [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) to enforce the official [VueJS style guide](https://vuejs.org/v2/style-guide/) as much as possible.

> **HTTP requests**

Using [`Axios`](https://github.com/mzabriskie/axios) which returns promises, allowing us to utilize [`async/await`](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9).

> **Folder/codebase structure**

- `Pages` [ _/src/pages/_ ]
	- top level components that are connected to routes. These are essentially pages.
- `Components` [ _/src/components/_ ]
	- reusable elements that are used by `pages` and sometimes other components. These are your regular components like a list item.

> **Maintainable size**

Try to keep components to 100 lines or less. If your component gets bigger than that it might be time to critically analyze it and possibly break it up into smaller (`sub`-)components.

> **Devtools**

Install and use the [Vue Devtools](https://github.com/vuejs/vue-devtools)!

---
---
_Enjoy ✌️_

![](https://i.imgur.com/apjyd3T.gif)
