import Vue from 'vue'
import App from './App.vue'
import router from './routter'
import store from "@/store/store";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,//子组件中可以使用 this.$store 访问
  render: h => h(App)
})
