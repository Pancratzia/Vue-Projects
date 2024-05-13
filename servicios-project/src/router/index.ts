import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PostListView from "@/views/PostListView.vue";
import PostDetailView from "@/views/PostDetailView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/post",
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
