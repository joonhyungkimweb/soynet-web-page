<template>
    <div class="about-page">
        <about-header/>
        <divider margin="6.5rem 0"/>
        <about-cards/>
        <divider margin="6.5rem 0"/>
        <about-customers/>
        <divider margin="6.5rem 0"/>
        <about-partners/>
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
    
    export default {
        components: {
            Divider,
            AboutCards,
            AboutHeader,
            AboutCustomers,
            AboutPartners
        }
    }
</script>
