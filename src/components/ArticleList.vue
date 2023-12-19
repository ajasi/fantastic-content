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
  <div>
    <ArticleItem />
  </div>
</template>

<style scoped></style>
