
import React, { useState } from 'react';
import styles from "./index.less"
import { ProForm, ProFormText, PageContainer } from '@ant-design/pro-components';
import { Button } from "antd"
import DocxViewer from "../../components/DocxViewer/index"
import Odata from "../../../lib/Uilab-Comp/utils/odata/odata"

window.serviceUrl = `dinstitute/control/odataAppSvc/dinstitute/`

const DocumentPreview: React.FC = () => {

  const file = `http://localhost:8000/dinstitute/control/odatasvc/dinstitute/Files('d08a4f9c-cb4d-40ab-b487-eb3058271f43')/fileContent`

  const [newFileUrl, setNewFileUrl] = useState('')

  const [isFromShow, setIsFromShow] = useState(true)

  return (
    <div className={styles.pageIndexBox}>
      <div className={styles.fileViewerBox} >
        <div className={styles.fileViewerTitle}>
          当前文档
        </div>
        <div className={styles.fileViewer}>
          <DocxViewer docxUrl={file} id={'type'} />
        </div>
      </div>
      {
        isFromShow ? <div className={styles.proFormBox}>
          <div className={styles.proFormTitle}>
            生成新文档
          </div>
          <div className={styles.proForm}>
            <ProForm
              onFinish={async (value) => {
                console.log({ value })
                let batchArr = [
                  {
                    method: "POST",
                    path: `SkbgContentDimensions('2942')/com.dpbird.GenerateFeasibilityStudyReport`,
                    body: {
                      ...value
                    },
                  },
                  {
                    method: "GET",
                    path: `SkbgContentDimensions('2942')`,
                    parameters: {
                      $select: `preparationCompany,preparationDate,projectBasis,projectCompany,projectName,projectSituation,skbgContentId`,
                      $expand: {
                        File: {
                          $select: `fileId,fileName,fileUrl`
                        }
                      }
                    },
                  }
                ]
                const result = await Odata.submit(batchArr);
                if (result && result[1]) {
                  console.log({ result })
                  const { File } = result[1].data
                  setNewFileUrl(File.fileUrl)
                  setIsFromShow(false)
                }
              }}
            >
              <ProFormText
                width="md"
                name="projectCode"
                label="项目编码"
                placeholder="请输入项目编码"
              />
              <ProFormText
                width="md"
                name="projectName"
                label="项目名称"
                placeholder="请输入项目编码"
              />
              <ProFormText
                width="md"
                name="preparationDate"
                label="preparationDate"
              />
            </ProForm>
          </div>
        </div> : <div
          className={styles.fileViewerBox}
        >
          <div className={styles.newfileViewerTitle}>
            新文档
            <Button
              type="primary"
              className={styles.newfileViewerTitleBtn}
              onClick={() => {
                setIsFromShow(true)
              }}
            >
              重新生成
            </Button>
          </div>
          <div className={styles.fileViewer}>
            <DocxViewer docxUrl={`http://localhost:8000${newFileUrl}`} id={'type1'} />
          </div>
        </div>
      }
    </div>
  );
};

export default DocumentPreview;