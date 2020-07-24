import { defineConfig } from 'umi';

const THIRDINTER = 'http://183.134.200.7'; // 第三方接口

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  //接口代理
  proxy: {
    '/hzdj': {
      target: 'https://djhzdjtest.iwhalecloud.com/hzdj-party-admin',
      pathRewrite: { '^/hzdj': '' },
      changeOrigin: true
    }
  }
});



