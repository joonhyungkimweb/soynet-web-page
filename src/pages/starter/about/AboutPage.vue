<template>
    <div class="about-page">
        <about-header/>
        <divider class="my-5"/>
        <about-cards/>
        
    </div>
</template>

<style scoped>
</style>

<script>
    import { Divider } from '@/components';
    
    import AboutCards from "./AboutCards.vue";
    import AboutHeader from "./AboutHeader.vue";
    
    export default {
        components: {
            Divider,
            AboutCards,
            AboutHeader
        }
    }
</script>
