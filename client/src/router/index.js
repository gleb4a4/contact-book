import Vue from "vue";
import VueRouter from "vue-router";
import Contact_List from "../views/Contact_List.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Contact_List
  },
  {
    path: "/Contact_Inf",
    name: "Contact_Inf",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact_Inf.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
