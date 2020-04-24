import Vue from "vue";
import { ArticlesService } from "@/common/api.service";
import { FETCH_ARTICLE } from "./actions.type";
import { RESET_STATE, SET_ARTICLE } from "./mutations.type";

const initialState = {
  article: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {},
    budget: 0,
    genres: [],
    homepage: "",
    id: 1,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0.0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "2020-04-24",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "Released",
    tagline: "",
    title: "",
    video: false,
    vote_average: 10.0,
    vote_count: 0
  }
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_ARTICLE](context, articleSlug, prevArticle) {
    // avoid extronuous network call if article exists
    if (prevArticle !== undefined) {
      return context.commit(SET_ARTICLE, prevArticle);
    }
    const { data } = await ArticlesService.get(articleSlug);
    context.commit(SET_ARTICLE, data);
    return data;
  }
};

export const mutations = {
  [SET_ARTICLE](state, article) {
    state.article = article;
  },
  [RESET_STATE]() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  article(state) {
    return state.article;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
