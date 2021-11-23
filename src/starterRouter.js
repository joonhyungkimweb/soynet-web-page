import Vue from "vue";
import Router from "vue-router";
import StarterPage from "./pages/starter/StarterPage.vue";
import AboutPage from "./pages/starter/about/AboutPage.vue";
import StarterNavbar from "./layout/StarterNavbar.vue";
import StarterFooter from "./layout/StarterFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      redirect: "/about"
    },
    {
      path: "/starter",
      name: "starter",
      components: { default: StarterPage, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: "/about",
      name: "about",
      components: { default: AboutPage, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return { selector: to.hash }
    }
    else {
      return { x: 0, y: 0 }
    }
  },
});
