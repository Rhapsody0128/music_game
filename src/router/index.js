import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import(/* webpackChunkName: "edit" */ "../views/Edit.vue"),
  },
  {
    path: "/play",
    name: "Play",
    component: () => import(/* webpackChunkName: "play" */ "../views/Play.vue"),
  },
  {
    path: "/form",
    name: "Form",
    component: () => import(/* webpackChunkName: "form" */ "../views/Form.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "../views/User.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("#"),
  routes,
});

export default router;
