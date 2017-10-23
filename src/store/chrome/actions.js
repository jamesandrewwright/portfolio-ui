import { SKILLS_ARE_LOADING, SKILLS_LOADED } from './mutations'
import PortfolioService from '@api/portfolio.service'

export function setSkillsLoading ({ commit }, isLoading) {
  commit(SKILLS_ARE_LOADING, isLoading)
}

export async function loadSkills ({ commit, dispatch }) {
  dispatch('setSkillsLoading', true)
  let portfolioService = new PortfolioService()

  let [ skills ] = await Promise.all([portfolioService.getSkills()])
  commit(SKILLS_LOADED, skills)
  dispatch('setSkillsLoading', false)
}
