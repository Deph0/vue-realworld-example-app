import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  query(resource, params) {
    return Vue.axios
      .get(resource, params)
      .then(x => {
        // console.log("data-query-api", x);
        return x;
      })
      .catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },

  get(resource, slug = "", params = {}) {
    return Vue.axios
      .get(`${resource}/${slug}`, params)
      .then(x => {
        // console.log("data-get-api", x);
        return x;
      })
      .catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

const api_key = "b4ec65fed8698e3d58edad35a21799de";
export const ArticlesService = {
  query(type, paramsList) {
    // console.log("[articleservice]", arguments);
    let action = "";
    if (type === "all") {
      action = "/discover/movie";
      // paramsList = { ...paramsList, sort_by: "vote_count.desc"};
    } else if (type === "filter") action = "/search/movie";
    return ApiService.query(action, {
      params: {
        ...paramsList,
        api_key,
        sort_by: "vote_count.desc"
      }
    });
  },
  get(id) {
    return ApiService.get("movie", id, {
      params: {
        api_key
      }
    });
  }
};
