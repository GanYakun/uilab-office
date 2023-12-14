import ChartsReport from './ChartsReport/index'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from './index.less'
import odata from '../../../lib/Uilab-Comp/utils/odata/odata'
import { Spin } from 'antd';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

let ChartsPage = (props) => {
  const { chartPageConfig, Layouts } = props

  const [currentLayouts, setCurrentLayouts] = useState(Layouts)

  const [currentData, setCurrentData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  //拼接function Url
  const _processUri = (url, defaultParams, params) => {
    let result;
    if (!defaultParams) {
      result = `${url}()`;
    } else {
      let paramsUrl = '';
      defaultParams = { ...defaultParams, ...params };
      for (let key of Object.keys(defaultParams)) {
        const value = defaultParams[key] == null ? null : `'${defaultParams[key]}'`;
        if (paramsUrl === '') {
          paramsUrl += `${key}=${value}`;
        } else {
          paramsUrl += `,${key}=${value}`;
        }
      }
      result = `${url}(${paramsUrl})`;
    }
    return result;
  };


  //请求数据
  const query = async (params) => {
    setIsLoading(true)
    if (!chartPageConfig) return;
    const batchArr = [];
    chartPageConfig.map((i) => {
      const { interFace, odataOption, portletName } = i;
      //function
      if (interFace) {
        const isArray = interFace instanceof Array;
        if (!isArray) {
          const { url, defaultParams } = interFace;
          batchArr.push({
            path: `${_processUri(url, defaultParams, params)}`,
            method: 'GET',
            portletName,
          });
        } else {
          interFace.map((item) => {
            const { url, defaultParams, parentKey, parentValueKey } = item;
            batchArr.push({
              path: `${_processUri(url, defaultParams, params)}`,
              method: 'GET',
              portletName,
              parentKey,
              parentValueKey,
            });
          });
        }
      }
      //odata query
      if (odataOption) {
        odataOption.map((item) => {
          batchArr.push({
            ...item,
            portletName,
          });
        });

      }
    })
    if (batchArr.length > 0) {
      const resultArr = await odata.submit(batchArr);
      setIsLoading(false)
      if (resultArr && resultArr instanceof Array) {
        const obj = {};
        resultArr.map((item, index) => {
          const { data } = item;
          const { portletName, parentKey, parentValueKey } = batchArr[index];
          if (!parentKey) {
            obj[portletName] = data;
          } else {
            if (!obj[portletName]) {
              obj[portletName] = [];
            }
            obj[portletName].push({
              parentKey,
              data,
              parentValueKey,
            });
          }
        });
        setCurrentData(obj);
      }
    }
  };

  useEffect(() => {
    query()
    setCurrentLayouts(Layouts)
    return () => {
    };
  }, [Layouts])


  return (
    <>
      {
        Layouts && <div className={styles.container}>
          <ResponsiveReactGridLayout
            className="layout"
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
            layouts={currentLayouts}
            onLayoutChange={(layout, layouts) => {
              // console.log(JSON.stringify(layouts))
            }}
          >
            {
              chartPageConfig.map((item, index) => {
                return (
                  <div key={index} className={styles.demo}>
                    <ChartsReport {...item} currentData={currentData} />
                  </div>
                )
              })
            }
          </ResponsiveReactGridLayout>
          {
            isLoading && <div className={styles.loadingBox}>
              <Spin size="large" />
            </div>
          }

        </div >
      }</>
  );
}

export default ChartsPage