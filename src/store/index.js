import Vue from 'vue';
import Vuex from 'vuex';
import * as hyunwooStore from './modules/hyunwooStore.js';
import router from '../router/index.js';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    hyunwooStore,
  },
  state: {
    developers: [
      { name: '박혜미', projectName: '오목 게임', routerName: '' },
      { name: '이수희', projectName: '점심값 사다리타기', routerName: '' },
      { name: '오수연', projectName: '로또번호 생성', routerName: '' },
      { name: '이승준', projectName: '이상형 월드컵', routerName: '' },
      {
        name: '권현우',
        projectName: '점심메뉴 정하기',
        routerName: 'HyunwooKwon',
      },
    ],
  },
  actions: {
    moveToBoardGame(commit, routerName) {
      router.replace({
        name: routerName,
      });
    },
  },
  // mutations: {},
  // modules: {},
});
