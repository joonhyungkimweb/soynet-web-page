<template>
    <div class="case-studies-page">
        <back-to-home/>
        <case-studies-cards/>
    </div>
</template>

<style scoped>
    .case-studies-page{
        margin-top : 10vh;
    }
</style>

<script>
    import { Divider, BackToHome } from '@/components';
    
    import CaseStudiesCards from './CaseStudiesCards.vue';

    export default {
        components: {
            Divider,
            BackToHome,
            CaseStudiesCards
        },
        data() {
            return {

            }
        }
    };
</script>
