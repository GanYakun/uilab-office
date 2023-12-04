/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2022-08-04 18:10:09
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-11-17 18:18:13
 * @FilePath: /qiankun/uiLab/apps/launchPad/src/pages/LaunchPad.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import './index.less';
import { getRouteFiles } from 'config/routes';


const LaunchPad: React.FC = () => {
  const data = [
    {
      name: "Vendors",
      children: [
        {
          url: "xxx",
          title: "Registered Vendors",
        },
        {
          url: "xxx",
          title: "Registered Vendors",
        },
        {
          url: "xxx",
          title: "Registered Vendors",
        },
        {
          url: "xxx",
          title: "Registered Vendors",
        },
        {
          url: "xxx",
          title: "Registered Vendors",
        },
        {
          url: "xxx",
          title: "Registered Vendors",
        }
      ]
    }
  ]
  useEffect(() => {
    // console.log(getRouteFiles());
  }, [])
  return <div>
    {data.map((item, index) => {
      return <div key={index} className='container'>
        <div className='groupName'>{item.name}</div>
        <div className='pannel'>
          {
            item.children.map((childItem, childIndex) => {
              return <div className='pannel-item' key={`child-${childIndex}`}>
                <div style={{ width: "100%" }}>
                  <div>
                    <img width={48} height={48} src='navigate@2x.png' />
                  </div>
                  <div className='title'>{childItem.title}</div>
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