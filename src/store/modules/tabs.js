const state = {
  active: false,
  targetName: null
};
const getters = {
  active(state){
    return state.active
  },
  targetName(state){
    return state.targetName
  }
};
const mutations = {
  updateSelected(state,name,that){
    console.log(name);
    console.log(that);
    state.targetName = name;
    console.log(state.targetName);
  }
};

export default {
  state,
  getters,
  mutations
}
