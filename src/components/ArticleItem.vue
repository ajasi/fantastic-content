<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="article-wrapper">
    <span class="article-link">
      <a :href="article.url">{{ article.title }}</a>
    </span>
    <span class="publish-date">{{ article.publishDate }}</span>
  </div>
</template>

<style scoped></style>
