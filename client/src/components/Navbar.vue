<template lang="html">
  <nav class="navbar navbar-light bg-primary">
    <h4 class="navbar-brand"><b>hackPress</b></h4>
    <div class="button-container">
      <router-link to="/signin">
        <button type="button" class="btn btn-warning">Log In</button>
      </router-link>
      <button type="button" class="btn btn-default">Sign Up</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="css">

.navbar {
  margin-top: -60px;
}

.button-container {
  float: right;
  margin-top: 15px;
  margin-right: 10px;
}

</style>
