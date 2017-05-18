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

  }
});
