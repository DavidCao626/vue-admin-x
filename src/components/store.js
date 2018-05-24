
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Created by quanzaiyu on 2017/10/25 0025.
var state = {
  img_upload_cache: [],
  img_paths: [],
  img_status: 'ready' // 上传状态 ready selected uploading finished
}

const actions = {}

const getters = {
  imgStore: state => state.img_upload_cache,
  imgPaths: state => state.img_paths,
  imgStatus: state => state.img_status
}

const mutations = {
  set_img_upload_cache (state, arg) {
    state.img_upload_cache = arg
  },
  set_img_paths (state, arg) {
    state.img_paths = arg
  },
  set_img_status (state, arg) {
    state.img_status = arg
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
