import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default  {
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
          orders: [],
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
          orders: [],
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
  };