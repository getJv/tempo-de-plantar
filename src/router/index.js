import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import NewTree from "../views/NewTree";
import WorldFlorest from "../views/WorldFlorest";

Vue.use(VueRouter);

const routes = [
   {
    path: "/",
    name: "Home",
    component: Home,
  }, 
  {
    path: "/world-florest",
    name: "world-florest",
    component: WorldFlorest,
  },
  {
    path: "/new-tree",
    name: "new-tree",
    component: NewTree,
  },
  {
    path: "*",
    name: "*",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;