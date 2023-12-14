/* title:标题 不必传
background:背景图片 不必传
chartColor: 图表颜色组 数组 不必传
innerRadius: 图表大小 0-1 不必传
legend: 对象 {
  isisvisible: 布尔值 控制图例是否显示 不必传
  direction: 控制图例位置(left,left-top,left-bottom,right,right-top,right-bottom,top,top-left,top-right,bottom,bottom-left,bottom-right) 不必传
  layout: 控制图例布局（horizontal' | 'vertical'）不必传
}
statisticTitle: 图表中间的标题 不必传
*/

import React, { useEffect, useState,useRef } from 'react';
import styles from './index.less';
import { Chart, Coordinate, Interval, Annotation, Tooltip } from 'bizcharts';
import ChartsBox from '../ChartsBox/index';
import PropTypes from 'prop-types';
import {
  renderAxis,
  renderSlider,
  renderLabel,
  renderTooltip,
  renderLegend,
  formatForPieRing,
  setFontScale,
  setInitialSize,
} from '../process';

const PieRing = (props) => {
  const {
    title,
    renderFontSize,
    background,
    innerRadius,
    chartColor,
    legend,
    total,
    statisticTitle,
    chartEnum,
    currentData,
    portletName,
  } = props;

  const [chartDate, setChartDate] = useState([]);
  const [isMix, setIsMix] = useState(null);
  const [isBold, setIsBold] = useState(null);
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    currentData && setChartDate(formatForPieRing(chartEnum, currentData[portletName]).arr);
    currentData && setIsMix(formatForPieRing(chartEnum, currentData[portletName]).isMix);
    currentData && setIsBold(formatForPieRing(chartEnum, currentData[portletName]).isBold);
    currentData && setTotalData(formatForPieRing(chartEnum, currentData[portletName]).arrTotal);
  }, [currentData]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
    {/* <ChartsBox
      title={title}
      background={background}
      renderFontSize={renderFontSize}
      setRenderFontSize={setRenderFontSize}
    > */}
      <Chart
        placeholder={true}
        data={chartDate && chartDate}
        height={'100%'}
        width={`40%`}
        padding="auto"
        autoFit
      >
        {renderLegend(legend.isisvisible, legend.direction, legend.layout, renderFontSize)}
        <Coordinate type="theta" innerRadius={innerRadius} />
        <Tooltip showTitle={false} name={false} />;
        <Interval
          position="value"
          adjust="stack"
          color={['key', chartColor]}
          size={[
            'key',
            (key) => {
              return key === isBold ? renderFontSize * 3 : renderFontSize * 2;
            },
          ]}
        />
        <Annotation.Text
          position={['50%', `${52 - renderFontSize}%`]}
          content={(obj) => {
            let summation = 0;
            for (let i = obj.length - 1; i >= 0; i--) {
              summation += obj[i].value;
            }
            let demo = 0;
            obj.map((v, i) => {
              if (v.key === isMix) {
                demo = ((v.value / summation) * 100).toFixed(1);
              }
            });
            return demo + '%';
          }}
          style={{
            fontSize: renderFontSize * 2.5,
            fill: '#FFFFFF',
            textAlign: 'center',
          }}
        />
        <Annotation.Text
          position={['50%', `${50 + renderFontSize}%`]}
          content={statisticTitle}
          style={{
            // lineHeight: '240px',
            fontSize: renderFontSize * 1.5,
            fill: '#FFFFFF',
            textAlign: 'center',
          }}
        />
      </Chart>
      <div className={styles.totalBox}>
        {totalData.map((item, i) => {
          const { key, value } = item;
          return (
            <div className={styles.total1} key={i}>
              <div
                className={styles.toTality1}
                style={{ fontSize: `${1.26 * setFontScale(key.toString(),3)}em` }}
              >
                {key}
              </div>
              <div
                className={styles.amount1}
                style={{ fontSize: `${1.68 * setFontScale(value.toString(),3)}em` }}
              >
                {value}
              </div>
            </div>
          );
        })}
      </div>
    {/* </ChartsBox> */}
    </div>
  );
};

PieRing.propTypes = {
  title: PropTypes.string,
  innerRadius: PropTypes.number,
  chartColor: PropTypes.array,
  legend: PropTypes.object,
  statisticTitle: PropTypes.string,
};

PieRing.defaultProps = {
  innerRadius: 0.6,
  chartColor: null,
  legend: {
    isisvisible: false,
    direction: 'top-right',
    layout: 'horizontal',
  },
};

export default PieRing;
