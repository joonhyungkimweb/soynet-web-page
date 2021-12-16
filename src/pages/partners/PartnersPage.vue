<template>
    <div class="partners-page">
        <back-to-home/>
        <partners-gallery/>
        <divider margin="6.5rem 0"/>
        <partners-section/>
    </div>
</template>

<style scoped>
    .partners-page{
        max-width : calc(100vmin + (100vw - 100vmin) / 2);;
        margin : calc(5vh + 70px) auto 5rem;
        padding : 0 15px;
    }
</style>

<script>
    import { Divider, BackToHome } from '@/components';
    
    import PartnersGallery from './PartnersGallery.vue';
    import PartnersCards from './PartnersCards.vue';
    import PartnersSection from './PartnersSection.vue';

    export default {
        components: {
            Divider,
            BackToHome,
            PartnersGallery,
            PartnersCards,
            PartnersSection
        },
        data() {
            return {
            }
        }
    };
</script>
