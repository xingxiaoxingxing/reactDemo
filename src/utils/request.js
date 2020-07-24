/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
// import router from 'umi/router';
// import { clearAuthority, getAuthority, getRequestId } from '@/utils/authority';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = error => {
  const { response = {} } = error;
  const errortext = codeMessage[response.status] || response.statusText;
  const { status, url } = response;
  // 没有权限，token失效跳登录页面
  if(status == '401' || status == '119') {
      // clearAuthority();
      // return router.push('/login')
  }
};

console.log(process.env, 'env', process, 'process')

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  prefix: "/hzdj",
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  timeout: 1200000, //request请求的最大时间120S
});

/**
 * request请求拦截器
 */
request.interceptors.request.use((url, options) => {
  const headers = {
    // 'Authorization': getAuthority()&&getAuthority().Authorization ? getAuthority().Authorization : '',
    // 'Request-Id': getRequestId()
  };
  return {
    url,
    options: {...options, headers, interceptors: true}
  };
});

/**
 * request响应拦截器
 */
request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  // console.log(data);
  //token过期，重新跳转登录页
  if(data.code == '119' || data.code == '101') {
      clearAuthority();
    // router.push('/login');
    return null;
  }
  return response;
});

export default request;
