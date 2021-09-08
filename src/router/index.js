import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Courses from "../views/Courses.vue";
import Events from "../views/Events.vue";
import Work from "../views/Work.vue";
import ContactUs from "../views/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/work",
    name: "work",
    component: Work,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
