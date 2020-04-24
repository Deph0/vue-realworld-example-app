<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-xs-12">
          <div class="row jumbotron p-3">
            <div class="col-sm-4 colposter">
              <div v-if="article.poster_path == null">
                <img
                  class="poster"
                  src="//placehold.it/300x450"
                  srcset="//placehold.it/300x450 1x, //placehold.it/600x900 2x"
                  :alt="article.title"
                />
              </div>
              <div v-if="article.poster_path != null">
                <img
                  class="poster"
                  :src="
                    'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' +
                      article.poster_path
                  "
                  :srcset="
                    'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' +
                      article.poster_path +
                      ' 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/' +
                      article.poster_path +
                      ' 2x'
                  "
                  :alt="article.title"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <h1>{{ article.title }}</h1>
              <p>{{ article.tagline }}</p>
              <p>
                {{
                  article.status == "Released"
                    ? "Released: " + article.release_date
                    : "Status: " +
                      article.status +
                      ", Release date: " +
                      article.release_date
                }}<br />
                Runtime: {{ Math.trunc(article.runtime / 60) }} h
                {{ article.runtime % 60 }} min<br />
                Rated: {{ article.vote_average * 10 }}%,
                {{ article.vote_count }} Votes<br />
                <a
                  :href="'https://www.imdb.com/title/' + article.imdb_id + '/'"
                >
                  IMDB page
                </a>
              </p>
              <br />
              <strong>Summery:</strong>
              <p>{{ article.overview }}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import RwvArticleMeta from "@/components/ArticleMeta";
import { FETCH_ARTICLE } from "@/store/actions.type";

export default {
  name: "rwv-article",
  props: {
    slug: {
      type: Number,
      required: true
    }
  },
  components: {
    RwvArticleMeta
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch(FETCH_ARTICLE, to.params.slug).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(["article"])
  }
};
</script>

<style>
.article-page .banner {
  background: #5cb85c;
  box-shadow: inset 0 8px 8px -8px rgba(126, 72, 72, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
}
</style>
