/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-17 17:18:59
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-11-20 16:30:39
 * @FilePath: /Uilab-Application/config/routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default [
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
    path: '/launchPad',
    name: 'launchPad',
    icon: 'smile',
    component: './launchPad',
  },
  {
    path: '/role-manage',
    icon: 'smile',
    routes: [
      {
        path: '/ListReport',
        component: '../../lib/Uilab-Comp/smart-comp/UIPages/ListReport',
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
