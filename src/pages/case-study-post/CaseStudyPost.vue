<template>
  <div class="position-relative">
    <div class="header-link">
      <back-to-home link="#/case-study">Case Studies</back-to-home>
    </div>
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
  
  .header-link{
    position : absolute;
    top : 6rem;
    left : 2rem;
    z-index : 100;
  }
</style>
