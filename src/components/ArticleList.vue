<script setup>
import { ref, onMounted, computed } from "vue";
import ArticleItem from "./ArticleItem.vue";

const state = ref({
  categories: ["news", "essay"],
  articles: [],
});

onMounted(() => {
  if (window.LATEST_ARTICLES) {
    state.value.articles = window.LATEST_ARTICLES;
  }
});

const filteredArticles = computed(() => {
  let lastSevenDays = new Date("2023-06-05"); // here should be today's date // new Date() but it wont be visible
  lastSevenDays.setDate(lastSevenDays.getDate() - 7);

  return state.value.articles
    .filter((article) => state.value.categories.includes(article.category))
    .filter((article) => new Date(article.publishDate) > lastSevenDays)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, 5);
});
</script>

<template>
  <div class="container">
    <h2>Latest Articles</h2>
    <div class="article">
      <div class="filters">
        <label
          ><input type="checkbox" v-model="state.categories" value="news" />
          News</label
        >
        <label
          ><input type="checkbox" v-model="state.categories" value="essay" />
          Essay</label
        >
      </div>
      <div v-for="article in filteredArticles" :key="article.publishDate">
        <ArticleItem :article="article" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
