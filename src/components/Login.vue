<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Log In</h2>
    <p>Log in to your account to get some great quotes.</p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your username"
        v-model="credentials.username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="credentials.password"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter app master key"
        v-model="masterKey"
      >
    </div>



    <button class="btn btn-primary" @click="submit()">Access</button>
  </div>
</template>

<script>
  import auth from '../auth';
  export default {
    data () {
      return {
        credentials: {
          username: 'jamesgfc@hotmail.com',
          password: 'Gillingham1893'
        },
        error: '',
        masterKey: 'pGVg5hws9IMtxY91OtvLAD8m90ujKePP'
      };
    },
    methods: {
      submit () {
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        };
        var masterKey = this.masterKey;
        auth.login(this, credentials, masterKey, 'dashboard');
      }
    }
  };
</script>
