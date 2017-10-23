import * as actions from './actions'
import mutations from './mutations'

let defaultState = {
  loading: false,
  skills: []
}

export default {
  state: defaultState,
  actions,
  mutations,
  namespaced: true
}
