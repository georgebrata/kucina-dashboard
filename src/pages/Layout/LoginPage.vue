<template>
<div class='login-wrapper'>
    <md-card class="login-card">
      <md-card-header :data-background-color="'red'">
        <h4 class="title">Sign in into your account</h4>
        <p class="category">Kucina Dashboard</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Email</label>
              <md-input type="email" v-model="email" placeholder="Email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Password</label>
              <md-input type="password" v-model="password" placeholder="Password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <p>You don't have an account ? You can <router-link to="/register">create one</router-link></p>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" v-on:click="signIn">Login</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
</div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'LoginPage',
    data: function() {
      return {
        email: 'sami@sami.sami',
        password: 'samisami'
      }
    },
    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('Dashboard')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
  .login-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-top: 200px;
  }

  .login-card {
    order: 0;
    width: 600px;
    flex: 0 1 auto;
    align-self: auto;
  }
</style>
