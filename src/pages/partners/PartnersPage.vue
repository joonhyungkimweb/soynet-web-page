<template>
    <div class="partners-page">
        <back-to-home/>
        <partners-gallery/>
        <divider margin="6.5rem 0"/>
        <partners-slider/>
    </div>
</template>

<style scoped>
    .partners-page{
        margin-top : 10vh;
    }
</style>

<script>
    import { Divider, BackToHome } from '@/components';
    
    import PartnersGallery from './PartnersGallery.vue';
    import PartnersCards from './PartnersCards.vue';
    import PartnersSlider from './PartnersSlider.vue';

    export default {
        components: {
            Divider,
            BackToHome,
            PartnersGallery,
            PartnersCards,
            PartnersSlider
        },
        data() {
            return {
            }
        }
    };
</script>
