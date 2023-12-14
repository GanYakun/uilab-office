import React, { useEffect, useState, useRef } from 'react';
/* import boxBg from '../../../../../public/dashboard/img_boxBg.png';
import boxCorner from '../../../../../public/dashboard/img_boxCorner.png'; */
import styles from './index.less';

const ChartsReport = (props) => {
  const { title, children,background } = props;

  return (
    <div
      className={styles.chartsBox}
      // style={{ backgroundImage: `url(${background ? background : boxBg})`, position: 'relative' }}
    >
      {/* <img src={boxCorner} className={styles.imgleft} />
      <img src={boxCorner} className={styles.imgRight} /> */}
      <div className={styles.title}>{title}</div>
      <div className={styles.chart}>{children}</div>
    </div>
  );
};

export default ChartsReport;
