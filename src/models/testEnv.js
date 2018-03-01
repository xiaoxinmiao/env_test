import * as envService from '../services/testEnv';

export default {
    namespace: 'testEnv',
    state: {
        envName: ''
    },
    reducers: {
        save(state, { payload: { envName } }) {
            return { ...state, envName };
        },
    },
    effects: {
        *get({}, { call, put }) {
            const envName = yield call(envService.getEnv, { });
            yield put({
                type: 'save',
                payload: {
                    envName: envName,
                },
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                dispatch({ type: 'get', payload: query });
            });
          },
    },
};
