import Vue from 'vue'
import App from './App.vue'
import es from '../node_modules/vee-validate/dist/locale/es';
import VeeValidate, { Validator } from 'vee-validate';
import router from './router';

Vue.use(VeeValidate);
Validator.localize('es', es);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
