import request from '@/utils/request';

const sign = process.env.HZDJ_SIGN;
console.log(sign, 'sign', process, 'process', process.env, 'process.env')

/**
 * 查询数据反查表格
 * @param param
 */
export async function queryElectionInfoCount(param) {
  return request.post('/selection/villageElectionSurvey/queryElectionInfoCount', { data: param });
}
