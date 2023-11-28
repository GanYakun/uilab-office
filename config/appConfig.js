/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-23 10:51:23
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-11-28 10:03:52
 * @FilePath: /Uilab-Application/config/appConfig.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const appConfig = {
    appName: '',
    feApps: [{
        path: 'menu1',
        name: 'Apps',
        icon: 'smile',
        apps: [
            'role-manage',
            'approval-manage',
            'assetentry-manage',
            'assetpickuprequest-manage'
        ]
    }]
}

export {
    appConfig
}
