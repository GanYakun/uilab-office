
import React from 'react';
import styles from "./index.less"
import ChartsPage from "../../components/Charts/index";
import '../utils/flexible';
window.serviceUrl = `dinstitute/control/odataAppSvc/dinstitute/`

const DashboardAllocation: React.FC = () => {

  let layouts = { "lg": [{ "w": 6, "h": 9, "x": 0, "y": 18, "i": "0", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 12, "h": 9, "x": 0, "y": 0, "i": "1", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 12, "h": 10, "x": 0, "y": 36, "i": "2", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 27, "i": "3", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 9, "i": "4", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 6, "y": 27, "i": "5", "moved": false, "static": false }, { "w": 6, "h": 9, "x": 6, "y": 9, "i": "6", "moved": false, "static": false }, { "w": 6, "h": 9, "x": 6, "y": 18, "i": "7", "moved": false, "static": false }], "md": [{ "w": 5, "h": 8, "x": 0, "y": 9, "i": "0", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 5, "h": 9, "x": 0, "y": 0, "i": "1", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 5, "h": 9, "x": 5, "y": 0, "i": "2", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 5, "h": 9, "x": 0, "y": 17, "i": "3", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 5, "h": 9, "x": 5, "y": 17, "i": "4", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 5, "h": 8, "x": 5, "y": 9, "i": "5", "moved": false, "static": false }, { "w": 5, "h": 8, "x": 0, "y": 26, "i": "6", "moved": false, "static": false }, { "w": 5, "h": 8, "x": 5, "y": 26, "i": "7", "moved": false, "static": false }], "xs": [{ "w": 4, "h": 7, "x": 0, "y": 14, "i": "0", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 0, "i": "1", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 7, "i": "2", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 21, "i": "3", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 28, "i": "4", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 35, "i": "5", "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 42, "i": "6", "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 49, "i": "7", "moved": false, "static": false }], "sm": [{ "w": 6, "h": 8, "x": 0, "y": 18, "i": "0", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 0, "i": "1", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 9, "i": "2", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 26, "i": "3", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 10, "x": 0, "y": 35, "i": "4", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 8, "x": 0, "y": 45, "i": "5", "moved": false, "static": false }, { "w": 6, "h": 8, "x": 0, "y": 53, "i": "6", "moved": false, "static": false }, { "w": 6, "h": 15, "x": 0, "y": 61, "i": "7", "moved": false, "static": false }] }

  let Config1 = [
    {
      type: 'Pie',
      radius: 0.9,
      innerRadius: 0.6,
      legend: {
        isisvisible: true,
        direction: 'right',
      },
      odataOption: [{
        path: 'ProjectAllocFactViews',
        method: 'GET',
        parameters: {
          entitySet: `ProjectAllocFactViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: 'groupby((professionalType),aggregate(count with sum as sumAnount))',
        },
      }],
      portletName: '按专业分析项目分配情况',
      chartEnum: {
        key: 'professionalType',
        value: 'sumAnount',
      },
    },
    {
      type: 'Bar',
      portletName: '按市级单位分析项目分配情况',
      odataOption: [{
        path: 'ProjectAllocFactViews',
        method: 'GET',
        parameters: {
          entitySet: `ProjectAllocFactViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((municipalLevelCompanyName),aggregate(count with sum as sumAnount))`,

        },
      }],
      chartEnum: {
        key: 'municipalLevelCompanyName',
        value: 'sumAnount',
      },
    },
    {
      type: 'Line',
      shape: 'line',
      area: false,
      odataOption: [{
        path: 'ProjectAllocFactViews',
        method: 'GET',
        parameters: {
          entitySet: `ProjectAllocFactViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((municipalLevelCompanyName,professionalType),aggregate(count with sum as sumAnount))`,
        },
      }],
      portletName: '按市级单位及专业类型分析项目分配情况',
      chartEnum: {
        key: 'professionalType',
        value: 'sumAnount',
        parentKey: 'municipalLevelCompanyName',
      },
    },
    {
      type: 'Pie',
      radius: 0.6,
      labelType: 'spider',
      legend: {
        isisvisible: true,
        direction: 'top-right',
        layout: 'horizontal',
      },
      odataOption: [{
        path: 'ProjectAllocFactViews',
        method: 'GET',
        parameters: {
          entitySet: `ProjectAllocFactViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((year4),aggregate(count with sum as sumAnount))`,

        },
      }],
      portletName: '按年度分析项目分配情况',
      chartEnum: {
        key: 'year4',
        value: 'sumAnount',
      },
    },
    {
      type: 'Bar',
      transpose: true,
      boxHeight: true,
      odataOption: [{
        path: 'ProjectAllocFactViews',
        method: 'GET',
        parameters: {
          entitySet: `ProjectAllocFactViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((batchName),aggregate(count with sum as sumAnount))`,

        },
      }],
      chartEnum: {
        key: 'batchName',
        value: 'sumAnount',
      },
      portletName: '按批次分析项目分配情况',
    },
    {
      type: 'Line',
      shape: 'line',
      area: false,
      odataOption: [{
        path: 'ProjectAllocFactViews',
        method: 'GET',
        parameters: {
          entitySet: `ProjectAllocFactViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((municipalLevelCompanyName,year4),aggregate(count with sum as sumAnount))`,

        },
      }],
      portletName: '每年按单位分析项目分配情况',
      chartEnum: {
        key: 'year4',
        value: 'sumAnount',
        parentKey: 'municipalLevelCompanyName'
      },
    },
    {
      type: 'Bar',
      chartType: 'dodge',
      unitX: '季度',
      /* shape: 'line',
      area: false, */
      odataOption: [{
        path: 'ProjectAllocFactViews',
        method: 'GET',
        parameters: {
          entitySet: `ProjectAllocFactViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((quarterNumber,year4),aggregate(count with sum as sumAnount))`,

        },
      }],
      portletName: '每年每季度分析项目分配情况',
      chartEnum: {
        key: 'year4',
        value: 'sumAnount',
        parentKey: 'quarterNumber'
      },
    },
    {
      type: 'Bar',
      transpose: true,
      boxHeight: true,
      chartType: 'dodge',
      unitX: '月',
      odataOption: [{
        path: 'ProjectAllocFactViews',
        method: 'GET',
        parameters: {
          entitySet: `ProjectAllocFactViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((monthNumber,year4),aggregate(count with sum as sumAnount))`,
        },
      }],
      chartEnum: {
        key: 'year4',
        value: 'sumAnount',
        parentKey: 'monthNumber'
      },
      portletName: '每年每月项目分配情况',
    },

  ]
  return (
    <div className={styles.pageIndexBox}>
      <ChartsPage chartPageConfig={Config1} Layouts={layouts} />
    </div>
  );
};

export default DashboardAllocation;