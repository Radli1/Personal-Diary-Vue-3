import { createRouter, createWebHistory } from 'vue-router'
import ArticleList from '../views/ArticleList.vue'
import DiaryPage from '../views/DiaryPage.vue'
import { useTitlesApi } from '../stores/useTitlesApi'

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

// router.beforeEach((from, to, next) => {
//   console.log('to',to)
//   console.log('from',from)
//   if (!useTitlesApi.state.paginatedArray) alert ('Данные загружаются')
//     else next()
// })

export default router
