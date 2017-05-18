<template>
  <div id="app">
    <navbar></navbar>
    <div class="container main">
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-3 leftbar">
          <leftbar></leftbar>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6">
          <router-view :articles='articles'></router-view>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-3">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';

export default {
  name: 'app',
  computed: {
    articles() {
      return this.$store.getters.articles;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  components: {
    Navbar, Leftbar
  },
  methods: {
    checkToken() {
      let token = localStorage.getItem('token');
      if(token) {
        this.$store.dispatch('fetchUser', token);
      }
    }
  },
  created: function() {
    this.checkToken();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  overflow: hidden;
}

.leftbar {

}

.main {
  margin-top: 25px;
}

</style>
