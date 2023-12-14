import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChartsBox from '../ChartsBox/index';
import styles from './index.less';
import { analysisData ,setFontScale} from '../process';

const List = (props) => {
  const { chartEnum, currentData, portletName,demoData ,renderFontSize,fontSize} = props;
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    currentData && setChartData(analysisData(currentData, portletName, chartEnum));
    // setChartData(demoData)
  }, [currentData,fontSize]);

  return (
      <div className={styles.ListBox}>
        {chartData && chartData.map((item, i) => {
          const { key, value } = item;
          return (
            <div className={styles.gridBox} key={i}>
              <div className={styles.grid}>
                <div className={styles.value} style={{ fontSize: `${fontSize * 1.5}rem`}}>{value}</div>
                <div className={styles.name} style={{fontSize:`${fontSize * 0.5}rem`}}>{key}</div>
              </div>
            </div>
          );
        })}
      </div>
  );
};

List.propTypes = {
  title: PropTypes.string,
};
List.defaultProps = {
  title: '未定义标题',
};

export default List;
