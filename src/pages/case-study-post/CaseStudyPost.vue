<template>
  <div>
    <back-to-home link="#/blogs">Blogs</back-to-home>
    <component :is="currentComponent"></component>
  </div>
</template>
<script>
  import { BackToHome, Divider } from '@/components';
  import CaseStudyPostKorea from "./CaseStudyPostKorea.vue";

  export default {
    bodyClass: 'blog-post',
    components: {
      BackToHome,
      Divider
    },
    data() {
      return {
        caseStudies: [CaseStudyPostKorea]
      }
    },
    computed: {
      currentComponent() {
        return this.caseStudies[this.$route.params.id];
      }
    }
  }
</script>
<style scoped>
  p {
    color: #000000 !important;
  }
</style>
