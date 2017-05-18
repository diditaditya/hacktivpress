<template lang="html">
  <div class="">
    <p>
      Doesn't have an account?
      <router-link to="/signup">
        <a href="#">Sign up</a>
      </router-link>
    </p>
    <form v-on:submit.prevent="signin" class="form-group">
      <input v-model="username" class="form-control" type="text" placeholder="Username">
      <input v-model="password" class="form-control" type="password" placeholder="Password">
      <input class="btn btn-primary" type="submit" name="" value="Log In">
    </form>
    <p style="color: red">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data: function() {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    signin() {
      let self = this;
      if(this.username && this.password) {
        if(this.username.length > 0) {
          if(this.password.length > 0) {
            self.message = '';
            let data = {
              username: self.username,
              password: self.password
            };
            self.$store.dispatch('signin', data);
            self.checkToken();
          } else {
            this.message = 'Password is required';
          }
        } else {
          this.message = 'Username is required';
        }
      } else {
        this.message = 'Username and Password are required';
      }
    },
    checkToken() {
      let token = localStorage.getItem('token');
      if(token) {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style lang="css">

.form-control {
  margin-bottom: 5px;
}

</style>
