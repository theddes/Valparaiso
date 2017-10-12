// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    // parser: 'babel-eslint',
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2017,
        sourceType: "module"
    },
    env: {
        browser: true
    },
    extends: [
        "standard",
        "eslint:recommended",
        "plugin:vue/recommended" // or 'plugin:vue/base'
    ],
    // required to lint *.vue files
    plugins: ["vue", "html", "class-property"],
    // add your custom rules here
    rules: {
        // allow paren-less arrow functions
        "arrow-parens": 0,
        // allow async-await
        "generator-star-spacing": 0,
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        "vue/valid-v-if": "error"
    }
};
