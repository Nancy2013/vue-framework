import axios from 'axios';
import { REQ_TIME_OUT } from 'configPath/index';
import { paramsSerializer } from 'commonPath/utils';

import {
  ajaxFulFilledHandle,
  ajaxRejectedHandle
} from './ajaxErrorHandle';


const axiosCfg = {
  paramsSerializer,
  timeout: REQ_TIME_OUT
};

const axiosInstance = axios.create(axiosCfg);

const reqInterceptors = [];

const rspInterceptors = [{
  // 错误处理
  fulfilled: rsp => ajaxFulFilledHandle(rsp.data, { type: 'ajax', options: { rsp } }),
  rejected: ajaxRejectedHandle
}];

export function addInterceports(interceptors = [], type = 'request') {
  interceptors.forEach(interceptor => axiosInstance.interceptors[type]
    .use(interceptor.fulfilled, interceptor.rejected));
}

addInterceports(reqInterceptors, 'request');
addInterceports(rspInterceptors, 'response');

export default axiosInstance;
