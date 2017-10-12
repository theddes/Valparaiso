# Valparaiso website

 **Initial scaffolding was done by [`vue-CLI`](https://github.com/vuejs/vue-cli) using the [Webpack template](https://github.com/vuejs-templates/webpack)**
>
> *Using [runtime-only](https://gist.github.com/anchal20/f2ac9807263e106c1308f7143df1cf09) build of Vue*
>
> Additional core dependencies added: [`vuex`](https://github.com/vuejs/vuex) (state management), [`axios`](https://github.com/mzabriskie/axios) (http client), [`firebase`](https://www.npmjs.com/package/firebase) (Firebase Javascript SDK), [`vue-touch`](https://github.com/vuejs/vue-touch/tree/next) (Hammer.js wrapper for Vue.js), [`anime-js`](https://github.com/juliangarnier/anime) (JavaScript Animation Engine)

### **Staging**

[**valparaiso.surge.sh**](http://valparaiso.surge.sh) will be regularly updated to reflect the latest stage of development! 

### **NPM commands**

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how the Webpack template works, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---
## **Additional info, hints and tips:**

_In no particular order.._

> **Only seeing the Under Construction page?**

Switch the site mode to `0` or `1` in _/src/config/index.js_!

> **Styleguide**

Adhere to the [official VueJS styleguide]((https://vuejs.org/v2/style-guide/))! Partially enforced by the linting configuration.

> **Image optimization**

Done automatically for all images [`png|jpe?g|gif|svg`] above 5KB.

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
