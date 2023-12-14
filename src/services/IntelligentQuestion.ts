import { request } from 'umi'

/**
 * 获取自动完成结果
 * @param params 请求参数
 * @param options 选项参数
 * @returns Promise 返回自动完成结果
 */
export async function completions(params?: any, options?: any) {
  return request('/ai/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}