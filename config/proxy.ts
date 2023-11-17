/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-17 16:46:00
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-11-17 16:51:10
 * @FilePath: /Uilab-Application/config/proxy.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/gongsconfig/': {
      target: 'http://gconfigdev.gconfig.banff-tech.com/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
      secure: false, //配置关闭证书签名验证
    },
    '/odata/': {
      target: 'http://gconfigdev.gconfig.banff-tech.com/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
      secure: false, //配置关闭证书签名验证
    },
  },
};
