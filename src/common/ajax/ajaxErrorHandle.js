/**
 * ajax 错误处理
 * @see 具体参数文档 - https://github.com/mzabriskie/axios#response-schema
 */
import { DEFAULT_ERR_MSG } from 'configPath/index';
import Message from 'ant-design-vue/lib/message';

export function ajaxFulFilledHandle(data = {}, config) {
  return new Promise((resolve, reject) => {
    console.log(data);
    const { resCode } = data;
    let errMsg = data.resMsg || DEFAULT_ERR_MSG;
    if (resCode === 0) {
      // 返回成功
      resolve(data);
    } else {
      console.log(errMsg);
      if (errMsg.length > 100) {
        errMsg = `${errMsg.slice(0, 100)}...`;
      }
      Message.error(errMsg);
      reject(data);
    }
  });
}

export function ajaxRejectedHandle(err) {
  console.log('ajax err', err);
  return Promise.reject(err);
}
