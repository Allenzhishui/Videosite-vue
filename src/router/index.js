import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
        import("../views/Login.vue"),
  },
  {
    path:"/postVideo",
    name: "PostVideo",
    component: () =>
        import("../views/PostVideo.vue"),
  },
  {
    path:"/videoDetail/:videoID",
    name: "VideoDetail",
    component: () =>
        import("../views/VideoDetail.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
