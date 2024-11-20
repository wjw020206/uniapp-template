module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'html'],
  globals: {
    uni: true,
    ROUTES: true,
    getCurrentPages: true
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off'
  }
};
