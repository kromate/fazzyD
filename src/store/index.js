import { createStore } from 'vuex'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import mutations from './mutation.js'

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
  mutations: mutations,
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
