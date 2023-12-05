/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-23 10:51:23
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-12-05 18:18:42
 * @FilePath: /Uilab-Application/config/appConfig.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * @description: 应用配置
 */
const appConfig = {
    //应用名称
    title: 'OfficeAuto',
    subTitle: 'v0.1',
    logo: '/try8.svg',
    //Fe应用
    feApps: [
        {
            path: 'menu1',
            name: 'user&permission',
            icon: 'ApartmentOutlined',
            apps: [
                {
                    appName: 'role-manage',
                    access: 'canAdmin',
                }
            ],
        },
        {
            path: 'menu2',
            name: 'supplier',
            icon: 'AppstoreOutlined',
            apps: [
                {
                    appName: 'supplierparty-manage',
                    access: 'can001',
                },
                {
                    appName: 'supplierapprove-managebyprocurement',
                    access: 'can03',
                },
                {
                    appName: 'supplierapprove-managebycompliance',
                    access: 'can02',
                },
                {
                    appName: 'supplier-dd-form',
                    access: 'can04',
                },
            ],

        }
    ],
    //自定义应用
    custApps: [
        {
            "path": "/menu2",
            "name": "supplier",
            "icon": "smile",
            "routes": [
                {
                    "name": "supplierapprove-managebyapplication",
                    "path": "/menu2/supplierapprove-managebyapplication",
                    access: 'can01',
                    "routes": [{
                        access: 'can01',
                        "path": "/menu2/supplierapprove-managebyapplication",
                        "redirect": "/menu2/supplierapprove-managebyapplication/SupplierPartiesList",
                    }, {
                        "path": "/menu2/supplierapprove-managebyapplication/SupplierPartiesList",
                        "component": "../../src/pages/supplierapprove-managebyapplication/ListReport",
                        "hideInMenu": true
                    }, {
                        "path": "/menu2/supplierapprove-managebyapplication/SupplierPartiesObjectPage",
                        "component": "../../src/pages/supplierapprove-managebyapplication/ObjectPage",
                        "hideInMenu": true
                    }]
                },
            ]
        }
    ],
    //国际化配置
    appLocales: {
        'en-US': {
            'menu.login': 'Login',
            'menu.launchPad': 'LaunchPad',
            'menu.account.logout': 'logout',
            //用户与权限
            'menu.user&permission': 'User&Permission',
            'menu.user&permission.custom-department-manage': 'Users',
            'menu.user&permission.role-manage': 'Roles',
            'menu.user&permission.uilab-app-manage': 'Permission',
            //审批管理
            'menu.approvel': 'Approval',
            'menu.approvel.approval-manage': 'Approval',
            //供应商管理
            'menu.supplier': 'Vendors',
            'menu.supplier.supplierparty-manage': 'Registered Vendors',
            'menu.supplier.supplierapprove-managebyapplication': 'Vendor On-boarding',
            'menu.supplier.supplierapprove-managebycompliance': 'Vendor Check-up',
            'menu.supplier.supplierapprove-managebyprocurement': 'Vendor On-boarding (P)',
            'menu.supplier.supplier-dd-form': 'Due Diligence Form',
            //流程管理
            'menu.workflow': 'WorkFlow',
            'menu.workflow.custom-workflow-manage': 'WorkFlow',
            //对象管理
            'menu.object': 'Object',
            'menu.object.custom-entitytype-manage': 'System Object',
            'menu.object.process-entity-manage': 'Custom Object',
            'menu.object.customer-process-entity-manage': 'Ofbiz Entity',
        },
        'zh-CN': {
            'menu.login': '登录',
            'menu.launchPad': '应用磁贴',
            'menu.account.logout': '登出',
            //用户与权限
            'menu.user&permission': '用户及权限',
            'menu.user&permission.custom-department-manage': '用户',
            'menu.user&permission.role-manage': '角色',
            'menu.user&permission.uilab-app-manage': '权限',
            //审批管理
            'menu.approvel': '审批',
            'menu.approvel.approval-manage': '审批',
            //供应商管理
            'menu.supplier': '供应商',
            'menu.supplier.supplierparty-manage': '供应商',
            'menu.supplier.supplierapprove-managebyapplication': '供应商-注册',
            'menu.supplier.supplierapprove-managebycompliance': '供应商-检查',
            'menu.supplier.supplierapprove-managebyprocurement': '供应商-注册 (P)',
            'menu.supplier.supplierapprove-managebysupplier': '供应商-调查表',
            //流程管理
            'menu.workflow': '工作流',
            'menu.workflow.custom-workflow-manage': '工作流',
            //对象管理
            'menu.object': '对象',
            'menu.object.custom-entitytype-manage': '系统-对象',
            'menu.object.process-entity-manage': '自定义-对象',
            'menu.object.customer-process-entity-manage': 'Ofbiz 实体',
        }
    },
    locale: {
        default: 'en-US',//en-US,zh-CN,zh-TW
        antd: true,
        baseNavigator: true,
    },
    //服务配置
    ServiceName: 'officeauto',
    loginName: 'externalLogin',
    fetchUserInfo: {
        parameters: {
            $expand: {
                UILabApp: {},
                PartyRole: {},
                Person: {},
                RoleTypeSecurityPermission: {
                    $expand: {
                        SecurityPermission: {}
                    }
                }
            },
        },
    },
    //开发代理
    proxy: {
        dev: {
            '/officeauto/': {
                target: 'http://officeauto.banff-tech.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^': '',
                },
                secure: false, //配置关闭证书签名验证
            },
            '/odata/': {
                target: 'http://officeauto.banff-tech.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^': '',
                },
                secure: false, //配置关闭证书签名验证
            },
        },
    }
}

//权限配置
const getSecurityPermissionGroup = (currentUser) => {
    let SecurityPermissionGroup = {
        canSystem: true,//平台管理员使用
    }
    if (currentUser && currentUser.UILabApp) {
        SecurityPermissionGroup = {
            ...SecurityPermissionGroup,
            canAdmin: currentUser.userLoginId === 'admin',
            can00: currentUser.UILabApp.findIndex((item) => item.permissionId === '00') !== -1,//审批
            can001: currentUser.UILabApp.findIndex((item) => item.permissionId === '00' || item.permissionId === '01' || item.permissionId === '02' || item.permissionId === '03') !== -1,//vondors-approved
            can01: currentUser.UILabApp.findIndex((item) => item.permissionId === '01') !== -1,//Applicant
            can02: currentUser.UILabApp.findIndex((item) => item.permissionId === '02') !== -1,//Compliance
            can03: currentUser.UILabApp.findIndex((item) => item.permissionId === '03') !== -1,//procurement
            can04: currentUser.UILabApp.findIndex((item) => item.permissionId === '04') !== -1,//vondors
        }
    }

    console.log({ currentUser, SecurityPermissionGroup })

    return SecurityPermissionGroup
}

/**
 * 获取当前路由文件
 */
const getRouteFiles = () => {
    const result = []
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
                const { path: groupPath, routes, access } = group
                if (groupPath.includes(item.path)) {
                    routes.forEach((childItem) => {
                        const { path, name, routes: chidRouter } = childItem
                        result[index].routes.push({
                            path: `${path}`,
                            name: name,
                            routes: chidRouter,
                            access
                        })
                    })
                }
            }
        })
    }
    return result
}

export {
    appConfig,
    getSecurityPermissionGroup,
    getRouteFiles
}
