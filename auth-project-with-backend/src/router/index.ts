import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import NoteCreateView from "@/views/NoteCreateView.vue";
import NoteListView from "@/views/NoteListView.vue";
import useAuth from "@/store/auth";

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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/notes/create",
    name: "createList",
    component: NoteCreateView,
    meta: {
      requiresAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  const auth = useAuth();

  const isAuth = auth.token;

  if (to.meta.requiresAuth && isAuth === null) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
