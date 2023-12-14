import React, { useState, useRef, useEffect } from 'react';
import styles from './index.less'
import icSun from '../../../assets/ic_sun.png'
import icLightning from '../../../assets/ic_lightning.png'
import icWarning from '../../../assets/ic_warning.png'

const Instructions = (props) => {
  const { setSearchValue } = props
  const [introdution, setIntrodution] = useState([
    {
      name: "Examples",
      list: [
        {
          text: "{2021}年分配了多少个项目",
          value: '2021年分配了多少个项目'
        },
        {
          text: "有多少可研批复单位是{地市公司}",
          value: '有多少可研批复单位是地市公司'
        },
        {
          text: "有多少项目设备类型的值是{断路器}",
          value: '有多少项目设备类型的值是断路器'
        },
      ]
    },
    {
      name: "Capabilities",
      list: [
        {
          text: "{杭州}分配了多少个项目",
          value: '杭州分配了多少个项目'
        },
        {
          text: "技术是外协的有多少项目",
          value: '技术是外协的有多少项目'
        },
        {
          text: "{国网浙江宁波供电公司220kV...}这个项目的电压等级是什么",
          value: '国网浙江宁波供电公司220kV...这个项目的电压等级是什么'
        },
      ]
    },
    {
      /* icon: icWarning, */
      name: "Limitations",
      list: [
        {
          text: "{2023年国网生产大修第一批}这个批次中有多少项目",
          value: '2023年国网生产大修第一批这个批次中有多少项目'
        },
        {
          text: "{交流220kV}这个电压等级有多少项目",
          value: '交流220kV这个电压等级有多少项目'
        },
        {
          text: "{检修}项目有多少",
          value: '检修项目有多少'
        },
      ]
    },
  ]
  )

  return (
    <div className={styles.InstructionsBox}>
      <h2>智能助理</h2>
      <div className={styles.content}>
        {
          introdution.map((item, index) => {
            const { icon, name, list, isClick } = item
            return (
              <div className={styles.contentBox} key={index}>
                <div>{name}</div>
                <div className={styles.contentTextBox}>
                  {
                    list.map((item1, index1) => {
                      const { text, value } = item1
                      return (
                        <div className={styles.contentText} key={index1} onClick={() => {
                          setSearchValue(value)
                        }}>
                          {text} {'→'}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Instructions;
