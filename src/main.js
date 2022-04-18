import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts';
import vuescroll from 'vuescroll/dist/vuescroll';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import utils from './utils/utils.js';
import * as filters from './filters/filters.js';
import api from './api';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$api = api;

Vue.use(ElementUI);
Vue.use(vuescroll);
Vue.use(utils);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  render: h => h(App),
  data(){
    return {
      scrollOps: {
        vuescroll: {
          mode: 'native',//Utils.browser.version.mobile ? 'slide' : 'native'
        },
        rail: {},
        scrollPanel: {
          //scrollingX:false,
          easing:'easeInQuad'
        },
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          keepShow: true,
          background: 'rgba(0, 0, 0, 0.6)',
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: '0.1',
          size: '6px',
          disable: false,
        }
      }
    }
  },
  computed: {
    scrollOpsX(){
      return Object.assign({}, this.scrollOps, {scrollPanel: {
          scrollingY:false
        }});
    },
    scrollOpsY(){
      return Object.assign({}, this.scrollOps, {scrollPanel: {
          scrollingX:false
        }});
    },
    scrollOpsSlider(){
      return Object.assign({}, this.scrollOps, {vuescroll: {
          mode: 'slide',
        }});
    }
  }
}).$mount('#app')
