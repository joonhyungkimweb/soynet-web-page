import Vue from "vue";
import Router from "vue-router";
import StarterPage from "./pages/starter/StarterPage.vue";
import StarterNavbar from "./layout/StarterNavbar.vue";
import StarterFooter from "./layout/StarterFooter.vue";

import AboutPage from "./pages/starter/about/AboutPage.vue";
import ModelMarketPage from "./pages/starter/model-market/ModelMarketPage.vue";
import PartnersPage from "./pages/starter/partners/PartnersPage.vue";
import BlogsPage from "./pages/starter/blogs/BlogsPage.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      redirect: "/about"
    },
    {
      path: "/about",
      name: "about",
      components: { default: AboutPage, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: "/model-market",
      name: "model-market",
      components: { default: ModelMarketPage, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: "/partners",
      name: "partners",
      components: { default: PartnersPage, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: "/blogs",
      name: "blogs",
      components: { default: BlogsPage, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
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
