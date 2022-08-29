import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import PostID from '@/pages/PostID.vue'
import PostPageWithStoreVue from "@/pages/PostPageWithStore.vue";
import Calc from '@/pages/Calc.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: '/vue/',
      component: Main

   },
   {
      path: '/vue/posts',
      component: PostPage

   },
   {
      path: '/vue/posts/:id',
      component: PostID

   },
   {
      path: '/vue/about',
      component: About

   },
   {
      path: '/vue/store',
      component: PostPageWithStoreVue

   },
   {
      path: '/vue/calc',
      component: Calc

   },
]

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL)
})

export default router