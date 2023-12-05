import React, { useEffect, useState } from 'react';
import './index.less';
import ObjectPage from "../../../lib/Uilab-Comp/smart-comp/UIPages/ObjectPage";
import { Steps } from 'antd';
const { Step } = Steps;
/**
 * @params SmartProps     []
 * 1. 添加的类型           *children  string
 * 2. 添加的内容           *SmartProps object[](描述)
 */

export default (props) => {
    return <div>
        <ObjectPage {...props} SmartProps={[
            {
                children: "",
                SmartProps: [
                    {
                        data: {
                            targetData: {
                                render: () => {
                                    return <Steps size="small" labelPlacement="vertical">
                                        <Step title="Finished" />
                                        <Step title="In Progress" />
                                    </Steps>
                                },
                                facetType: "step",
                            }
                        },
                        type: "HeaderFacets",
                        position: "right",
                    }
                ]
            }
        ]} />
    </div>
}
