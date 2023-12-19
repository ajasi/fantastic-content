<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
const formatDate = (date) => {
  const options = { month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};
</script>

<template>
  <div class="article-wrapper">
    <span class="article-link">
      <a :href="article.url">{{ article.title }}</a>
    </span>
    <span class="publish-date">{{ formatDate(article.publishDate) }}</span>
  </div>
</template>

<style scoped></style>
