import { createStore } from 'vuex'

export default createStore({
  state: {
    showNotify:false,
    showNotifyText: "Item Successfully Added to Favourite",
    menu:false,
    user: JSON.parse(localStorage.getItem('user')),
    homeCategoryView:'Home'
  },
  mutations: {

    ShowNotify(state){
        state.showNotify = true

        setTimeout(() => {
          state.showNotify = false
        }, 1000);
    },
    // closeShowNotify(state){
    //     state.showNotify = false
    // },
    changeHomeCategoryView(state, payload){
      state.homeCategoryView = payload
    },
    changeMenu(state){
        state.menu = !state.menu      
    },

    loginUser(state, payload){
      state.user = payload

      localStorage.setItem('user', JSON.stringify(payload));
      
    },
      logOut(state){
        state.user = null
      localStorage.setItem('user', null);
      }
  },
  actions: {
  },
  modules: { 
  }
})
