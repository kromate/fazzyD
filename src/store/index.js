import { createStore } from 'vuex'

export default createStore({
  state: {
    menu:false
  },
  mutations: {
    changeMenu(state){
        state.menu = !state.menu      
    },
  },
  actions: {
  },
  modules: {
  }
})
