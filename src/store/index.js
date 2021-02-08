import { createStore } from 'vuex'

import mutations from './mutation.js'
import actions from './action.js'
import state from './state.js'

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
 
})
