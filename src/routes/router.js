import Vue from "vue";
import Router from "vue-router";
import StarterNavbar from "@/layout/Navbar.vue";
import StarterFooter from "@/layout/Footer.vue";

import AboutPage from "@/pages/about/AboutPage.vue";
import ModelMarketPage from "@/pages/model-market/ModelMarketPage.vue";
import PartnersPage from "@/pages/partners/PartnersPage.vue";
import BlogsPage from "@/pages/blogs/BlogsPage.vue";
import CaseStudyPage from "@/pages/case-study/CaseStudyPage.vue";
import WhatIsSoynet from "@/pages/what-is-soynet/WhatIsSoynet.vue";
import ContactUs from "@/pages/contact-us/ContactUs.vue";
import PricingPage from "@/pages/pricing/PricingPage.vue";
import CareerPage from "@/pages/career/CareerPage.vue";
import ComingSoon from "@/pages/ComingSoon.vue";

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
      path: "/pricing",
      name: "pricing",
      components: { default: PricingPage, header: StarterNavbar, footer: StarterFooter },
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
    {
      path: "/career",
      name: "career",
      components: { default: CareerPage, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: "/case-study",
      name: "case-study",
      components: { default: CaseStudyPage, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: "/what-is-soynet",
      name: "what-is-soynet",
      components: { default: WhatIsSoynet, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: "/contact-us",
      name: "contact-us",
      components: { default: ContactUs, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: "/coming-soon",
      name: "coming-soon",
      components: { default: ComingSoon, header: StarterNavbar, footer: StarterFooter },
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
