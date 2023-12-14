import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';
import { setFontScale } from '../process'


const SumTotal = (props) => {
  const { unit, chartEnum, currentData, portletName, demoData } = props;
  const [sumTotal, setSumTotal] = useState(0)

  useEffect(() => {
    if (currentData && currentData[portletName]) {
      if (chartEnum.value === 'valueLength') {
        setSumTotal(currentData[portletName].value.length)
      } else {
        setSumTotal(currentData[portletName].value[0][chartEnum.value])
      }
    }
    // if (currentData && currentData[portletName] && currentData[portletName][chartEnum.value]) {
    //   setSumTotal(currentData[portletName][chartEnum.value])
    // } else if (currentData && currentData[portletName] && currentData[portletName].value) {
    //   if (currentData[portletName].value.length > 1) {
    //     setSumTotal(currentData[portletName].value.length)
    //   } else {
    //     setSumTotal(currentData[portletName].value[0][chartEnum.value])
    //   }
    // }
    // currentData && setSumTotal((currentData[portletName] && currentData[portletName][chartEnum.value]) || (currentData[portletName] && currentData[portletName].value[0] && currentData[portletName].value[0][chartEnum.value]))
  }, [currentData])
  return (
    <div className={styles.sumTotalBox}>
      <div className={styles.sumTotal} style={{ fontSize: `${1.25 * setFontScale(sumTotal, 4)}rem` }}>{sumTotal ? Math.round(sumTotal * 10) / 10 : 0}</div>
      <div className={styles.unit} style={{ fontSize: `${0.5 * setFontScale(sumTotal, 4)}rem` }}>{unit}</div>
    </div>
  );
};

SumTotal.propTypes = {
  title: PropTypes.string,
  unit: PropTypes.string,
};
SumTotal.defaultProps = {
  title: '未定义标题',
  unit: '个'
};


export default SumTotal;
