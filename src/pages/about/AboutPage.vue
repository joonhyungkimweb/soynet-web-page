<template>
        <div class="about-page">
            <about-header />
            <divider margin="6.5rem 0" />
            <about-cards />
            <divider margin="6.5rem 0" />
            <about-customers />
            <divider margin="6.5rem 0" />
            <about-partners />
            <divider margin="6.5rem 0" />
            <about-prizes />
        </div>
</template>

<style scoped>
    .about-page{
        max-width : calc(100vmin + (100vw - 100vmin) / 2);;
        margin : calc(5vh + 70px) auto 5rem;
        padding : 0 15px;
    }
</style>

<script>
    import { Divider } from '@/components';
    
    import AboutCards from "./AboutCards.vue";
    import AboutHeader from "./AboutHeader.vue";
    import AboutCustomers from "./AboutCustomers.vue";
    import AboutPartners from "./AboutPartners.vue";
    import AboutPrizes from "./AboutPrizes.vue";
    
    export default {
        components: {
            Divider,
            AboutCards,
            AboutHeader,
            AboutCustomers,
            AboutPartners,
            AboutPrizes
        }
    }
</script>
