import axios from 'axios'

axios.interceptors.request.use(function(cfg) {
  console.log('new request', cfg)
  return cfg
});

axios.interceptors.response.use(function(res) {
  console.log('new response', res)
  return res;
});
