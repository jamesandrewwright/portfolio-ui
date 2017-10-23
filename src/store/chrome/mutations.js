export const SKILLS_ARE_LOADING = 'SKILLS_ARE_LOADING'
export const SKILLS_LOADED = 'SKILLS_LOADED'

let mutations = {
  [SKILLS_ARE_LOADING] (state, isLoading) {
    state.loading = isLoading
  },

  [SKILLS_LOADED] (state, skills) {
    state.skills = skills
  }
}

export default mutations
