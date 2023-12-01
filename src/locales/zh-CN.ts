/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-17 17:18:59
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-12-01 15:39:38
 * @FilePath: /Uilab-Application/src/locales/zh-CN.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import component from './zh-CN/component';
import globalHeader from './zh-CN/globalHeader';
import pages from './zh-CN/pages';
import pwa from './zh-CN/pwa';
import settingDrawer from './zh-CN/settingDrawer';
import settings from './zh-CN/settings';
import { appConfig } from '../../config/appConfig';
import { zhCN } from '../../lib/Uilab-Comp/smart-comp/Process/locale'
export default {
  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.copyright.produced': '蚂蚁集团体验技术部出品',
  'app.preview.down.block': '下载此页面到本地项目',
  'app.welcome.link.fetch-blocks': '获取全部区块',
  'app.welcome.link.block-list': '基于 block 开发，快速构建标准页面',
  ...pages,
  ...globalHeader,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...appConfig.appLocales['zh-CN'],
  ...zhCN,
};
