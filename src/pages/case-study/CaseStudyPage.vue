<template>
    <div class="case-studies-page">
        <back-to-home/>
        <h2 class="title text-center">Case Studies</h2>
        <case-study-cards/>
    </div>
</template>

<style scoped>
    .case-studies-page {
        max-width : calc(100vmin + (100vw - 100vmin) / 2);;
        margin : calc(5vh + 70px) auto 5rem;
        padding : 0 15px;
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
