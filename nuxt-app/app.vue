<template>
  <div>
    <div>
      <article-list />
      <diary-page />
      <new-article /> 
   </div>
  </div>
</template>
<script>
import DiaryPage from '@/DiaryPage.vue';
import NewArticle from '@/NewArticle.vue';
import ArticleList from '@/ArticleList.vue';

export default {
  components: {
    ArticleList ,
    NewArticle ,
    DiaryPage,
    ArticleList 
  }
}



</script>