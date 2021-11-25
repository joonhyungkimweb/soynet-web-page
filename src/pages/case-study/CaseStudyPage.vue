<template>
    <div class="case-studies-page">
        <back-to-home/>
        <h2 class="title text-center">Case Studies</h2>
        <case-study-cards/>
    </div>
</template>

<style scoped>
    .case-studies-page {
        margin-top: 10vh;
    }
</style>

<script>
    import { Divider, BackToHome } from '@/components';

    import CaseStudyCards from './CaseStudyCards.vue';

    export default {
        components: {
            Divider,
            BackToHome,
            CaseStudyCards
        },
        data() {
            return {

            }
        }
    };
</script>
