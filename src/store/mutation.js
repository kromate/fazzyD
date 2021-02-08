

export default {
    mutations: { 
        ShowNotifyFav(state){
            state.showNotifyImage = require("@/assets/icon/Heart.svg")
            state.showNotifyText = "Item Successfully Added to Favourite"
            state.showNotify = true
    
            setTimeout(() => {
              state.showNotify = false
            }, 1000);
        },
        RemoveNotifyFav(state){
        state.showNotifyImage = ''
        state.showNotifyText = "Item Successfully Removed from Favourite"
        state.showNotify = true
  
        setTimeout(() => {
          state.showNotify = false
        }, 1000); 
      }, },

  actions: {     async addToFaV(context){
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
  
  } },
}