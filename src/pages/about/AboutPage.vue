<template>
        <div class="page">
            <about-header class="centered-content"/>
            <divider margin="6.5rem 0" />
            <about-cards class="centered-content"/>
            <divider margin="6.5rem 0" />
            <about-customers class="centered-content"/>
            <divider margin="6.5rem 0" />
            <about-partners class="centered-content"/>
            <divider margin="6.5rem 0" />
            <about-prizes class="centered-content"/>
        </div>
</template>

<style scoped>
    
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
