/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-07-31 12:49:41
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-08-16 17:49:58
 * @FilePath: /uilab-gbms-branch-nbwms/launchPad/src/components/Footer/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} 上海工至信息科技服务有限公司-提供业务支持`}
    />
  );
};

export default Footer;
