/* 
title:标题 不必传
sumTitle:图表里面的标题 不必传
background：背景图片 不必传
*/

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChartsBox from '../ChartsBox/index';
import styles from './index.less';
import { analysisData, consoleLog, setFontScale } from '../process';

const Equipment = (props) => {
  const { sumTitle, currentData, portletName, chartEnum, demoData } = props;
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    currentData && setChartData(analysisData(currentData, portletName, chartEnum));
    // setChartData(demoData)
  }, [currentData]);

  const sum = (chartData) => {
    let Numbers = 0;
    chartData &&
      chartData.map((item) => {
        const { value } = item;
        Numbers = Numbers + value;
      });
    return Numbers;
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <div className={styles.box}>
        <div className={styles.quantityBox}>
          <div
            className={styles.title}
            style={{ fontSize: `${.24 * setFontScale(sumTitle, 5)}rem` }}
          >
            {sumTitle}
          </div>
          <div
            className={styles.quantity}
            style={{ fontSize: `${.8125 * setFontScale(sum(chartData), 3)}rem` }}
          >
            {chartData && sum(chartData)}
          </div>
        </div>
      </div>
      {chartData && (
        <div className={styles.roll}>
          <div className={styles.rollBox}>
            {chartData &&
              chartData.map((item, i) => {
                const { key, value } = item;
                return (
                  <div className={styles.equipmentBox} key={i}>
                    <div className={styles.equipmentName}>{key}</div>
                    <div className={styles.singleQuantity}>
                      <div className={styles.singleQuantityValue}>{value}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

Equipment.propTypes = {
  title: PropTypes.string,
  sumTitle: PropTypes.string,
};
Equipment.defaultProps = {
  title: '未定义标题',
  sumTitle: '未定义标题',
};

export default Equipment;
