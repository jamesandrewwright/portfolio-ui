import Vue from 'vue'
import Vuex from 'vuex'
import chromeModule from './chrome'

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: true,
  modules: {
    chrome: chromeModule
  }
})

if (module.hot) {
  module.hot.accept([
    './chrome'
  ], () => {
    store.hotUpdate({
      modules: {
        chrome: require('./chrome').default
      }
    })
  })
}

export default store
