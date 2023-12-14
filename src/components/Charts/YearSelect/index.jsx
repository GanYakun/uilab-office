import React, { useEffect, useState } from 'react';
import styles from './index.less';
import ChartsBox from '../ChartsBox/index';
import PropTypes from 'prop-types';
import { setFontScale } from '../process';

const YearSelect = (props) => {
  const { unit, description, breakpoint, onChange, currentData, portletName } = props;
  const [index, setIndex] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    currentData && setChartData(currentData[portletName] && currentData[portletName].value);
  }, [currentData]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', overflowX: 'auto' }}>
      {chartData.map((item, i) => {
        const { dateTime, value } = item;
        return (
          <div
            className={styles.yearSelectBox}
            style={{
              minWidth: `calc(${breakpoint === 'lg' ? '25%' : '50%'} - 8px)`,
              background: `linear-gradient(180deg, rgba(214, 246, 255, 0), rgba(155, 224, 255, 0.4)) 1 1`,
              color: index === i ? '#FFFFFF' : '#687391',
              opacity: index === i ? '1' : '0.6',
            }}
            key={i}
            onClick={() => {
              setIndex(i);
              onChange({ year: dateTime });
            }}
          >
            <div className={styles.valueUnit}>
              <div className={styles.value}>{value}</div>
              <div className={styles.unit}>{unit}</div>
            </div>
            <div className={styles.description}>
              {dateTime}
              {description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YearSelect;
