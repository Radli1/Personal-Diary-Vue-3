import { createRouter, createWebHistory } from 'vue-router'
import ArticleList from '../views/ArticleList.vue'
import DiaryPage from '../views/DiaryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/diarypage',
      name: 'DiaryPage',
      component: DiaryPage
    }
  ]
})

export default router
