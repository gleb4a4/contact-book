import Vue from "vue";
import VueRouter from "vue-router";
import Contact_List from "../views/Contact_List.vue";
import Contact_Inf from "../views/Contact_Inf";

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
    component: Contact_Inf,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
