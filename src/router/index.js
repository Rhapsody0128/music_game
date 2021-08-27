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
];

const router = createRouter({
  history: createWebHistory("#"),
  routes,
});

export default router;
