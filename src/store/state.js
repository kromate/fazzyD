export default {
    showNotify:false,
    showNotifyImage:'',
    showNotifyText: "",
    menu:false,
    user: JSON.parse(localStorage.getItem('user')),
    homeCategoryView:'Home',
    detailedItem:{},
    cart:[],
    orders:[],
    C_orders:[],
    total: 0, 
    units: {},
    body:{},
    mode:"Pick Up",
    phone:"",
    location:""
  };