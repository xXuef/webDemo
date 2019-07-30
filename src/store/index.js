import Vue from 'vue';
import VueX from 'vuex';
import actions from './actions';
import mutations from './mutations';
Vue.use(VueX);

const state = {
  count: 1
};
const getters = {
  getCount(state) {
    return state.count + "getters";
  }
};
export default new VueX.Store({
  state,
  actions,
  mutations,
  getters
});
