import { Button } from "antd"
import { history } from "umi"

export default (props) => {
	return <Button
		onClick={() => {
			history.push({
				pathname: '/BusinessAssistant/DocumentPreview',
				query: { skbgContentId: props?.record?.skbgContentId, fileUrl: props?.record?.File.fileUrl },
			});
		}}
	>针对性生成新可研</Button>
}