export default {
  add(state,n=1) {
    state.count = state.count + n;
  },
  reduction(state, n) {
    state.count = state.count - n;
  }
};
