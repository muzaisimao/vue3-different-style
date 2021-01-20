* https://v3.cn.vuejs.org/

* https://composition-api.vuejs.org/zh/

* https://github.com/vuejs/rfcs/pull/222

### 五. 测试 VS Code, ESLint是否配置成功

1. VS Code启动项目后, 随便打开src下的一个.js文件 ( 建议 `main.js` )


2. 如果出现了下图的弹出, 请选择 `Allow`, ( 没有请忽略 )


  ![弹窗](https://maint.deeptel.com.cn/upload/matel/202009/image/b1fa5d28-dcc0-35ba-ba7b-44a0c13905e8_1599200667030.png)


3. 去掉一行js语句后的分号, 如果出现了下图错误提示的情况, 代表配置成功


  ![testing1](https://maint.deeptel.com.cn/upload/matel/202009/image/1275f404-4521-3dea-9941-d6efd0b759d5_1599202156722.png)


4. 按以上配置后没有出现错误提示, 打开 `设置(json)` 文件, 把以下配置复制进去


    ```json
     "eslint.workingDirectories": [{ "mode": "auto" }] 
    ```


5. 然后保存设置并重启VS Code, 重复以上步骤检测是否配置成功


6. 如果还是有问题, 可以找李世钦, 罗志诚协助


---

1. ↓ ↓ ↓ 统一以下配置 ↓ ↓ ↓

- **`.eslintignore` 文件**

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