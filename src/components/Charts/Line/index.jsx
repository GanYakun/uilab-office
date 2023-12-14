/* 
title:标题 不必传
entitySet:查询主对象 必传
background:背景图片 不必传
chartColor: 图表颜色组 数组 不必传
area:布尔值，控制线图是否显示阴影 不必传
point:布尔值，控制线图拐点是否显示点 不必传
shape:控制线图的线条类型('line','smooth','dot','dash') 不必传
legend: 对象 {
  isisvisible: 布尔值 控制图例是否显示 不必传
  direction: 控制图例位置(left,left-top,left-bottom,right,right-top,right-bottom,top,top-left,top-right,bottom,bottom-left,bottom-right) 不必传
  layout: 控制图例布局（horizontal' | 'vertical'）不必传
}
unitX:x轴单位 字符串 不必传
unitY:y轴单位 字符串 不必传
barLine:是否显示柱状加折线图 不必传
title, entitySet, background, chartColor, legend, area, point, shape, unitX, unitY
*/

import React, { useEffect, useState,useRef } from 'react';
import { Chart, Coordinate, Interval, LineAdvance } from 'bizcharts';
import ChartsBox from '../ChartsBox/index';
import PropTypes from 'prop-types';
import {
  renderAxis,
  renderSlider,
  renderLabel,
  renderTooltip,
  renderLegend,
  analysisData,
  renderTooltipFormatter,
  setInitialSize
} from '../process';

const Line = (props) => {
  const {
    title,
    renderFontSize,
    background,
    chartColor,
    legend,
    area,
    point,
    shape,
    unitX,
    unitY,
    barLine,
    unitB,
    currentData,
    portletName,
    chartEnum,
    tooltipUnit,
    nameUnit,
    scaleType,
    scaleBase,
    demoData,
    isSlider
  } = props;
  const [chartData, setChartData] = useState([]);
  const demoDatas = {
    demo1: [
      { value: 5, key: '1日', parentKey: '警告数量' },
      { value: 8, key: '2日', parentKey: '警告数量' },
      { value: 6, key: '3日', parentKey: '警告数量' },
      { value: 12, key: '4日', parentKey: '警告数量' },
      { value: 15, key: '5日', parentKey: '警告数量' },
      { value: 13, key: '6日', parentKey: '警告数量' },
      { value: 20, key: '7日', parentKey: '警告数量' },
      { value: 23, key: '8日', parentKey: '警告数量' },
      { value: 18, key: '9日', parentKey: '警告数量' },
      { value: 20, key: '10日', parentKey: '警告数量' },
      { value: 35, key: '11日', parentKey: '警告数量' },
      { value: 42, key: '12日', parentKey: '警告数量' },
    ],
    demo2: [
      { value: 10, valueB: 13, key: '1日', parentKey: '温度' },
      { value: 16, valueB: '', key: '1日', parentKey: '湿度' },
      { value: 8, valueB: 10, key: '2日', parentKey: '温度' },
      { value: 20, valueB: '', key: '2日', parentKey: '湿度' },
      { value: 6, valueB: 20, key: '3日', parentKey: '温度' },
      { value: 8, valueB: '', key: '3日', parentKey: '湿度' },
      { value: 10, valueB: 6, key: '4日', parentKey: '温度' },
      { value: 16, valueB: '', key: '4日', parentKey: '湿度' },
      { value: 8, valueB: 8, key: '5日', parentKey: '温度' },
      { value: 20, valueB: '', key: '5日', parentKey: '湿度' },
      { value: 6, valueB: 12, key: '6日', parentKey: '温度' },
      { value: 8, valueB: '', key: '6日', parentKey: '湿度' },
    ],
    demo3: [
      { value: 5, key: '1月', parentKey: '警告数量' },
      { value: 8, key: '2月', parentKey: '警告数量' },
      { value: 6, key: '3月', parentKey: '警告数量' },
      { value: 3, key: '1月', parentKey: '警告数量1' },
      { value: 4, key: '2月', parentKey: '警告数量1' },
      { value: 8, key: '3月', parentKey: '警告数量1' },
      { value: 6, key: '1月', parentKey: '警告数量2' },
      { value: 9, key: '2月', parentKey: '警告数量2' },
      { value: 7, key: '3月', parentKey: '警告数量2' },
    ],
    demo4: [
      { key: '1', value: 713, parentKey: '2022' },
      { key: '1', value: 735, parentKey: '2023' },
      { key: '2', value: 225, parentKey: '2021' },
      { key: '2', value: 554, parentKey: '2022' },
      { key: '2', value: 803, parentKey: '2023'},
      { key: '3', value: 1027, parentKey: '2021' },
      { key: '3', value: 1896, parentKey: '2022' },
      { key: '4', value: 1346, parentKey: '2021' },
      { key: '4', value: 1858, parentKey: '2022' },
    ],
  };

  useEffect(() => {
    currentData && setChartData(analysisData(currentData, portletName, chartEnum));
  }, [currentData]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
        <Chart
          autoFit
          placeholder={true}
          height={'100%'}
          width={'100%'}
          data={chartData ? chartData : []}
          scale={{
            value: { min: 0, alias: '',  type: scaleType, base: scaleBase  },
            valueB: { min: 0, alias: '耗电量' },
          }}
          padding="auto"
          appendPadding={[10, 0, 0, 0]}
        >
          {renderAxis('valueB', renderFontSize, unitB)}
          {renderAxis('value', renderFontSize, unitY)}
          {renderAxis('key', renderFontSize, unitX)}
          {barLine && <Interval position="key*valueB" />}
          <LineAdvance
            area={area}
            position="key*value"
            shape={shape}
            point={point}
            color={[chartData && chartData[0] && chartData[0].parentKey ? 'parentKey' : '', chartColor]}
            // tooltip={renderTooltipFormatter(nameUnit,tooltipUnit)}
          />
          {renderTooltip()}
          {renderLegend(legend.isisvisible, legend.direction, legend.layout, renderFontSize)}
          {isSlider && renderSlider(0,chartData)}
        </Chart>
    </div>
  );
};

Line.propTypes = {
  title: PropTypes.string,
  chartColor: PropTypes.array,
  legend: PropTypes.object,
  area: PropTypes.bool,
  point: PropTypes.bool,
  shape: PropTypes.string,
  unitX: PropTypes.string,
  unitY: PropTypes.string,
  unitB: PropTypes.string,
  barLine: PropTypes.bool,
  tooltipUnit: PropTypes.string,
};

Line.defaultProps = {
  title: '未定义标题',
  transpose: false,
  chartColor: null,
  legend: {
    isisvisible: false,
    direction: 'top-right',
    layout: 'horizontal',
  },
  area: true,
  point: true,
  shape: 'smooth',
  unitX: '',
  unitY: '',
  unitB: '',
  barLine: false,
  tooltipUnit: '',
  nameUnit:'',
};

export default Line;
