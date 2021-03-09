import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// types
const types={
  SET_LOCATION:"SET_LOCATION",
  SET_ADDRESS:"SET_ADDRESS"
}

// state
const state={
  location:{},
  address:""
}

// getters
const getters={
  // 获取一下location和address
  location:state=>state.location,
  address:state=>state.address
}

// mutations
const mutations={
  // 通过mutations可以得到types里面的SET_LOCATION以及state和location
  [types.SET_ADDRESS](state,address){
    if (address) {
      state.address=address
    } else {
      state.address=""
    }
  },
  [types.SET_LOCATION](state,location){
    if (location) {
      state.location=location
    } else {
      state.location=null
    }
  }
}

// actions
const actions={
  setLocation:({commit},location)=>{
    commit(types.SET_LOCATION,location)
  },
  setAddress:({commit},address)=>{
    commit(types.SET_ADDRESS,address)
  }
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
