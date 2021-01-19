import { createStore } from 'vuex'

export default createStore({
  state: {
    showNotify:false,
    showNotifyImage:'',
    showNotifyText: "",
    menu:false,
    user: JSON.parse(localStorage.getItem('user')),
    homeCategoryView:'Home'
  },
  mutations: {

    ShowNotifyFav(state){
        state.showNotifyImage = require("@/assets/icon/Heart.svg")
        state.showNotifyText = "Item Successfully Added to Favourite"
        state.showNotify = true

        setTimeout(() => {
          state.showNotify = false
        }, 1000);
    },

    ShowNotifyCart(state){
        state.showNotifyImage = require("@/assets/icon/Buy.svg")
        state.showNotifyText = "Item Successfully Added to Cart"
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
