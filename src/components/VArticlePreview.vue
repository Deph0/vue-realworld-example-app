<template>
  <div class="col-sm-4">
    <div class="article-preview text-center">
      <router-link
        class="preview-link"
        :to="articleLink"
        :title="article.overview"
      >
        <RwvArticleMeta isPreview :article="article" />
      </router-link>
    </div>
  </div>
</template>

<script>
import RwvArticleMeta from "./ArticleMeta";

export default {
  name: "RwvArticlePreview",
  components: {
    RwvArticleMeta
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    articleLink() {
      return {
        name: "article",
        params: {
          slug: this.article.id
        }
      };
    }
  }
};
</script>
