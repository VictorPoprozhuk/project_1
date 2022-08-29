import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import PostID from '@/pages/PostID.vue'
import PostPageWithStoreVue from "@/pages/PostPageWithStore.vue";
import Calc from '@/pages/Calc.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: '/',
      component: Main

   },
   {
      path: '/posts',
      component: PostPage

   },
   {
      path: '/posts/:id',
      component: PostID

   },
   {
      path: '/about',
      component: About

   },
   {
      path: '/store',
      component: PostPageWithStoreVue

   },
   {
      path: '/calc',
      component: Calc

   },
]

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL)
})

export default router