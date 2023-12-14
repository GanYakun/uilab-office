import React, { useEffect, useState, useRef } from 'react';
import styles from './index.less';
import Bar from '../Bar/index';
import Line from '../Line/index';
import Pie from '../Pie/index';
import PieRing from '../PieRing/index';
import QuantityList from '../QuantityList/index';
import List from '../List/index';
import Table from '../Table/index';
import { setFontScale, setInitialSize } from '../process';
import SumTotal from '../SumTotal/index'

const ChartsReport = (props) => {
  const { type, portletName, titleBoxHeight } = props
  const Box = useRef();
  const [renderFontSize, setRenderFontSize] = useState(8);
  const [fontSize, setFontSize] = useState(0.2)


  const gridItemRef = useRef(null);
  const resizeObserverRef = useRef(null);
  useEffect(() => {
    const gridItem = gridItemRef.current;
    resizeObserverRef.current = new ResizeObserver(() => {
      setRenderFontSize && setRenderFontSize(setInitialSize(gridItem));
      // setFontSize(gridItem.clientWidth)
      setFontSize(gridItem.clientWidth * 0.0005)
    });
    resizeObserverRef.current.observe(gridItem);
    return () => {
      resizeObserverRef.current.disconnect();
    };
  }, []);


  const chartsConfig = {
    renderFontSize: renderFontSize,
    fontSize: fontSize,
    ...props,
  };

  const Type = {
    Bar: <Bar {...chartsConfig} />,
    Line: <Line {...chartsConfig} />,
    Pie: <Pie {...chartsConfig} />,
    PieRing: <PieRing {...chartsConfig} />,
    QuantityList: <QuantityList {...chartsConfig} />,
    List: <List {...chartsConfig} />,
    SumTotal: <SumTotal {...chartsConfig} />,
    Table: <Table {...chartsConfig} />
  };

  return (
    <div className={styles.chartsBox} ref={gridItemRef} id='myDiv'>
      <div className={styles.titleBox} style={{ height: titleBoxHeight }}>
        <div style={{ fontSize: `0.3rem` }}>{portletName}</div>
      </div>
      <div style={{ width: '100%', height: '85%', overflow: 'auto' }}>
        {Type[type]}
      </div>
    </div>
  );
};

export default ChartsReport;
