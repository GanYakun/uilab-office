import React, { useEffect, useState } from 'react';
import jsPreviewDocx from "@js-preview/docx";
import '@js-preview/docx/lib/index.css'

const DocxViewer = ({ docxUrl, id }) => {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
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
    })
  }, [docxUrl]);

  return (
    <div style={{ width: '100%', height: '100%' }} id={id} />
  );
};

export default DocxViewer;
