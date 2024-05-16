import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import AuthFirebaseView from '@/views/AuthFirebaseView.vue'
import AuthSocialView from '@/views/AuthSocialView.vue'
import AuthAws from '@/views/AuthAws.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: "/firebase",
    name: "firebase",
    component: AuthFirebaseView
  },
  {
    path: "/social",
    name: "social",
    component: AuthSocialView
  },
  {
    path: "/aws",
    name: "aws",
    component: AuthAws
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: () => { return { name: "home" }},
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
