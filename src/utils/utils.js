import { notification, Modal } from 'antd';

/**
 * 全局接口请求返回处理
 * @param {*} response
 * @param {*} callback
 */
export function globalInterceptResponse(response, callback) {
  console.log(response, 'response', callback, 'callback')
  if (!callback) {
    return;
  }
  if (response && response.code === '101') {
    notification.error({
      message: '请求错误',
      description: response.msg ? response.msg : '服务器发生错误'
    });
    return;
  }
  callback(response);
}
