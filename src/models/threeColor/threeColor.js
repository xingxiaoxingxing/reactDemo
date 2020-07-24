import { globalInterceptResponse } from '@/utils/utils';
import { queryElectionInfoCount } from '@/services/threecolor/index';

export default {
    namespace: 'threecolor',

    state: {
    },
    effects: {
        //获取数据反查表格
        *queryElectionInfoCount({ payload, callback }, { call, put }) {
            const response = yield call(queryElectionInfoCount, payload);
            console.log(response, 'response---')
            globalInterceptResponse(response, callback);
        },
    },
    reducers: {
    }
};
