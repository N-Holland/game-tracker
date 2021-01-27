import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";


Vue.use(VueRouter);
const routes = [
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  
    next();
  
});

export default router;