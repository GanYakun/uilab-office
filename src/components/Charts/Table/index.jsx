import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import styles from './index.less'


const Tables = (props) => {
  const { demoData, columns } = props

  return (
    <div className={styles.table}>
      <div className={styles.tableTitleBox}>
        {
          columns.map((item, index) => {
            const { title } = item
            return (
              <div key={index} className={styles.titleText} style={{ width: `${100 / columns.length}%` }}>{title}</div>
            )
          })
        }
      </div>
      <div className={styles.tableContent} id='parent'>
        <div id='child'>
          {
            demoData.map((item, index) => {
              return (
                <div className={styles.tableContentBox} key={index}>
                  {
                    item.map((item1, index1) => {
                      return (
                        <div style={{ width: `${100 / columns.length}%` }} key={index1}>{item1}</div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <div id="cloneChild"></div>
      </div>
    </div>
  );
};



export default Tables;
