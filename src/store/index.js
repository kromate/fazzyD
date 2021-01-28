import { createStore } from 'vuex'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default createStore({
  state: {
    showNotify:false,
    showNotifyImage:'',
    showNotifyText: "",
    menu:false,
    user: JSON.parse(localStorage.getItem('user')),
    homeCategoryView:'Home',
    detailedItem:{}
  },
  mutations: {
    updatedetailedItem(state, payload){
      state.detailedItem = payload
    },
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
    addToFaV(context){
      const collection = firebase.firestore().collection("users")
      collection
      .doc(firebase.auth().currentUser.uid)
      .set(context.state.detailedItem).then(()=>{
        context.commit("ShowNotifyFav");
      }).catch((err)=>{
        console.log(err);
      })
    }
  },
  modules: { 
  }
})
