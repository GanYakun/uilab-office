
<!--
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2022-01-20 21:59:52
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-12-13 15:09:38
 * @FilePath: /uilab/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

## 一、结构介绍：

##### 1.应用配置

        a.confg 项目配置文件
        b.lib 子模块
        c.public 静态资源
        d.src 业务代码
        e.test 测试代码
        f.typings 类型定义
        g.mock 接口模拟数据
        h.config.ts 项目配置
        i.mock.ts 接口模拟数据
        j.plugin.ts 插件配置
        k.theme.ts 主题配置
        l.umi.ts 项目配置
        m.router.ts 路由配置

## 二、环境搭建：

##### 1.软件包版本说明：

| 序号 | 软件名                      | 版本                            |
| ---- | --------------------------- | ------------------------------- |
| 1    | umi.js                      | v3.5                            |
| 2    | node.js                     | 10.13 或以上，且 17.00 以下     |
| 3    | npm                         | <7.00                           |
| 4    | yarn                        | ^1.7                            |
| 3    | @umijs/plugin-qiankun       | v2.39(主应用、子应用都需要安装) |
| 4    | react                       | ^17.0.0                         |
| 5    | react-dom                   | 17.0.0                          |
| 6    | antd                        | 4.20.0                          |
| 7    | launchPad 为 ant design pro | 5.2.0                           |

## 三、uiLab 代码运行步骤：

0. 如果没有安装yarn，需要执行 `npm install -g yarn`
1. 进入 uilab 根目录
2. `yarn install` ，npm 版本大于 14 请使用 yarn1.6+
3. `npm run start`  启动主应用
4. `npm run build`  打包主应用

## 四、添加子模块：
1. git submodule add -b master -f xxxx.git lib/Ui5
2. git submodule init
3. git submodule update

