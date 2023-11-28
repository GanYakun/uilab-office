/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2022-09-21 15:21:37
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-11-28 16:48:28
 * @FilePath: /uilab-gbms/launchPad/config/defaultSettings.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Settings as LayoutSettings } from '@ant-design/pro-components';
import { appConfig } from '../config/appConfig'

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  "navTheme": 'dark',
  "primaryColor": "#1890ff",
  "layout": "side",
  "contentWidth": "Fixed",
  "fixedHeader": true,
  "fixSiderbar": true,
  "pwa": false,
  "title": appConfig.title,
  "logo": appConfig.logo,
  "headerHeight": 48,
  "splitMenus": false,
  "footerRender": false,
  "menu": {
    locale: false, //关闭国际化
  },
}


export default Settings;
