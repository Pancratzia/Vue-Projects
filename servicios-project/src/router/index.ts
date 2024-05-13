import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PostListView from "@/views/PostListView.vue";
import PostDetailView from "@/views/PostDetailView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: () => { return { name: "PostList" }},
  },
  {
    path: "/post",
    name: "PostList",
    component: PostListView,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: PostDetailView,
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: () => { return { name: "PostList" }},
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
