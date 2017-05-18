import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users : [],
    user: {},
    articles: [],
    categories: ['Sport', 'Life', 'Science', 'Programming']
  },
  getters: {
    users(state) {
      return state.users;
    },
    user(state) {
      return state.user;
    },
    articles(state) {
      return state.articles;
    },
    categories(state) {
      return state.categories;
    }
  },
  mutations: {
    signin(state, data) {
      state.user.id = data.id;
      state.user.username = data.username;
      state.user.articles = data.articles;
    },
    logout(state) {
      state.user = {};
    },
    fillArticles(state, data) {
      state.articles = data;
    },
    addArticle(state, data) {
      this.state.article.push(data);
      this.state.users.map((user) => {
        if(user.id === data.author) {
          user.articles.push(data);
        }
      });
    }
  },
  actions: {
    signin(context, data) {
      let url = 'http://localhost:3000/signin';
      Vue.axios.post(url, data)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          context.commit('signin', response.data.user);
        })
        .catch((err) => {user
          console.log(err);
        });
    },
    fetchArticles(context) {
      let url = 'http://localhost:3000/articles';
      Vue.axios.get(url)
        .then((response) => {
          context.commit('fillArticles', response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUser(context, token) {
      let url = 'http://localhost:3000/user/jwtCheck';
      Vue.axios.post(url, {token:token})
        .then((response) => {
          context.commit('signin', response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitArticle(context, data) {
      let url = 'http://localhost:3000/articles';
      Vue.axios.post(url, data)
        .then((response) => {
          if(response.data.status === 'success') {
            context.commit('addArticle', response.data.article);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
});
