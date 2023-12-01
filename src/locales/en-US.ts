/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-17 17:18:59
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-12-01 15:39:19
 * @FilePath: /Uilab-Application/src/locales/en-US.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import component from './en-US/component';
import globalHeader from './en-US/globalHeader';
import pages from './en-US/pages';
import pwa from './en-US/pwa';
import settingDrawer from './en-US/settingDrawer';
import settings from './en-US/settings';
import { appConfig } from '../../config/appConfig';
import {enUS} from '../../lib/Uilab-Comp/smart-comp/Process/locale'
export default {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.copyright.produced': 'Produced by Ant Financial Experience Department',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
  ...appConfig.appLocales['en-US'],
  ...enUS
};
