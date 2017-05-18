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
    }
  },
  actions: {
    signin(context, data) {
      let url = 'http://localhost:3000/signin';
      Vue.axios.post(url, data)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          context.commit('signin', data);

        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
});
