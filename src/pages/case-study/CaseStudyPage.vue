<template>
    <div class="page">
        <back-to-home class="centered-content"/>
        <h2 class="title text-center">Case Studies</h2>
        <case-study-cards class="centered-content"/>
    </div>
</template>

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
