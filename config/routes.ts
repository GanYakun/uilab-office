/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-17 17:18:59
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-12-05 11:57:29
 * @FilePath: /Uilab-Application/config/routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { appConfig } from './appConfig'
/**
 * 获取当前路由文件
 */
export const getRouteFiles = () => {
  const result: any[] = []
  if (Array.isArray(appConfig.feApps)) {
    for (let group of appConfig.feApps) {
      const { path: groupPath, name: groupName, icon, apps } = group
      const groupArr = []
      for (let item of apps) {
        const { appName, access } = item
        const manifest = require(`../public/Ui5/${appName}/webapp/manifest.json`)
        const { routes, targets } = manifest['sap.ui5'].routing
        const routeArr = []
        for (let route of routes) {
          const { name } = route
          if (targets[name]?.name === 'sap.fe.templates.ListReport') {
            routeArr.push({
              path: `/${groupPath}/${appName}`,
              redirect: `/${groupPath}/${appName}/${name}`,
              access
            })
            routeArr.push({
              path: `/${groupPath}/${appName}/${name}`,
              component: `../../lib/Uilab-Comp/smart-comp/UIPages/ListReport`,
              hideInMenu: true,
              access
            })
          } else if (targets[name]?.name === 'sap.fe.templates.ObjectPage') {
            routeArr.push({
              path: `/${groupPath}/${appName}/${name}`,
              component: '../../lib/Uilab-Comp/smart-comp/UIPages/ObjectPage',
              hideInMenu: true,
              access
            })
          }
        }
        groupArr.push({
          name: `${appName}`,
          path: `/${groupPath}/${appName}`,
          routes: routeArr
        })
      }
      result.push(
        {
          path: `/${groupPath}`,
          name: groupName,
          icon: icon,
          routes: groupArr,
        },
      )
    }
  }
  if (Array.isArray(appConfig.custApps)) {
    result.forEach((item, index) => {
      for (let group of appConfig.custApps) {
        const { path: groupPath, routes } = group
        if (groupPath.includes(item.path)) {
          routes.forEach((childItem) => {
            const { path, name, routes: chidRouter } = childItem
            result[index].routes.push({
              path: `${path}`,
              name: name,
              routes: chidRouter
            })
          })
        }
      }
    })
  }
  return result
}
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
