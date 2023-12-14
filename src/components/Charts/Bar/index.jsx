/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2022-05-10 17:37:00
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2022-05-10 18:10:03
 * @FilePath: /GBMS-Client/gbms/src/components/Charts/Bar/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * title:标题 不必传
  entitySet:查询主对象 必传
  background:背景图片 不必传
  transpose:布尔值 true表示横图表 不必传
  chartColor: 图表颜色组 数组 不必传
  chartLabel: 图表中字显示位置("top" | "middle" | "bottom"| "left" | "right") 不传则不显示 不必传
  chartType: 图表类型(dodge:分组柱状图，stack：堆叠柱状图，dodgeStack：分组加堆叠柱状图),不传则是普通柱状图 不必传
  legend: 对象 {
    isisvisible: 布尔值 控制图例是否显示 不必传
    direction: 控制图例位置(left,left-top,left-bottom,right,right-top,right-bottom,top,top-left,top-right,bottom,bottom-left,bottom-right) 不必传
    layout: 控制图例布局（horizontal' | 'vertical'）不必传
  }
  unitX:x轴单位 字符串 不必传
  unitY:y轴单位 字符串 不必传
  tooltipUnit: tooltip单位
 */
import React, { useEffect, useState, useRef } from 'react';
import { Chart, Coordinate, Interval, Geom } from 'bizcharts';
import PropTypes from 'prop-types';
import {
  renderAxis,
  renderSlider,
  renderLabel,
  renderTooltip,
  renderLegend,
  analysisData,
  setFontScale,
  renderTooltipFormatter,
  setInitialSize,
} from '../process';

const demoDates = {
  demo1: [
    { value: 10, key: '三级警告' },
    { value: 8, key: '二级警告' },
    { value: 6, key: '一级警告' },
  ],
  demo2: [
    { value: 10, key: '待处理' },
    { value: 8, key: '处理中' },
    { value: 6, key: '已完成' },
  ],
  demo3: [
    { value: 10, key: '一号', parentKey: '资产一' },
    { value: 15, key: '一号', parentKey: '资产二' },
    { value: 8, key: '二号', parentKey: '资产一' },
    { value: 9, key: '二号', parentKey: '资产二' },
    { value: 6, key: '三号', parentKey: '资产一' },
    { value: 12, key: '三号', parentKey: '资产二' },
  ],
  demo4: [
    { value: 10, key: '一号', parentKey: '资产一' },
    { value: 15, key: '一号', parentKey: '资产二' },
    { value: 8, key: '二号', parentKey: '资产一' },
    { value: 9, key: '二号', parentKey: '资产二' },
    { value: 6, key: '三号', parentKey: '资产一' },
    { value: 12, key: '三号', parentKey: '资产二' },
  ],
  demo5: [
    { parentKey: '用电量', type: '电量', value: 125, key: 'B1' },
    { parentKey: 'DDC', type: '设备数量', value: 30, key: 'B1' },
    { parentKey: 'LT', type: '设备数量', value: 65, key: 'B1' },
    { parentKey: 'VAV', type: '设备数量', value: 27, key: 'B1' },
    { parentKey: 'X', type: '设备数量', value: 7, key: 'B1' },
    { parentKey: '用电量', type: '电量', value: 334, key: 'B2' },
    { parentKey: 'DDC', type: '设备数量', value: 12, key: 'B2' },
    { parentKey: 'LT', type: '设备数量', value: 65, key: 'B2' },
    { parentKey: 'VAV', type: '设备数量', value: 27, key: 'B2' },
    { parentKey: 'X', type: '设备数量', value: 5, key: 'B2' },
    { parentKey: '用电量', type: '电量', value: 321, key: '1F' },
    { parentKey: 'DDC', type: '设备数量', value: 89, key: '1F' },
    { parentKey: 'LT', type: '设备数量', value: 65, key: '1F' },
    { parentKey: 'VAV', type: '设备数量', value: 27, key: '1F' },
    { parentKey: 'X', type: '设备数量', value: 10, key: '1F' },
    { parentKey: '用电量', type: '电量', value: 569, key: '2F' },
    { parentKey: 'DDC', type: '设备数量', value: 12, key: '2F' },
    { parentKey: 'LT', type: '设备数量', value: 65, key: '2F' },
    { parentKey: 'VAV', type: '设备数量', value: 27, key: '2F' },
    { parentKey: 'X', type: '设备数量', value: 6, key: '2F' },
  ],
  demo6: [
    { value: 10, key: '1楼栋' },
    { value: 8, key: '2楼栋' },
    { value: 6, key: '3楼栋' },
    { value: 15, key: '4楼栋' },
    { value: 8, key: '5楼栋' },
  ],
};

const barType = {
  dodge: [
    {
      type: 'dodge',
      marginRatio: 0,
    },
  ],
  stack: [
    {
      type: 'stack',
    },
  ],
  dodgeStack: [
    {
      type: 'dodge',
      dodgeBy: 'type', // 按照 type 字段进行分组
      marginRatio: 0, // 分组中各个柱子之间不留空隙
    },
    {
      type: 'stack',
    },
  ],
};

const Bar = (props) => {
  const {
    renderFontSize,
    transpose,
    chartColor,
    chartLabel,
    chartType,
    legend,
    unitX,
    unitY,
    currentData,
    portletName,
    chartEnum,
    tooltipUnit,
    nameUnit,
    scaleType,
    scaleBase,
    chartArr,
    demoData,
    isSlider,
    boxHeight,
    propsEnd,
  } = props;
  const [chartData, setChartData] = useState([]);

  useEffect(() => {

    currentData && setChartData(analysisData(currentData, portletName, chartEnum));

  }, [currentData]);
  return (
    <div style={{ width: '100%', minHeight: boxHeight ? `${chartData.length * 30}px` : '100%', height: '100%' }}>
      <Chart
        height={'100%'}
        width={'100%'}
        placeholder={true}
        data={chartData ? chartData : []}
        autoFit
        scale={{
          value: { min: 0, alias: '', type: scaleType, base: scaleBase },
        }}
        padding="auto"
        appendPadding={[10, 0, 0, 10]}
      >
        {renderAxis('value', renderFontSize, unitY)}
        {renderAxis('key', renderFontSize, unitX)}
        <Coordinate transpose={transpose} />
        <Interval
          position="key*value"
          adjust={barType[chartType]}
          label={chartLabel ? renderLabel('value', renderFontSize, chartLabel) : null}
          color={[chartType ? 'parentKey' : 'key', chartColor]}
          tooltip={renderTooltipFormatter(nameUnit, tooltipUnit, chartType)}
        />
        {renderTooltip()}
        {renderLegend(legend.isisvisible, legend.direction, legend.layout, renderFontSize)}
        {isSlider && renderSlider(0, chartData, propsEnd)}
      </Chart>
    </div>
  );
};

Bar.propTypes = {
  title: PropTypes.string,
  transpose: PropTypes.bool,
  chartColor: PropTypes.array,
  chartLabel: PropTypes.string,
  legend: PropTypes.object,
  tooltipUnit: PropTypes.string,

};
Bar.defaultProps = {
  title: '未定义标题',
  transpose: false,
  chartColor: null,
  legend: {
    isisvisible: false,
    direction: 'top-right',
    layout: 'horizontal',
  },
  tooltipUnit: '',
  nameUnit: '',
  // chartType:"dodge"
};

export default Bar;
