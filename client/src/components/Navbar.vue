<template lang="html">
  <nav class="navbar navbar-light bg-primary">
    <h4 @click="goHome" class="navbar-brand"><b>hackPress</b></h4>
    <div class="button-container">
      <router-link to="/signin">
        <button type="button" class="btn btn-warning">Log In</button>
      </router-link>
      <router-link to="/signup">
        <button type="button" class="btn btn-default">Sign Up</button>
      </router-link>
    </div>
    <div class="button-container">
      <button @click="logout" type="button" class="btn btn-default">Log Out</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    user: function() {
      return this.$store.getters.user;
    }
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    logout() {
      localStorage.clear();
      this.$store.commit('logout');
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">

.navbar {
  margin-top: -60px;
}

.navbar-brand {
  cursor: pointer;
}

.button-container {
  float: right;
  margin-top: 15px;
  margin-right: 10px;
}

</style>
