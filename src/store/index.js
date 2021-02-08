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
    detailedItem:{},
    cart:[],
    total: 0,
    units: {},
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
    Error(state){
      state.showNotifyImage = require("@/assets/icon/none.svg")
      state.showNotifyText = "Oops, Something went wrong"
      state.showNotify = true

      setTimeout(() => { 
        state.showNotify = false
      }, 1000);
    },
<<<<<<< HEAD
    RemoveNotifyCart(state){
      state.showNotifyImage = ''
      state.showNotifyText = "Item Successfully Removed from Cart"
      state.showNotify = true

      setTimeout(() => {
        state.showNotify = false
      }, 1000); 
    },
=======
>>>>>>> c0dd3cb4abbe04e356ff4bf7da5d2818a6f9b661
    RemoveNotifyFav(state){
      state.showNotifyImage = ''
      state.showNotifyText = "Item Successfully Removed from Favourite"
      state.showNotify = true

      setTimeout(() => {
        state.showNotify = false
<<<<<<< HEAD
      }, 1000); 
=======
      }, 1000);
>>>>>>> c0dd3cb4abbe04e356ff4bf7da5d2818a6f9b661
    },
    getTotal(state){
      state.total = 0
      state.cart.forEach((item) => {
        state.total += parseInt(item.price * item.count);
     });
     console.log(state.total);
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
    async getCart(context){
      context.state.cart = [];
      const collection = firebase.firestore().collection("users");
      collection
        .doc(context.state.user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            context.state.cart = doc.data().cart;
            console.log(context.state.cart);
            context.state.cart.forEach((item) => {
               context.state.units[item.id] = 1;
               context.commit("getTotal");
            });
          } else {
            console.log("Not Found");
          }
        });
    },
    async addToCart(context){
      const collection = firebase.firestore().collection("users")
      const user = await collection.doc(context.state.user.uid).get().catch((err)=>{
        console.log(err);
        context.commit("Error");
      })
      if(user.exists){
        collection
        .doc(firebase.auth().currentUser.uid)
        .update({
          cart:firebase.firestore.FieldValue.arrayUnion(context.state.detailedItem)}).then(()=>{
          context.commit("ShowNotifyCart");
        }).catch((err)=>{
          console.log(err);
          context.commit("Error");
        })
      }else{
        const data =   {
          id: context.state.user.uid,
          email: context.state.user.email,
          favourite: [],
          cart: [context.state.detailedItem],
        }
        collection
        .doc(firebase.auth().currentUser.uid).set(data).then(()=>{
          context.commit("ShowNotifyCart");
        }).catch((err)=>{
          console.log(err);
          context.commit("Error");
        })
      }
    },
    async addToFaV(context){
      const collection = firebase.firestore().collection("users")
      const user = await collection.doc(context.state.user.uid).get().catch((err)=>{
        console.log(err);
        context.commit("Error");
      })
      if(user.exists){
        collection
        .doc(firebase.auth().currentUser.uid)
        .update({
          favourite:firebase.firestore.FieldValue.arrayUnion(context.state.detailedItem)}).then(()=>{
          context.commit("ShowNotifyFav");
        }).catch((err)=>{
          console.log(err);
          context.commit("Error");
        })
      }else{
        const data =   {
          id: context.state.user.uid,
          email: context.state.user.email,
          favourite: [context.state.detailedItem],
          cart: [],
        }
        collection
        .doc(firebase.auth().currentUser.uid).set(data).then(()=>{
          context.commit("ShowNotifyFav");
        }).catch((err)=>{
          console.log(err);
          context.commit("Error");
        })
      }
    
    }
  },
  modules: { 
  }
})
