import { getNotices } from '@/services/ant-design-pro/api';
import { message, Tag, Spin } from 'antd';
import { groupBy } from 'lodash';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useModel, useRequest, history } from 'umi';
import styles from './index.less';
import NoticeIcon from './NoticeIcon';
import { queryUnreadAlarm } from './services/index'
import alarmOne from './services/alarmOne.png'
import alarmTwo from './services/alarmTwo.png'
import alarmThree from './services/alarmThree.png'
import { AppConfig } from '../../../../apps/launchPad';

export type GlobalHeaderRightProps = {
  fetchingNotices?: boolean;
  onNoticeVisibleChange?: (visible: boolean) => void;
  onNoticeClear?: (tabName?: string) => void;
};

const getNoticeData = (notices: API.NoticeIconItem[]): Record<string, API.NoticeIconItem[]> => {
  if (!notices || notices.length === 0 || !Array.isArray(notices)) {
    return {};
  }

  const newNotices = notices.map((notice) => {
    const newNotice = { ...notice };

    if (newNotice.datetime) {
      newNotice.datetime = moment(notice.datetime as string).fromNow();
    }

    if (newNotice.id) {
      newNotice.key = newNotice.id;
    }

    if (newNotice.extra && newNotice.status) {
      const color = {
        todo: '',
        processing: 'blue',
        urgent: 'red',
        doing: 'gold',
      }[newNotice.status];
      newNotice.extra = (
        <Tag
          color={color}
          style={{
            marginRight: 0,
          }}
        >
          {newNotice.extra}
        </Tag>
      ) as any;
    }

    return newNotice;
  });
  return groupBy(newNotices, 'type');
};

const getUnreadData = (noticeData: Record<string, API.NoticeIconItem[]>) => {
  const unreadMsg: Record<string, number> = {};
  Object.keys(noticeData).forEach((key) => {
    const value = noticeData[key];

    if (!unreadMsg[key]) {
      unreadMsg[key] = 0;
    }

    if (Array.isArray(value)) {
      unreadMsg[key] = value.filter((item) => !item.read).length;
    }
  });
  return unreadMsg;
};

const NoticeIconView: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [notices, setNotices] = useState<API.NoticeIconItem[]>([]);
  const { data } = useRequest(getNotices);

  const [noticeData, setNoticeData] = useState({
    notification: [],
    count: 0,
  })
  const [isAlarm, setIsAlarm] = useState(true)
  const [isShowLoading, setIsShowLoading] = useState(false)
  const [popupVisible,setPopupVisible] = useState(false)

  useEffect(() => {
    if (isAlarm) {
      setIsAlarm(false)
      linkAlarm()
    }
    setNotices(data || []);
  }, [data]);

  let alarmIconArr = {
    '1': alarmOne,
    '2': alarmTwo,
    '3': alarmThree,
  }


  const _queryUnreadAlarm = async () => {
    setIsShowLoading(true)
    let result = await queryUnreadAlarm(AppConfig?.notification?.serviceUrl1)
    console.log({result})
    if (result) {
      let arr = []
      const { value } = result
      value && value.map((item) => {
        const { eventDateTime, eventName, AlarmFacility, WorkEffortEvent } = item
        const { ParentFacility } = AlarmFacility
        let obj = {}
        obj.avatar = alarmIconArr['3']
        obj.datetime = moment(eventDateTime).fromNow();
        obj.title = `${ParentFacility.facilityName}栋${AlarmFacility.facilityName}层${eventName}`
        obj.type = "notification"
        arr.push(obj)
        setIsShowLoading(false)
      })
      noticeData.notification = arr
      noticeData.count = result['@odata.count']
      setNoticeData(JSON.parse(JSON.stringify(noticeData)))
    }
  }


  const linkAlarm = async () => {
    _queryUnreadAlarm()
    const eventSource = new EventSource(`${window.location.origin}${AppConfig?.notification?.serviceUrl2}`);
    eventSource.onopen = function (event) {
      console.log('Connection opened');
    };
    eventSource.onmessage = function (event) {
      const eventData = JSON.parse(event.data);
      console.log('Received event:', eventData);
      // 处理接收到的事件数据
      setPopupVisible(true)
      _queryUnreadAlarm()
    };

    eventSource.onerror = function (event) {
      console.error('Error occurred:', event);
    };

    eventSource.onclose = function (event) {
      console.log('Connection closed');
    };
  }
  const changeReadState = (id: string) => {
    setNotices(
      notices.map((item) => {
        const notice = { ...item };
        if (notice.id === id) {
          notice.read = true;
        }
        return notice;
      }),
    );
  };

  const clearReadState = (title: string, key: string) => {
    setNotices(
      notices.map((item) => {
        const notice = { ...item };
        if (notice.type === key) {
          notice.read = true;
        }
        return notice;
      }),
    );
    message.success(`${'清空了'} ${title}`);
  };

  return (
    <>
      <NoticeIcon
        className={styles.action}
        // count={currentUser && currentUser.unreadCount}
        count={noticeData.count}
        onItemClick={(item) => {
          changeReadState(item.id!);
        }}
        onClear={(title: string, key: string) => clearReadState(title, key)}
        loading={isShowLoading}
        clearText="清空"
        viewMoreText="查看更多"
        onViewMore={() => {
          setPopupVisible(false)
          history.push('/menu1/$alarm-view')
        }}
        clearClose
        popupVisible={popupVisible}
        onPopupVisibleChange={()=>{
          setPopupVisible(!popupVisible)
        }}
      >
        <NoticeIcon.Tab
          tabKey="notification"
          count={noticeData.count}
          list={noticeData.notification}
          title="报警"
          emptyText="你已查看所有通知"
          showViewMore
        />

      </NoticeIcon>

    </>
  );
};

export default NoticeIconView;
