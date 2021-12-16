<template>
    <div class="page">
        <back-to-home class="centered-content"></back-to-home>
        <model-market-gallery class="centered-content"></model-market-gallery>
        <divider margin="6.5rem 0"/>
        <model-shop-section class="centered-content"></model-shop-section>
    </div>
</template>

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
