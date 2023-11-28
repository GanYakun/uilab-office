/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-17 17:18:59
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-11-28 09:03:12
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
    path: '/menu1',
    name: 'Apps',
    icon: 'smile',
    routes: [
      {
        name: 'role-manage',
        path: '/menu1/role-manage',
        routes: [
          { path: '/menu1/role-manage', redirect: '/menu1/role-manage/RolesList' },
          {
            path: '/menu1/role-manage/RolesList',
            component: '../../lib/Uilab-Comp/smart-comp/UIPages/ListReport',
            hideInMenu: true,
          },
          {
            name: 'RolesObjectPage',
            path: '/menu1/role-manage/RolesObjectPage',
            component: '../../lib/Uilab-Comp/smart-comp/UIPages/ObjectPage',
            hideInMenu: true,
          },
        ]
      },
      {
        name: 'AssetEntriesList',
        path: '/menu1/assetentry-manage',
        routes: [
          { path: '/menu1/assetentry-manage', redirect: '/menu1/assetentry-manage/AssetEntriesList' },
          {
            path: '/menu1/assetentry-manage/AssetEntriesList',
            component: '../../lib/Uilab-Comp/smart-comp/UIPages/ListReport',
            hideInMenu: true,
          },
          {
            name: 'RolesObjectPage',
            path: '/menu1/assetentry-manage/AssetEntriesObjectPage',
            component: '../../lib/Uilab-Comp/smart-comp/UIPages/ObjectPage',
            hideInMenu: true,
          },
        ]
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
