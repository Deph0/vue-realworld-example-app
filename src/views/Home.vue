<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">TheTVDB</h1>
        <form class="form-group" v-on:submit.prevent="searchMovies">
          <input
            v-model="query"
            type="text"
            class="form-control"
            placeholder="Search for a movie..."
          />
        </form>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_ARTICLES } from "@/store/actions.type";

export default {
  name: "home",
  // data() {
  //    return {
  //      queryValue: this.query
  //    }
  // },
  // created() {
  //   this.queryValue = this.$store.state.query;
  // },
  computed: {
    query: {
      get() {
        // console.log("get query computed", this.$store.getters.query);
        return this.$store.getters.query;
      },
      set(value) {
        // console.log("set query computer", value);
        this.$store.commit("setQuery", value);
      }
    }
  },
  methods: {
    searchMovies() {
      // console.log("searchmovie", this.$store.getters.query);
      let filters = {
        type: "all",
        filters: {}
      };
      if (this.$store.getters.query) {
        filters = {
          type: "filter",
          filters: { query: this.$store.getters.query }
        };
      }
      this.$store.dispatch(FETCH_ARTICLES, filters);
    }
  }
};
</script>
