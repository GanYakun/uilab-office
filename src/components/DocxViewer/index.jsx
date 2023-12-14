import React, { useEffect, useState } from 'react';
import jsPreviewDocx from "@js-preview/docx";
import '@js-preview/docx/lib/index.css'
import { Spin } from "antd"
import Odata from "../../../lib/Uilab-Comp/utils/odata/odata"
import styles from "./index.less"

const DocxViewer = ({ docxUrl, id, skbgContentId }) => {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    initDocxPreviewer(true)
  }, [docxUrl]);

  const initDocxPreviewer = (isTurnDocx) => {
    //初始化时指明要挂载的父元素Dom节点
    const myDocxPreviewer = jsPreviewDocx.init(document.getElementById(id));
    setIsLoading(true)
    //传递要预览的文件地址即可
    myDocxPreviewer.preview(docxUrl).then(res => {
      setIsLoading(false)
      console.log('预览完成');
    }).catch(e => {
      setIsLoading(false)
      console.log('预览失败', e);
      if (isTurnDocx) {
        console.log('预览失败，尝试转换成docx')
        _ConvertDocToDocx()
      }
    })
  }

  const _ConvertDocToDocx = async () => {
    let option = {
      method: "POST",
      path: `SkbgContentDimensions('${skbgContentId}')/com.dpbird.ConvertDocToDocx`,
      body: {},
    }
    const result = await Odata.submit(option);
    if (result) {
      initDocxPreviewer()
    }
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className={styles.DocxViewerBox} style={{ width: '100%', height: '100%' }} id={id} >
      </div>
      {
        isLoading && <div className={styles.spinBox}>
          <Spin size="large" />
        </div>
      }
    </div>

  );
};

export default DocxViewer;
