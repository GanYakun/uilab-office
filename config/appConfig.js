/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-23 10:51:23
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-11-30 15:31:19
 * @FilePath: /Uilab-Application/config/appConfig.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * @description: 应用配置
 */
const appConfig = {
    //应用名称
    title: 'OfficeAuto',
    subTitle: '工至可配置业务平台系统v0.1',
    logo: '/try8.svg',
    //Fe应用
    feApps: [
        {
            path: 'menu1',
            name: 'user&permission',
            icon: 'smile',
            apps: [
                'role-manage',
            ],
        },
        {
            path: 'menu2',
            name: 'supplier',
            icon: 'smile',
            apps: [
                'supplierapprove-managebyapplication',
                'supplierapprove-managebyprocurement',
                'supplierapprove-managebycompliance',
                'supplier-dd-form',
            ],

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

export {
    appConfig
}
