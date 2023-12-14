import React, { useState, useRef, useEffect } from 'react';
import styles from './index.less'
import { Avatar, Space, Input, Tabs, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import icUser from '../../../assets/user.png'
import icGpt from '../../../assets/gpt-avatar.svg'
import Instructions from '../Instructions/index'
import ic_goBack from '../../../assets/ic_goBack.png'
import { completions } from '../../../services/IntelligentQuestion'

const { Search } = Input;

const Chat = () => {
  const [dialoguArr, setDialoguArr] = useState([])
  const [searchValue, setSearchValue] = useState(null)
  const [isInstructions, setIsInstructions] = useState(true)
  const [isShow, setIsShow] = useState(false)
  const [isSearchloding, setIsSearchloding] = useState(false)
  const [activKey, setActivKey] = useState('ProjectAlloc1.0')

  const setDialogucontent = (e) => {
    if (e && e !== '') {
      setIsInstructions(false)
      setIsSearchloding(true)
      let obj1 = {
        avatarSrc: icUser,
        text: e
      }
      dialoguArr.push(obj1)
      setDialoguArr(JSON.parse(JSON.stringify(dialoguArr)))
      setSearchValue(null)
      setIsShow(true)
      setTimeout(async () => {
        let params = {
          question: e,
          modelName: activKey
        }
        let result = await completions(params)
        if (result) {
          const { answer, message } = result
          let opinion = answer && answer.length > 0 && answer !== ''
          let dataString = message ? message : opinion ? `计算结果为:${answer.toString()}` : "抱歉，我还在学习中，无法回答这个问题。"
          let count = 0;
          let obj2 = {
            avatarSrc: icGpt,
            text: dataString,
            color: 'rgba(0, 0, 0, 0.08)',
          }
          const outputDiv = document.getElementById('output');
          const intervalId = setInterval(() => {
            if (count >= dataString.length) {
              setIsShow(false)
              clearInterval(intervalId);
              dialoguArr.push(obj2)
              setDialoguArr(JSON.parse(JSON.stringify(dialoguArr)))
              setIsSearchloding(false)
              return;
            }
            const currentStr = dataString.slice(0, count + 1);
            outputDiv.textContent = currentStr;
            count++;
          }, 100);
        }
      }, 100)
    } else {
    }
  }



  return (
    <div className={styles.chatBox}>
      <Tabs defaultActiveKey="1" items={[
        {
          key: '1',
          label: <div
            key={1}
            onClick={() => {
            }}
          >项目分配模型1.0</div>,
          children: ``,
        },
        {
          key: '2',
          label: <div
            key={2}
            onClick={() => {
              message.info('该模型正在训练中,敬请期待')
            }}
          >模型2</div>,
          children: ``,
          disabled: true,
        },
        {
          key: '2',
          label: <div key={3}>模型3</div>,
          children: ``,
          disabled: true,
        },
      ]} />
      <div className={styles.dialogueBox}>
        {
          isInstructions ? <Instructions setSearchValue={setSearchValue} /> : (
            <div>
              {dialoguArr.map((item, index) => {
                const { text, avatarSrc, color } = item
                return (
                  <div className={styles.dialogu} style={{ background: color ? color : '', }} key={index}>
                    <div className={styles.Avatar}>
                      <Avatar size={64} src={avatarSrc} />
                    </div>
                    <div className={styles.dialoguText}>{text}</div>

                  </div>
                )
              })}
              {
                isShow && <div className={styles.dialogu} style={{ background: 'rgba(0, 0, 0, 0.08)', }}>
                  <div className={styles.Avatar}>
                    <Avatar size={64} src={icGpt} />
                  </div>

                  <div className={styles.dialoguText} id='output'>

                  </div>
                  <span className={styles.cursor} id="cursor"></span>
                </div>
              }
            </div>
          )
        }
      </div>
      <div className={styles.inputBox}>
        <div style={{ width: '768px' }}>
          <Search
            placeholder="发送一个消息"
            allowClear
            enterButton="发送"
            loading={isSearchloding}
            size="large"
            value={searchValue}
            onSearch={setDialogucontent}
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
          />
          <div className={styles.hintText}>
            Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.
          </div>
        </div>
      </div>
      {
        !isInstructions && <div className={styles.goBack} onClick={() => {
          setIsInstructions(true)
        }}>
          <img src={ic_goBack} style={{ width: '40px' }} />
        </div>
      }
    </div>
  )
}

export default Chat;