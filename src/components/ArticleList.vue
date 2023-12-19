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
    <h2 class="title">Latest Articles</h2>
    <div class="article">
      <div class="filters">
        <label class="filter-label"
          ><input type="checkbox" v-model="state.categories" value="news" />
          News</label
        >
        <label class="filter-label"
          ><input type="checkbox" v-model="state.categories" value="essay" />
          Essay</label
        >
      </div>
      <div v-for="article in filteredArticles" :key="article.publishDate">
        <ArticleItem :article="article" />
      </div>
      <div v-if="filteredArticles.length === 0" class="no-data">No Data</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  background: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.title {
  text-align: center;
}
.article {
  padding: 20px;
  max-width: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  .filters {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #e1e1e1;
    gap: 20px;
    .filter-label {
      display: flex;
      align-items: center;
      gap: 2px;
      input[type="checkbox"] {
        cursor: pointer;
        transform: scale(1.3);
      }
    }
  }
}
.no-data {
  margin-top: 20px;
  text-align: center;
}
</style>
