import { createStore } from 'vuex'

export default createStore({
  state: {
    menu:true
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
