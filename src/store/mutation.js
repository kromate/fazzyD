export default {
  updatedetailedItem(state, payload){
    state.detailedItem = payload
  },
  ShowNotifyMeasurement(state){
      state.showNotifyImage = ''
      state.showNotifyText = "Body Measurement successfully updated"
      state.showNotify = true

      setTimeout(() => {
        state.showNotify = false
      }, 1000);
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
  RemoveNotifyCart(state){
    state.showNotifyImage = ''
    state.showNotifyText = "Item Successfully Removed from Cart"
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
};