import { router } from '../main';
import axios from 'axios';

const API_URL = 'http://localhost:9000';

export default {
  user: {
    authenticated: false
  },

  login (context, creds, masterKey, redirect) {
    console.log('in');
    console.log(masterKey);
    let loginUrl = `${API_URL}/auth?access_token=${masterKey}`;

    axios({
      method: 'post',
      url: loginUrl,
      auth: {
        username: creds.username,
        password: creds.password
      }
    })
      .then((response) => {
        localStorage.setItem('id_token', response.data.token);

        this.user.authenticated = true;

        if (redirect) {
          debugger;
          router.push(redirect);
        }
      }).catch((err) => {
        context.error = err.response.data;
      });
  },

  logout () {
    localStorage.removeItem('id_token');
    this.user.authenticated = false;
  },

  checkAuth () {
    var jwt = localStorage.getItem('id_token');
    if (jwt) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    };
  },

  getToken () {
    return localStorage.getItem('id_token');
  }
};
