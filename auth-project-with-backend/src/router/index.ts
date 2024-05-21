import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import NoteCreateView from "@/views/NoteCreateView.vue";
import NoteListView from "@/views/NoteListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: () => {
      return { name: "noteList" };
    },
  },
  {
    path: "/notes",
    name: "noteList",
    component: NoteListView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/notes/create",
    name: "create",
    component: NoteCreateView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: () => {
      return { name: "noteList" };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
