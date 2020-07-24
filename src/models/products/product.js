export default {
  namespace: 'products',
  state: {
    dataSource:[
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ],
  },
  reducers: {
    'delete'(state, { payload: key }) {
      const dataSource = state.dataSource.filter(item => item.key !== key);
      return {
          ...state,
          dataSource
      };
    },
  },
};
