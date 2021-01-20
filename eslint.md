
### 〇. 温馨提示


1. 此文档仅支持 vue-cli3.x以上脚手架搭建的项目, 旧项目升级后再配置

2. 执行配置前请先保存当前项目的状态, 最好切个新分支出来, 不然...嘿嘿嘿....

3. 配置加修复一个项目根据大小不同大概需要1-4个小时, 请合理安排

---

### 一. 安装依赖

1. 卸载旧依赖: 如果以前有安装过 @vue/eslint-config-standard, gt-eslintrc 请先卸载, 如无安装请忽略这条(pacakge.json中搜索)

```sh
yarn remove @vue/eslint-config-standard gt-eslintrc
```

2. 安装新依赖: 

```sh
# 安装 eslint 相关依赖
yarn add eslint eslint-plugin-import eslint-plugin-vue -D

# 安装 eslint 相关插件
yarn add babel-eslint @vue/cli-plugin-eslint @vue/eslint-config-airbnb -D
```

---

### 二. 配置 `.eslintrc.js` 文件

1. 删除文件旧的内容, 如果没有就在当前项目根目录下新增 `.eslintrc.js`

2. 把以下内容复制到 `.eslintrc.js` 中

3. 如需配置全局变量`globals`, 关闭某些规则`rules`, 请参考内容中的注释

> 如无特殊情况请不要直接禁用某条规则, 请参考 [修复技巧](#六、修复技巧和功能说明)

- **`.eslintrc.js` 文件**

    ```js
        module.exports = {
            root: true,
            env: {
                node: true,
                browser: true,
                es6: true,
            },
            extends: [
                'plugin:vue/recommended',
                '@vue/airbnb',
            ],
            parserOptions: {
                parser: 'babel-eslint',
            },
            rules: {
                'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用consele
                'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用debugger
                // https://eslint.org/docs/rules/linebreak-style#enforce-consistent-linebreak-style-linebreak-style
                'linebreak-style': 'off', // 忽略检测换行风格 详情在这 ↑
                'comma-dangle': 'off',
                'vue/max-attributes-per-line': 'off', // 关闭强制 html 标签换行
                'no-param-reassign': ['error', { props: false }], // 允许修改参数中的属性值
                'prefer-destructuring': ['error', { object: true, array: false }], // 允许数组通过下标取值
                'no-use-before-define': ['error', { functions: false }], // 允许function声明的函数在定义前使用
                'func-names': 'off', // 允许使用function声明匿名函数
                'max-len': ['error', { code: 200 }], // 每一行最多200个字符
                'import/no-extraneous-dependencies': 'off', // 允许import开发依赖
                'vue/html-self-closing': 'off', // 允许空内容使用闭合标签
                'vue/singleline-html-element-content-newline': 'off', // 关闭单行标签的强制换行
                'no-unused-expressions': 'off', // 允许出现未使用的表达式
                'import/extensions': 'off', // 允许import时省略扩展名
                'no-restricted-syntax': 'off', // 关闭 ‘禁止使用指定的语法’
                eqeqeq: 'off', // 关闭强制使用全等于
                'no-plusplus': 'off', // 允许使用++
                'import/no-cycle': 'off', // 允许循环引入
            },
            globals: {
                // 配置全局变量,
                // 场景: 第三方库中的全局变量(如jq, uni-app...), 如果不配置, 会提示 `使用未定义变量` 错误
                // 配置: ↓ 参考这里, 假设微信中的wx是全局变量, 就新增配置 `wx: true` (以下为例子,可删除)
                uni: true,
                $: true,
            },
        };
    ```

### 三. 配置 `.eslintignore` 文件

> 此文件的作用是忽略检测指定目录/文件中的代码, 一般用于屏蔽第三方库, 打包文件等...

- 例子: 忽略检测dist目录

- **`.eslintignore` 文件**

  ```
    dist/
  ```

---

### 四. 配置 `.editorconfig` 文件

> 此文件的作用是, 统一编辑器空格, Tab等格式

- ↓ ↓ ↓ 统一以下配置 ↓ ↓ ↓

- **`.editorconfig` 文件**

  ```
    [*.{js,jsx,ts,tsx,vue}]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    trim_trailing_whitespace = true
    insert_final_newline = true
    max_line_length = 100
  ```

---

### 五. 配置 VS Code

1. 安装 `ESLint`, `EditorConfig`, `Prettier` 插件

2. 配置保存自动修复/格式化

  - 打开 `设置` , 点击右上角 `打开设置(json)`

  - 将以下配置复制进去, 设置为 `true` 保存时自动修复, false反之

    ```json
        "editor.codeActionsOnSave": {
            "source.fixAll": true,
            "source.fixAll.eslint": true
        },
        // json文件保存自动格式化
        "[json]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": true
        },
    ```

3. 配置快捷键修复

  - 打开 `键盘快捷方式`

  - 搜索 `eslint.executeAutofix`

  - 双击设置自定义快捷键 (建议 Alt + V)


> **重要: 修改完以上配置后, 请重启VS Code, 重启VS Code, 重启VS Code!!!**

---

### 六. 测试 VS Code, ESLint是否配置成功

1. VS Code启动项目后, 随便打开src下的一个.js文件 ( 建议 `main.js` )

2. 查看 VS Code右下角是否出现 `🚫ESLint`, `√ESLint`, `√√ESLint`

3. 按下快捷键 `Ctrl + Shift + P`, 输入 `ESLint: Manage Library Execution` 选择并回车

4. 选中弹框的 `Allow Everywhere` 选项, 右下角的图标变为 `√√ESLint`

5. 去掉一行js语句后的分号, 出现下的图错误提示, 代表 - ESLint检测配置成功

  ![testing1](https://maint.deeptel.com.cn/upload/matel/202009/image/1275f404-4521-3dea-9941-d6efd0b759d5_1599202156722.png)

6. 保存当前文件, 编辑器自动添加分号, 代表 - ESLint保存自动修复配置成功

7. 如果还是有问题, 可以找李世钦, 刘凯, 罗志诚协助

---

### 六、修复技巧和功能说明

#### 1. 功能说明


  ![info1](https://maint.deeptel.com.cn/upload/matel/202009/image/41e2e04c-2661-38ef-956a-bc04abe775bc_1599203676471.png)


    * ① - 控制台 `问题` 栏, 显示当前文件中的错误个数
    * ② - 提示语法错误的位置
    * ③ - 快速修复功能, 后面详细说
    * ④ - 打开语法错误的详细说明, (如何修复, 正确写法, 为什么要这么写)
    * ⑤ - 点击后定位到错误的具体位置

#### 2. 快速修复


  ![info2](https://maint.deeptel.com.cn/upload/matel/202009/image/40596a71-7d10-3df2-98f6-25afd3fa3233_1599206026133.png)


    * ① - 修复当前错误, 跟保存自动修复, 快捷键修复, 命令修复一样(仅限可 `自动修复` 的规则)
    * ② - 忽略检测下一行代码, (特殊情况下使用)
    * ③ - 忽略检测当前文件, 同上
    * ④ - 打开语法错误的详细说明
    * ⑤ - 修复当前页面可自动修复的问题 (同①)


#### 3. 当项目配置完毕后, 就可以着手错误修复了, 这里提供两种参考技巧


 **方式1 :** 

  1. 依次点开所有.js,.vue文件, 使用保存自动修复或快捷键修复

  2. 剩余不支持 `自动修复` 的内容, 请按照提示手动修复

 **方式2 :** 

  1. 打开 `package.json` , 在 `script` 中添加 `"lint": "vue-cli-service lint"`

  2. 打开 `.eslintignore` , 配置忽略检测的文件/文件夹, 特别是第三方或压缩过的代码

  3. 保存当前的项目状态, 推荐切个新分支出来, 不然运行以下命令可能造成不可挽回的损失!!!

  4. 运行 `yarn lint` 或则 `npm run lint`, 修复所有文件中的可 `自动修复` 项

  5. 上面命令还会在 `终端` 中出所有需手动修复错误的位置和数量, 可以依次点击进去修复

  6. 如过错误过多, 会导致终端中的信息难以阅读, 此时可以使用 `方式1` 继续修复

---

### 七、HBuilderX 格式化操作、及格式化插件配置说明。


        以上配置仅支持vscode编辑器，如果有大佬坚持要使用HBuildX开发uniapp,这里也提供官方的eslint配置工具。


  1. HBuilderX 格式化操作、及格式化插件配置说明：https://ask.dcloud.net.cn/article/36529

  2. eslint-js自动修复功能：https://ext.dcloud.net.cn/plugin?id=2037

  3. eslint-vue自动修复功能：https://ext.dcloud.net.cn/plugin?id=2005
  


### 资料链接

* ESLint官网: https://eslint.org/

* ESLint中文网: https://cn.eslint.org/

* airbnb(爱彼迎)代码规范说明: https://github.com/airbnb/javascript

* airbnb代码规范说明-中文: https://github.com/lin-123/javascript

* Vue代码规范说明: https://eslint.vuejs.org/rules/
