import Vue from 'vue';
import Vuex from 'vuex';
import TestModule from './store/TestModule';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    testModule: TestModule,
  },
});

export default store;
