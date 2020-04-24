import { ArticlesService } from "@/common/api.service";
import { FETCH_ARTICLES } from "./actions.type";
import { FETCH_START, FETCH_END, SET_QUERY } from "./mutations.type";

const state = {
  articles: [],
  isLoading: true,
  articlesCount: 0,
  query: ""
};

const getters = {
  articlesCount(state) {
    return state.articlesCount;
  },
  articles(state) {
    return state.articles;
  },
  isLoading(state) {
    return state.isLoading;
  },
  query(state) {
    return state.query;
  }
};

const actions = {
  [FETCH_ARTICLES]({ commit }, params) {
    commit(FETCH_START);
    return ArticlesService.query(params.type, params.filters)
      .then(({ data }) => {
        commit(FETCH_END, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, { results, total_results }) {
    state.articles = results;
    state.articlesCount = total_results;
    state.isLoading = false;
  },
  [SET_QUERY](state, query) {
    state.query = query;
    // console.log(state.query);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
