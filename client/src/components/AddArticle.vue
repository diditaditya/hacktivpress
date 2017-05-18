<template lang="html">
  <div class="">
    <h4>Add New Article</h4>
    <form class="form-group">
      <input v-model="title" class="form-control" type="text" placeholder="Title">
      <textarea v-model="content" class="form-control" rows="10" placeholder="Content"></textarea>
      <select v-model="category" class="form-control">
        <option disabled value="">Category</option>
        <option v-for="category in categories">{{ category }}</option>
      </select>
      <input class="btn btn-primary" type="submit" value="Submit Article">
    </form>
  </div>
</template>

<script>
export default {
  name: 'addArticle',
  computed: {
    user() {
      return this.$store.getters.user;
    },
    categories() {
      return this.$store.getters.categories;
    }
  },
  data: function() {
    return {
      title: '',
      content: '',
      category: ''
    }
  },
  methods: {
    checkToken() {
      let token = localStorage.getItem('token');
      if(!token) {
        this.$router.push('/signin');
      }
    },
    submitArticle() {
      let token = localStorage.getItem('token');
      if(!token) {
        this.$router.push('/signin');
      } else {
        if(this.title.length > 0 && this.content.length > 0 && this.category.length > 0) {
          let data = {
            title: this.title,
            content: this.content,
            category: this.category,
            author: this.user.id
          };
          this.$store.dispatch('submitArticle', data);
        }
      }
    }
  },
  mounted: function() {
    this.checkToken();
  }
}

</script>

<style lang="css">
</style>
