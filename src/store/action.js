import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default  {
  async addToOrders(context){
    const collection = firebase.firestore().collection("Orders")
    const user = await collection.doc(context.state.user.uid).get().catch((err)=>{
      console.log(err);
      context.commit("Error");
    })
    if(user.exists){
      collection
      .doc(firebase.auth().currentUser.uid)
      .update({
        orders:firebase.firestore.FieldValue.arrayUnion(context.state.detailedItem)}).then(()=>{
        context.dispatch("removeFromCart");
        context.commit("FW_closeFunction");
      }).catch((err)=>{
        console.log(err);
        context.commit("Error");
      })
    }else{
      const data =   {
        id: context.state.user.uid,
        email: context.state.user.email,
        orders: [context.state.detailedItem],
      }
      collection
      .doc(firebase.auth().currentUser.uid).set(data).then(()=>{
        context.commit("FW_closeFunction");
        context.dispatch("removeFromCart");
      }).catch((err)=>{
        console.log(err);
        context.commit("Error");
      })
    }
  },

   // ============================================================================================================

    async getCart(context){
      context.commit("updateCartState", false)
      context.state.cart = [];
      const collection = firebase.firestore().collection("users");
      collection
        .doc(context.state.user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            context.state.cart = doc.data().cart;
            console.log(context.state.cart);
            if(context.state.cart.length){
              context.state.cart.forEach((item) => {
                context.state.units[item.id] = 1;
                context.commit("getTotal");
             });
            }else{
              context.commit("updateCartState", true)
            }
          
          } else {

            console.log("Not Found");
          }
        });
    },

     // ============================================================================================================
     
    async getOrders(context){
      context.commit("updateOrdersLoading", true)
      context.state.cart = [];
      const collection = firebase.firestore().collection("Orders");
      collection
        .doc(context.state.user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log(doc.data());
            context.state.orders = doc.data().orders;
            context.commit("updateOrdersLoading", false)
          
          } else {
            context.commit("updateOrdersLoading", false)
            console.log("Not Found");
            context.state.orders = []
          }
        });
    },

     // ============================================================================================================

     // ============================================================================================================
     
    async getAdminOrders(context){
      context.commit("updateOrdersLoading", true)
      context.state.cart = [];
      const collection = firebase.firestore().collection("Orders");
      collection
        .get()
        .then((querySnapshot) => { 
          console.log(querySnapshot);
          if (!querySnapshot.empty) {
            console.log(querySnapshot.docs());
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              
          });
          context.commit("updateOrdersLoading", false)
          
          } else {
            context.commit("updateOrdersLoading", false)
            console.log("Not Found");
            context.state.orders = []
          }
        });
    },

     // ============================================================================================================

    async getC_Orders(context){
      context.state.cart = [];
      const collection = firebase.firestore().collection("users");
      collection
        .doc(context.state.user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            context.state.C_orders = doc.data().C_orders;
            console.log(context.state.C_orders);
          
          } else {
            context.state.C_orders = []
            console.log("Not Found");
          }
        });
    },

     // ============================================================================================================

    async getMeasurement(context){
      context.state.cart = [];
      const collection = firebase.firestore().collection("users");
      collection
        .doc(context.state.user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            context.state.body = doc.data().body;
          } else {
            console.log("Not Found");
          }
        });
    },

     // ============================================================================================================

    async setMeasurement(context, data){
      const collection = firebase.firestore().collection("users")
      const user = await collection.doc(context.state.user.uid).get().catch((err)=>{
        console.log(err);
        context.commit("Error");
      })
      if(user.exists){
        collection
        .doc(firebase.auth().currentUser.uid)
        .update({
          body:data}).then(()=>{
          context.commit("ShowNotifyMeasurement");
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
          C_orders: [],
          cart: [],
          body:data
        }
        collection
        .doc(firebase.auth().currentUser.uid).set(data).then(()=>{
          context.commit("ShowNotifyMeasurement");
        }).catch((err)=>{
          console.log(err);
          context.commit("Error");
        })
      }
    },

    // ============================================================================================================
      removeFromCart(context) {
        context.commit("updateLoading", true);
        const collection = firebase.firestore().collection("users");
        context.state.cart.forEach((item)=>{
          collection
          .doc(context.state.user.uid)
          .update({
            cart: firebase.firestore.FieldValue.arrayRemove(item),
          }).then(()=>{
            context.commit("updateLoading", false);
          })  .catch((err) => {
            context.commit("updateLoading", false);
            context.commit("wrong");
            console.log(err);
          });
        })
       
        
      },
    
       // ============================================================================================================

    async addToCart(context){
      context.commit("updateLoading", true);
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
            context.commit("updateLoading", false);
          context.commit("ShowNotifyCart");
        }).catch((err)=>{
          context.commit("updateLoading", false);
          console.log(err);
          context.commit("Error");
        })
      }else{
        const data =   {
          id: context.state.user.uid,
          email: context.state.user.email,
          favourite: [],
          orders: [],
          C_orders: [],
          cart: [context.state.detailedItem],
          body:{}
        }
        collection
        .doc(firebase.auth().currentUser.uid).set(data).then(()=>{
          context.commit("updateLoading", false);
          context.commit("ShowNotifyCart");
        }).catch((err)=>{
          context.commit("updateLoading", false);
          console.log(err);
          context.commit("Error");
        })
      }
    },

     // ============================================================================================================


    async addToFaV(context){
      context.commit("updateLoading", true);
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
            context.commit("updateLoading", false);
          context.commit("ShowNotifyFav");
        }).catch((err)=>{
          context.commit("updateLoading", false);
          console.log(err);
          context.commit("Error");
        })
      }else{
        const data =   {
          id: context.state.user.uid,
          email: context.state.user.email,
          favourite: [context.state.detailedItem],
          orders: [],
          C_orders: [],
          cart: [],
          body:{}
        }
        collection
        .doc(firebase.auth().currentUser.uid).set(data).then(()=>{
          context.commit("updateLoading", false);
          context.commit("ShowNotifyFav");
        }).catch((err)=>{
          context.commit("updateLoading", false);
          console.log(err);
          context.commit("Error");
        })
      }
    
    },

     // ============================================================================================================

    async addToC_Order(context){
      const collection = firebase.firestore().collection("users")
      const user = await collection.doc(context.state.user.uid).get().catch((err)=>{
        console.log(err);
        context.commit("Error");
      })
      if(user.exists){
        collection
        .doc(firebase.auth().currentUser.uid)
        .update({
          C_orders:firebase.firestore.FieldValue.arrayUnion(context.state.detailedItem)}).then(()=>{
          context.commit("ShowNotifyFav");
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
          C_orders: [context.state.detailedItem],
          cart: [],
          body:{}
        }
        collection
        .doc(firebase.auth().currentUser.uid).set(data).then(()=>{
          context.commit("ShowNotifyFav");
        }).catch((err)=>{
          console.log(err);
          context.commit("Error");
        })
      }
    
    },

    
  };