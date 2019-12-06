import Router from "vue-router";
import Home from "@/views/home/index";
import About from "@/views/about/about";

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/michelle",
      name: "about",
      component: About
    }
  ]
});
