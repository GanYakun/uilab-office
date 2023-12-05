import React, { useEffect, useState } from 'react';
import './index.less';
import ListReport from "../../../lib/Uilab-Comp/smart-comp/UIPages/ListReport";
import { Steps } from 'antd';
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
                            return <Steps size="small" labelPlacement="vertical">
                                <Step title="Finished" />
                                <Step title="In Progress" />
                            </Steps>
                        },
                        path: "",
                        Label: "steps"
                    },
                    type: "columns",
                    fixed: "left",
                }
            ]
        }]} />
    </div>
}
