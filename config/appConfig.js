/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-23 10:51:23
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-11-30 11:44:17
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
    feApps: [{
        path: 'menu1',
        name: 'Apps',
        icon: 'smile',
        apps: [
            'role-manage',
            'supplierapprove-managebyapplication',
            'supplierapprove-managebyprocurement',
            'supplierapprove-managebycompliance',
            'supplier-dd-form'
        ]
    }],
    //国际化配置
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
