/* title:标题 不必传
background:背景图片 不必传
chartColor: 图表颜色组 数组 不必传
innerRadius: 饼图内圈大小 0-1 不必传
labelType: 饼图label显示位置类型(inner,outer ,outer-center,spider) 不必传
labelUnit： 饼图label显示单位 不必传
legend: 对象 {
  isisvisible: 布尔值 控制图例是否显示 不必传
  direction: 控制图例位置(left,left-top,left-bottom,right,right-top,right-bottom,top,top-left,top-right,bottom,bottom-left,bottom-right) 不必传
  layout: 控制图例布局（horizontal' | 'vertical'）不必传
}
statisticTitle: 图表中间的标题 不必传
total: 数组对象[{
  title: 图表旁边的分析主题 不必传
}]
legendUnit  图例单位
tooltipUnit 提示信息单位
radius 饼图大小
*/

import React, { useEffect, useState,useRef } from 'react';
import styles from './index.less';
import { DonutChart } from 'bizcharts';
import ChartsBox from '../ChartsBox/index';
import PropTypes from 'prop-types';
import {
  renderAxis,
  renderSlider,
  renderLabel,
  renderTooltip,
  renderLegend,
  analysisData,
  setInitialSize,
  setFontScale,
} from '../process';

const Pie = (props) => {
  const {
    title,
    renderFontSize,
    background,
    innerRadius,
    chartColor,
    labelType,
    labelUnit,
    legend,
    statisticTitle,
    breakpoint,
    currentData,
    portletName,
    chartEnum,
    legendUnit,
    tooltipUnit,
    nameUnit,
    radius,
    istotality,
    demoData
  } = props;

  const demoDatas = {
    demo1: [
      { key: '访客车辆', value: 35 },
      { key: '员工车辆', value: 50 },
    ],
    demo2: [
      { key: '季度一', value: 27 },
      { key: '季度二', value: 25 },
      { key: '季度三', value: 18 },
      { key: '季度四', value: 5 },
    ],
  };

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // setChartData(demoData)
    currentData && setChartData(analysisData(currentData, portletName, chartEnum));
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
    <div style={{ width: '100%', height: '100%',display:'flex'}}>
        <div style={{ width: `${istotality ? '60%' : '100%'}` ,height:'100%'}}>
          <DonutChart
            placeholder={true}
            data={chartData}
            // data={demoData}
            autoFit
            height={'100%'}
            width={`100%`}
            radius={radius}
            innerRadius={innerRadius}
            padding="auto"
            angleField="value"
            colorField="key"
            pieStyle={{ stroke: 'white', lineWidth: 0 }}
            color={chartColor}
            style={{ fillOpacity: 0.1 }}
            statistic={
              statisticTitle && {
                title: {
                  customHtml: () => statisticTitle,
                  style: {
                    fontSize: 1,
                    color: 'rgba(0, 0, 0, 1)',
                  },
                  offsetY: -5,
                },
                content: {
                  style: {
                    fontSize: renderFontSize * 3,
                    color: 'rgba(0, 0, 0, 1)',
                  },
                  offsetY: -5,
                },
              }
            }
            label={{
              type: labelType,
              offset: 20,
              autoRotate: false,
              // rotate: 2,
              formatter: (value) => `${value.value}${labelUnit}`,
              style: { fontSize: 8, fill: 'rgba(0, 0, 0, 1)' },
            }}
            legend={{
              visible: legend.isisvisible,
              position: legend.direction,
              layout: legend.layout,
              text: {
                style: { fontSize: renderFontSize, fill: 'rgba(0, 0, 0, 1)' },
                formatter: (value) => `${value}${legendUnit}`,
              },
            }}
            tooltip={{
              formatter: (value) => {
                return { name: `${value.key}${nameUnit ? nameUnit : ''}`, value: `${value.value}${tooltipUnit ? tooltipUnit : ''}` };
              },
            }}
          />
        </div>

        {
          istotality && <div className={styles.totalBox}>
          <div className={styles.toTality}style={{ fontSize: `${0.3 * setFontScale(sum(chartData).toString(),3)}rem` }} >{istotality}</div>
          <div className={styles.amount} style={{ fontSize: `${0.6 * setFontScale(sum(chartData).toString(),3)}rem` }}>{sum(chartData) ?sum(chartData) :0}</div>
        </div>
        }
    </div>
  );
};

Pie.propTypes = {
  title: PropTypes.string,
  innerRadius: PropTypes.number,
  chartColor: PropTypes.array,
  labelType: PropTypes.string,
  legend: PropTypes.object,
  labelUnit: PropTypes.string,
  statisticTitle: PropTypes.string,
  legendUnit: PropTypes.string,
  tooltipUnit: PropTypes.string,
};

Pie.defaultProps = {
  innerRadius: 0,
  chartColor: null,
  legend: {
    isisvisible: false,
    direction: 'top-right',
    layout: 'horizontal',
  },
  labelType: 'inner',
  labelUnit: '',
  statisticTitle: '',
  legendUnit: '',
  tooltipUnit: '',
  radius:0.8,
  istotality:null
};

export default Pie;
