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
    Admin_orders:[],
    C_orders:[],
    total: 0, 
    units: {},
    body:{},
    Empty_Cart: false,
    Empty_Fav: false,
    mode:"Pick Up",
    phone:"",
    AddDet:"",
    location:"",
    ordersLoading:false,
    loading:false,
  };