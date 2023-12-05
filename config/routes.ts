/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-17 17:18:59
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-12-05 18:16:46
 * @FilePath: /Uilab-Application/config/routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { getRouteFiles } from './appConfig'

export default [
  {
    path: '/launchPad',
    name: 'launchPad',
    icon: 'InsertRowLeftOutlined',
    component: './launchPad',
  },
  ...getRouteFiles(),
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/launchPad',
  },
  {
    component: './404',
  },
];
