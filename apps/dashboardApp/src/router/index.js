import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home.vue";
import ApplicantPage from "../pages/ApplicantPage/ApplicantPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/applications",
    name: "applicant management",
    component: ApplicantPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
