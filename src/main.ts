import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import TestModule from './store/TestModule';
import { getModule } from 'vuex-module-decorators';

Vue.config.productionTip = false;

const testModule = getModule(TestModule, store);
testModule.loadDataFromConfig().then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});
