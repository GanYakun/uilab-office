/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-23 10:51:23
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-11-28 17:07:19
 * @FilePath: /Uilab-Application/config/appConfig.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * @description: 应用配置
 */
const appConfig = {
    //应用名称
    title: 'Gconfig',
    subTitle: '工至可配置业务平台系统v0.1',
    logo: '/try8.svg',
    //Fe应用
    feApps: [{
        path: 'menu1',
        name: 'Apps',
        icon: 'smile',
        apps: [
            'role-manage',
            'assetentry-manage',
            'process-entity-manage',
            'approval-manage',
            'assetpickuprequest-manage'
        ]
    }],
    locale: {
        default: 'en-Us',
        antd: true,
        baseNavigator: true,
    }
}

export {
    appConfig
}
