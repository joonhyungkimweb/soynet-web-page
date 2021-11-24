<template>
    <div class="model-market-page">
        <back-to-home></back-to-home>
        <model-market-gallery></model-market-gallery>
    </div>
</template>

<style scoped>
    .model-market-page {
        margin-top: 10vh;
    }
</style>

<script>
    import { Divider, BackToHome } from '@/components';
    
    import ModelMarketGallery from "./ModelMarketGallery.vue";

    export default {
        components: {
            Divider,
            ModelMarketGallery,
            BackToHome
        }
    };
</script>
