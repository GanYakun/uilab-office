import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { PageLoading } from '@ant-design/pro-components';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import defaultSettings from '../config/defaultSettings';
import Odata from '../lib/Uilab-Comp/utils/odata/odata.js';
import { appConfig } from '../config/appConfig';
const loginPath = '/user/login';

/** 获取用户信息比较慢的时候会展示一个*/
export const initialStateConfig = {
  loading: <PageLoading />,
};

/** 获取初始状态 */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    let option = {
      path: `Me`,
      url: `${appConfig.ServiceName}/control/odatasvc/launchpadManage/`,
      parameters: appConfig?.fetchUserInfo?.parameters
    };
    const result = await Odata.read(option);
    return result.data
  };

  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

/**
 * 格式化树形结构数据 生成 menu 层级结构 点击菜单按钮事件
 * @param menuList 原始的菜单数据
 */
export interface MenuDataItem {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  path: string;
}

/**
 * 格式化树形结构数据 生成 menu 层级结构 点击菜单按钮事件
 * @param menuList 原始的菜单数据
 */
const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
  return menuList.map((item) => {
    const { isLink, entry, path, children } = item
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : [],
      onTitleClick: () => {
        if (isLink) {
          window.open(entry)
          history.replace('/')
        }
        //页面路由重置
        if (!children) {
          history.replace(path)
        }
      },
    };
    return localItem;
  });
};

/**
 * 静态菜单数据
 * @param menuList 原始的菜单数据
 */
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    menuHeaderRender: undefined,
    menuDataRender: menuDataRender,
    ...initialState?.settings,
  };
};

export const request: RequestConfig = {
  errorConfig: {
    adaptor: (resData) => {
      return { ...resData, success: resData.ok, errorMessage: resData?.message ? resData.message : 'error', };
    },
  },
};