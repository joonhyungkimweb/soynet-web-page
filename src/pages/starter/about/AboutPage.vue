<template>
    <div class="about-page">
        <about-header/>
        <divider class="my-5"/>
        <about-cards/>
        <divider class="my-5"/>
        <about-customers/>
        <divider class="my-5"/>
    </div>
</template>

<style scoped>
</style>

<script>
    import { Divider } from '@/components';
    
    import AboutCards from "./AboutCards.vue";
    import AboutHeader from "./AboutHeader.vue";
    import AboutCustomers from "./AboutCustomers.vue";
    
    export default {
        components: {
            Divider,
            AboutCards,
            AboutHeader,
            AboutCustomers
        }
    }
</script>
