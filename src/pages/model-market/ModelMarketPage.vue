<template>
    <div class="model-market-page">
        <back-to-home></back-to-home>
        <model-market-gallery></model-market-gallery>
        <divider margin="6.5rem 0"/>
        <model-shop-section class="mb-5"></model-shop-section>
    </div>
</template>

<style scoped>
    .model-market-page {
        max-width : calc(100vmin + (100vw - 100vmin) / 2);;
        margin : calc(5vh + 70px) auto 5rem;
        padding : 0 15px;
    }
</style>

<script>
    import { Divider, BackToHome } from '@/components';

    import ModelMarketGallery from "./ModelMarketGallery.vue";
    import ModelShopSection from "./ModelShopSection.vue";

    export default {
        components: {
            Divider,
            BackToHome,
            ModelMarketGallery,
            ModelShopSection
        }
    };
</script>
