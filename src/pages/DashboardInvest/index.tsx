import React from 'react';
import styles from './index.less'
import ChartsPage from "../../components/Charts/index";
import '../utils/flexible';
window.serviceUrl = `dinstitute/control/odataAppSvc/dinstitute/`


const DashboardInvest: React.FC = () => {

  let layouts = { "lg": [{ "w": 6, "h": 9, "x": 6, "y": 19, "i": "0", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 19, "i": "1", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 12, "h": 10, "x": 0, "y": 37, "i": "2", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 28, "i": "3", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 10, "i": "4", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 6, "y": 28, "i": "5", "moved": false, "static": false }, { "w": 12, "h": 10, "x": 0, "y": 0, "i": "6", "moved": false, "static": false }, { "w": 6, "h": 9, "x": 6, "y": 10, "i": "7", "moved": false, "static": false }], "md": [{ "w": 5, "h": 8, "x": 0, "y": 9, "i": "0", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 5, "h": 9, "x": 0, "y": 0, "i": "1", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 5, "h": 9, "x": 5, "y": 0, "i": "2", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 5, "h": 9, "x": 0, "y": 17, "i": "3", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 5, "h": 9, "x": 5, "y": 17, "i": "4", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 5, "h": 8, "x": 5, "y": 9, "i": "5", "moved": false, "static": false }, { "w": 5, "h": 8, "x": 0, "y": 26, "i": "6", "moved": false, "static": false }, { "w": 5, "h": 8, "x": 5, "y": 26, "i": "7", "moved": false, "static": false }], "xs": [{ "w": 4, "h": 7, "x": 0, "y": 14, "i": "0", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 0, "i": "1", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 7, "i": "2", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 21, "i": "3", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 28, "i": "4", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 4, "h": 7, "x": 0, "y": 35, "i": "5", "moved": false, "static": false }, { "w": 4, "h": 9, "x": 0, "y": 42, "i": "6", "moved": false, "static": false }, { "w": 4, "h": 9, "x": 0, "y": 51, "i": "7", "moved": false, "static": false }], "sm": [{ "w": 6, "h": 8, "x": 0, "y": 18, "i": "0", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 0, "i": "1", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 9, "i": "2", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 9, "x": 0, "y": 26, "i": "3", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 10, "x": 0, "y": 35, "i": "4", "minW": 4, "minH": 4, "moved": false, "static": false }, { "w": 6, "h": 8, "x": 0, "y": 45, "i": "5", "moved": false, "static": false }, { "w": 6, "h": 8, "x": 0, "y": 53, "i": "6", "moved": false, "static": false }, { "w": 6, "h": 15, "x": 0, "y": 61, "i": "7", "moved": false, "static": false }] }

  let Config1 = [
    {
      type: 'Line',
      shape: 'line',
      area: false,
      odataOption: [{
        path: 'JxywProjectInvestmentViews',
        method: 'GET',
        parameters: {
          entitySet: `JxywProjectInvestmentViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((municipalLevelCompanyName,professionalType),aggregate(investmentEstimation with sum as sumAnount))`,
        },
      }],
      portletName: '按专业与地市单位分析',
      chartEnum: {
        key: 'professionalType',
        value: 'sumAnount',
        parentKey: 'municipalLevelCompanyName',
      },
    },
    {
      type: 'Pie',
      radius: 0.8,
      innerRadius: 0.5,
      // labelType: 'spider',
      legend: {
        isisvisible: true,
        direction: 'right',
      },
      odataOption: [{
        path: 'JxywProjectInvestmentViews',
        method: 'GET',
        parameters: {
          entitySet: `JxywProjectInvestmentViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((professionalType),aggregate(investmentEstimation with sum as sumAnount))`,

        },
      }],
      portletName: '按专业分析',
      chartEnum: {
        key: 'professionalType',
        value: 'sumAnount',
      },
    },
    {
      type: 'Bar',
      odataOption: [{
        path: 'JxywProjectInvestmentViews',
        method: 'GET',
        parameters: {
          entitySet: `JxywProjectInvestmentViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((municipalLevelCompanyName),aggregate(investmentEstimation with sum as sumAnount))`,

        },
      }],
      chartEnum: {
        key: 'municipalLevelCompanyName',
        value: 'sumAnount',
      },
      portletName: '按市级单位分析',
    },
    {
      type: 'Bar',
      /*   shape: 'line',
        area: false, */
      chartType: 'dodge',
      odataOption: [{
        path: 'JxywProjectInvestmentViews',
        method: 'GET',
        parameters: {
          entitySet: `JxywProjectInvestmentViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((quarterNumber,year4),aggregate(investmentEstimation with sum as sumAnount))`,

        },
      }],
      portletName: '按年与季度分析',
      chartEnum: {
        key: 'year4',
        value: 'sumAnount',
        parentKey: 'quarterNumber'
      },
    },
    {
      type: 'Line',
      shape: 'line',
      area: false,
      odataOption: [{
        path: 'JxywProjectInvestmentViews',
        method: 'GET',
        parameters: {
          entitySet: `JxywProjectInvestmentViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((municipalLevelCompanyName,year4),aggregate(investmentEstimation with sum as sumAnount))`,

        },
      }],
      portletName: '按年与市级单位分析',
      chartEnum: {
        key: 'year4',
        value: 'sumAnount',
        parentKey: 'municipalLevelCompanyName'
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
        path: 'JxywProjectInvestmentViews',
        method: 'GET',
        parameters: {
          entitySet: `JxywProjectInvestmentViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true`,
          $apply: `groupby((year4),aggregate(investmentEstimation with sum as sumAnount))`,

        },
      }],
      portletName: '按年度分析',
      chartEnum: {
        key: 'year4',
        value: 'sumAnount',
      },
    },
    {
      type: 'Bar',
      chartType: 'dodge',
      isSlider: true,
      propsEnd: 0.5,
      odataOption: [{
        path: 'JxywProjectInvestmentViews',
        method: 'GET',
        parameters: {
          entitySet: `JxywProjectInvestmentViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true`,
          $apply: `groupby((batchName,professionalType),aggregate(investmentEstimation with sum as sumAnount))`,
        },
      }],
      chartEnum: {
        key: 'batchName',
        value: 'sumAnount',
        parentKey: 'professionalType'
      },
      portletName: '按批次与专业分析',
    },
    {
      type: 'Bar',
      transpose: true,
      odataOption: [{
        path: 'JxywProjectInvestmentViews',
        method: 'GET',
        parameters: {
          entitySet: `JxywProjectInvestmentViews&useBatchRequests=true&provideGrandTotals=true&provideTotalResultSize=true&noPaging=true`,
          $apply: `groupby((batchName),aggregate(investmentEstimation with sum as sumAnount))`,
        },
      }],
      chartEnum: {
        key: 'batchName',
        value: 'sumAnount',
      },
      portletName: '按批次分析',
    },

  ]
  return (
    <div className={styles.pageIndexBox}>
      <ChartsPage chartPageConfig={Config1} Layouts={layouts} />
    </div>
  );
};

export default DashboardInvest;
