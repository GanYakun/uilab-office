import {
  Chart,
  Line,
  Point,
  Tooltip,
  getTheme,
  G2,
  Geom,
  Axis,
  Coordinate,
  Label,
  Legend,
  Interval,
  Util,
  DonutChart,
  LineAdvance,
  legend,
  Slider,
  ColumnChart,
  registerShape,
} from 'bizcharts';

//坐标轴配置
const renderAxis = (names, fontSizes, umit) => {
  return (
    <Axis
      name={names}
      label={{
        formatter: (value) => `${value}${umit ? umit : ''}`,
        style: {
          fontSize: fontSizes,
        },
      }}
      tickLine={false}
      grid={{
        line:
          names === 'value'
            ? {
              style: {
                lineWidth: 0.3,
              },
            }
            : null,
      }}
    />
  );
};

//滑动条配置
const renderSlider = (start, data, propsEnd) => {
  const arr = [];
  if (Array.isArray(data)) {
    data &&
      data.map((item) => {
        const indexArr = arr.findIndex((d) => d.key === item.key);
        if (indexArr === -1) {
          arr.push(item);
        }
      });
  }
  const end = 7 / arr.length;
  return (
    <Slider
      start={start}
      end={propsEnd ? propsEnd : end}
      padding={[5, 5, 5, 5]}
      handlerStyle={{ height: 20 }}
      textStyle={{ fontSize: 10, lineHeight: 30 }}
    />
  );
};

//显示文本配置
const renderLabel = (value, fontSizes, direction, unit) => {
  return [
    `${value}`,
    (value) => {
      return {
        visible: true,
        content: value ? `${value}${unit ? unit : ''}` : '',
        position: direction && direction,
        style: {
          fill: 'rgba(0, 0, 0, 1)',
          fontSize: fontSizes - 2,
        },
      };
    },
  ];
};

//tooltip配置
const renderTooltip = () => {
  return <Tooltip showCrosshairs showTitle={false} shared={true} name={false} />;
};

//tooplTip格式化配置
const renderTooltipFormatter = (nameUnit, tooltipUnit, chartType) => {
  return [
    chartType ? 'parentKey*value' : 'key*value',
    (name, value) => {
      return {
        name: `${name}${nameUnit && nameUnit}`,
        value: `${value}${tooltipUnit && tooltipUnit}`,
      };
    },
  ];
};

//图例配置
const renderLegend = (isvisible, direction, layout, fontSizes) => {
  return (
    <Legend
      visible={isvisible}
      position={direction ? direction : 'top-right'}
      layout={layout ? layout : 'horizontal'}
      itemName={{
        formatter: (value) => {
          return value;
        },
        style: {
          fontSize: fontSizes,
          fill: 'rgba(0, 0, 0, 1)',
        },
      }}
    />
  );
};

const toDecimal = (value) => {
  let f = parseFloat(value)
  if (isNaN(f)) {
    return
  }
  f = Math.round(value * 100) / 100
  return f
}

//解析数据
const analysisData = (currentData, portletName, chartEnum) => {
  let chartData = [];
  if (currentData && Array.isArray(currentData[portletName])) {
    currentData[portletName].map((item) => {
      const { data, parentKey, parentValueKey } = item;
      data &&
        data.value.map((item) => {
          let obj = {};
          obj.key = item[chartEnum.key] || item[chartEnum.key] === 0 ? item[chartEnum.key] && item[chartEnum.key].toString() : parentKey.toString();
          obj.value = parentValueKey ? item[parentValueKey] ? item[parentValueKey] : 0 : toDecimal(item[chartEnum.value]) ? toDecimal(item[chartEnum.value]) : 0;
          obj.parentKey = parentKey && parentKey.toString();
          chartData.push(obj);
        });
    });
  } else {
    if (chartEnum?.parentKey) {
      currentData[portletName] &&
        currentData[portletName].value.map((item) => {
          let obj = {};
          obj.key = item[chartEnum.parentKey] && item[chartEnum.parentKey].toString();
          obj.value = toDecimal(item[chartEnum.value]);
          obj.parentKey = item[chartEnum.key] && item[chartEnum.key].toString();
          chartData.push(obj);
          if (chartEnum.twoArr) {
            item[chartEnum.twoArr].map((i) => {
              let obj = {};
              obj.key = i[chartEnum.parentKey] && i[chartEnum.parentKey].toString();
              obj.value = toDecimal(i[chartEnum.value] ? i[chartEnum.value] : 0);
              obj.parentKey = i[chartEnum.key] && i[chartEnum.key].toString();
              chartData.push(obj);
            });
          }
        });
    } else {
      currentData[portletName] &&
        currentData[portletName].value.map((item) => {
          let obj = {};
          obj.key = (item[chartEnum.key] || item[chartEnum.key] === 0) && item[chartEnum.key] && item[chartEnum.key].toString()
          obj.value = toDecimal(item[chartEnum.value]) ? toDecimal(item[chartEnum.value]) : 0;
          chartData.push(obj);
        });
    }
  }
  return chartData;
};

const formatForPieRing = (fromData, targetData) => {
  const result = {
    arr: [],
    isMix: null,
    isBold: null,
    arrTotal: [],
  };
  fromData &&
    fromData.map((item) => {
      const { key, name, isMix, isBold, isShow } = item;
      if (isMix) {
        result.isMix = name;
      }
      if (isBold) {
        result.isBold = name;
      }
      if (targetData.value[0][key]) {
        result.arr.push({
          key: name && name.toString(),
          value: targetData.value[0][key],
        });
        if (isShow) {
          result.arrTotal.push({
            key: name && name.toString(),
            value: targetData.value[0][key],
          });
        }
      }
    });
  return result;
};

const setFontScale = (string, num) => {
  let scale = 1;
  if (string && string.toString().length > 3) {
    scale = 1 - (string.toString().length * 0.1 - num * 0.1);
  }
  return scale;
};

//设置初始图表字体大小
const setInitialSize = (Box) => {
  let initialSize = 8;
  initialSize =
    Box.clientWidth * 0.015 < 8
      ? 8
      : Box.clientWidth * 0.015 || Box.clientWidth * 0.015 > 12
        ? 12
        : Box.clientWidth;
  return initialSize;
};

//打印
const consoleLog = (content) => {
  if (window.isConsoleY) {
    console.log({ content });
  }
};

export {
  renderAxis,
  renderSlider,
  renderLabel,
  renderTooltip,
  renderLegend,
  analysisData,
  formatForPieRing,
  setFontScale,
  renderTooltipFormatter,
  setInitialSize,
  consoleLog,
};
