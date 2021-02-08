import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './theme/main.css'

const firebaseConfig = {
    // apiKey: process.env.VUE_APP_API_KEY,
    // authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    // databaseURL: process.env.VUE_APP_DATABASE_URL,
    // projectId: process.env.VUE_APP_PROJECT_ID,
    // storageBucket : process.env.VUE_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.VUE_APP_MESSAGE_ID,
    // appId: process.env.VUE_APP_APP_ID,
    // measurementId: process.env.VUE_APP_MEASURE_ID

    apiKey: "AIzaSyAe9FWDc1bXOd8ShTA0OSlhLTWD7cehfco",
    authDomain: "fazzyd-1.firebaseapp.com",
    projectId: "fazzyd-1",
    storageBucket: "fazzyd-1.appspot.com",
    messagingSenderId: "284959917020",
    appId: "1:284959917020:web:42d5b84897ff79e6b40519",
    measurementId: "G-459GBYTY75"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.getCurrentUser = () => {
    if(store.state.user){
      return  store.state.user
    }else{
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        console.log(user)
        if(user){
          store.commit("loginUser", user);
        }
        
        unsubscribe();
        resolve(user);
      }, reject);
    });
  }
  };

createApp(App).use(store).use(router).mount('#app')
