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

<style scoped lang="scss">
.article-wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
}

.article-link {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 10px;

  a {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

.publish-date {
  white-space: nowrap;
}
</style>
