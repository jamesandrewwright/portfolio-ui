import axios from 'axios';

export default class PortfolioService {
  getSkills () {
    return axios.get('http://0.0.0.0:9000/skills').then(response => response.data);
  }
}
