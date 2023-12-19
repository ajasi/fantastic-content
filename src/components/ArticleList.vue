<script setup>
import { ref, onMounted } from "vue";
import ArticleItem from "./ArticleItem.vue";

const state = ref({
  articles: [],
});

onMounted(() => {
  if (window.LATEST_ARTICLES) {
    state.value.articles = window.LATEST_ARTICLES;
  }
});
</script>

<template>
  <div v-for="article in state.articles" :key="article.url">
    <ArticleItem :article="article" />
  </div>
</template>

<style scoped></style>
