module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint",
        sourceType: 'module',
        ecmaVersion: 2017
    },
    env: {
        browser: true,
    },
    "extends": [
        "plugin:vue/recommended"
    ],
    plugins: [
        'vue'
    ],
    'rules': {
        "space-before-function-paren": 0,
        'comma-dangle': 'off',
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-multiple-empty-lines': 0,
        'no-mixed-operators': 0,
        'yoda': 0,
        "indent": 0,
        'vue/html-indent': 0,
        'vue/max-attributes-per-line': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/attributes-order': 0,
        'vue/html-closing-bracket-spacing': 0,
        'no-new': 0,
        'object-curly-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
