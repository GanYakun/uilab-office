import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { PageLoading } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from 'umi';
import { history, useModel } from 'umi';
import defaultSettings from '../config/defaultSettings';
import { useState } from 'react';
import { LaucnPadConfig as microApp, AppConfig } from '../../apps/launchPad';
import { stringify } from 'querystring';
import { notification } from 'antd'
import Odata from '../../lib/utils/odata/odata';
const loginPath = '/user/login';

/** 获取用户信息比较慢的时候会展示一个*/
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    let option = {
      path: `Me`,
      url: `gongsconfig/control/odatasvc/launchpadManage/`,
      parameters: AppConfig?.fetchUserInfo?.parameters
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

// ProLayout 支持的api https://procomponents.ant.design/components/layout
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
      console.log({ resData })
      return { ...resData, success: resData.ok, errorMessage: resData?.message ? resData.message : '请求错误，检测网络或联系管理员', };
    },
  },
};

//子应用的异常处理
export function useQiankunStateForSlave() {
  const { initialState } = useModel('@@initialState');
  const [masterState, setMasterState] = useState({
    microApp,
  });

  return {
    masterState,
    currentUser: initialState?.currentUser,
    setMasterState,
    onRequestError: (stateCode: number) => {
      console.log({ stateCode })
      const codeMessage = {
        200: '服务器成功返回请求的数据。',
        201: '新建或修改数据成功。',
        202: '一个请求已经进入后台排队（异步任务）。',
        204: '删除数据成功。',
        400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
        401: '用户没有权限（令牌、用户名、密码错误）。',
        403: '用户得到授权，但是访问是被禁止的。',
        404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
        405: '请求方法不被允许。',
        406: '请求的格式不可得。',
        410: '请求的资源被永久删除，且不会再得到的。',
        422: '当创建一个对象时，发生一个验证错误。',
        500: '服务器发生错误，请检查服务器。',
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。',
      };

      notification.error({
        description: codeMessage[stateCode],
        message: '网络异常',
      });

      if (stateCode === 401) {
        const { query = {}, search, pathname } = history.location;
        const { redirect } = query;
        if (window.location.pathname !== loginPath && !redirect) {
          setTimeout(() => {
            history.replace({
              pathname: loginPath,
              search: stringify({
                redirect: pathname + search,
              }),
            });
          }, 3000);
        }
      }
    }
  };
}