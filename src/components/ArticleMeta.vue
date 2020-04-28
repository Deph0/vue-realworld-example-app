<template>
  <div class="article-meta">
    <div class="info">
      <h1 class="text-truncate" v-text="article.title" />
      <p class="date text-truncate">
        Released {{ article.release_date | date }}
      </p>
    </div>
    <img
      v-if="article.poster_path != null"
      class="poster"
      :src="
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + article.poster_path
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
    <img
      v-else
      class="poster"
      src="//placehold.it/300x450"
      srcset="//placehold.it/300x450 1x, //placehold.it/600x900 2x"
      :alt="article.title"
    />
  </div>
</template>

<script>
export default {
  name: "RwvArticleMeta",
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
/* override the template css */
.article-meta img {
  height: 50vh;
  width: auto;
}
.article-meta .info {
  display: block;
}
.article-meta .info .date {
  max-width: initial;
  padding-bottom: 2vh;
}
</style>
