/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-12-05 18:05:29
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-12-05 18:28:28
 * @FilePath: /Uilab-Application/src/pages/Anotations/ListReport.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import ListReport from "../../../lib/Uilab-Comp/smart-comp/UIPages/ListReport";
import { Steps } from 'ant5';
const { Step } = Steps;
/**
 * @params SmartProps     []
 * 1. 添加的类型           *children  string
 * 2. 添加的内容           *SmartProps object[](描述)
 */

export default () => {
    return <div>
        <ListReport SmartProps={[{
            children: "SmartTable",
            SmartProps: [
                {
                    data: {
                        render: () => {
                            return <Steps size="small" labelPlacement="vertical" type='inline'>
                                <Step title="Finished" />
                                <Step title="In Progress" />
                            </Steps>
                        },
                        path: "",
                        title: "Process"
                    },
                    type: "columns",
                    fixed: "left",
                }
            ]
        }]} />
    </div>
}
