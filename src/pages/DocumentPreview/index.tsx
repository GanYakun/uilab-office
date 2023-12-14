
import React, { useState } from 'react';
import styles from "./index.less"
import { ProForm, ProFormText, PageContainer } from '@ant-design/pro-components';
import { Button } from "antd"
import DocxViewer from "../../components/DocxViewer/index"
import Odata from "../../../lib/Uilab-Comp/utils/odata/odata"
import { DownloadOutlined } from '@ant-design/icons';

window.serviceUrl = `dinstitute/control/odataAppSvc/dinstitute/`

const DocumentPreview: React.FC = (props) => {
  const { location } = props;
  const { skbgContentId, fileUrl } = location.query;

  const [newFileUrl, setNewFileUrl] = useState('')
  const [isFromShow, setIsFromShow] = useState(true)
  return (
    <div className={styles.pageIndexBox}>
      <div className={styles.fileViewerBox} >
        <div className={styles.fileViewerTitle}>
          当前文档
        </div>
        <div className={styles.fileViewer}>
          <DocxViewer docxUrl={`${window.location.origin}${fileUrl}`} id={'type'} />
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
                let batchArr = [
                  {
                    method: "POST",
                    path: `SkbgContentDimensions('${skbgContentId}')/com.dpbird.GenerateFeasibilityStudyReport`,
                    body: {
                      ...value
                    },
                  },
                  {
                    method: "GET",
                    path: `SkbgContentDimensions('${skbgContentId}')`,
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
            <div className={styles.TitleBtn}>
              <a style={{ paddingTop: "3px" }}>
                <Button
                  type="primary"
                  onClick={() => {
                    setIsFromShow(true)
                  }}
                  size={'small'}
                >
                  重新生成
                </Button>
              </a>
              <a href={`${window.location.origin}${newFileUrl}`} download="custom_filename.docx">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<DownloadOutlined />}
                  size={'small'}
                />
              </a>
            </div>

          </div>
          <div className={styles.fileViewer}>
            <DocxViewer docxUrl={`${window.location.origin}${newFileUrl}`} id={'type1'} />
          </div>
        </div>
      }
    </div>
  );
};

export default DocumentPreview;