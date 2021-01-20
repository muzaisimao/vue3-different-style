module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-use-before-define': ['error', { functions: false }], // 允许function声明的函数在定义前使用
    'func-names': 'off', // 允许使用function声明匿名函数
    'max-len': ['error', { code: 200 }], // 每一行最多200个字符
    'import/no-extraneous-dependencies': 'off', // 允许import开发依赖
    'vue/html-self-closing': 'off', // 允许空内容使用闭合标签
    'vue/singleline-html-element-content-newline': 'off', // 关闭单行标签的强制换行
    'no-param-reassign': ['error', { props: false }], // 允许修改函数的参数属性
    'no-unused-expressions': 'off', // 允许出现未使用的表达式
    eqeqeq: 'off', // 关闭强制使用全等于
    'import/extensions': 'off', // 允许import时省略扩展名
    'no-plusplus': 'off', // 允许使用++
    'import/no-cycle': 'off', // 允许循环引入
  },
};
