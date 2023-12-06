import React, { useEffect, useState } from 'react';
import './index.less';
import ObjectPage from "../../../lib/Uilab-Comp/smart-comp/UIPages/ObjectPage";
import Steps from "../../../lib/Uilab-Comp/smart-comp/CustComp/Steps";

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
                                render: (val) => {
                                    return <Steps queryEntity={val} isInline={false} />
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
