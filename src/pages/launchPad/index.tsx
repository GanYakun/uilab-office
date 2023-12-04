/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2022-08-04 18:10:09
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-12-04 14:21:22
 * @FilePath: /qiankun/uiLab/apps/launchPad/src/pages/LaunchPad.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import { appConfig } from '../../../config/appConfig'
import { history as umiHistory } from 'umi';

const LaunchPad: React.FC = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  useEffect(() => {
    setDataSource(appConfig.feApps);
  }, [])
  //页面跳转
  const _historyPush = (url: string) => {
    umiHistory.push({
      pathname: url,
      query: {},
    })
  }
  return <div>
    {dataSource?.map((item: any, index: number) => {
      return <div key={index} className='container'>
        <div className='groupName'>{item.name}</div>
        <div className='pannel'>
          {
            item.apps.map((childItem: any, childIndex: number) => {
              return <div className='pannel-item' key={`child-${childIndex}`} onClick={() => _historyPush(`/${item.path}/${childItem}`)}>
                <div style={{ width: "100%" }}>
                  <div>
                    <img width={48} height={48} src='navigate@2x.png' />
                  </div>
                  <div className='title'>{childItem}</div>
                  <div className='description'></div>
                </div>
                <div className='tags'></div>
                <div className='bottom'>
                  <img className='navigate' src='navigate@2x.png' />
                </div>
              </div>
            })
          }
        </div>
      </div>
    })}
  </div>
}

export default LaunchPad;