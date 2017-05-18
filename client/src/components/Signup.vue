<template lang="html">
  <div class="">
    <p>
      Already have an account?
      <router-link to="/signin">
        <a href="#">Sign in</a>
      </router-link>
    </p>
    <form class="form-group">
      <input class="form-control" type="text" placeholder="Username">
      <input class="form-control" type="password" placeholder="Password">
      <input class="btn btn-primary" type="submit" name="" value="Sign Up">
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup'
}
</script>

<style lang="css">
</style>
