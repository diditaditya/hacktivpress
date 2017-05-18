<template>
  <div class="hello">
    <div class="">
      <router-link to="/addArticle">
        <button class="btn btn-primary" type="button">Add new Article</button>
      </router-link>
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['articles'],
  data () {
    return {
      msg: 'Main Page'
    }
  },
  methods: {
    checkArticles() {
      if(this.articles.length === 0) {
       this.msg = 'No articles found, please post some stories'
      }
    }
  },
  mounted: function() {
    this.checkArticles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
