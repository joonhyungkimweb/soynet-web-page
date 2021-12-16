<template>
    <div class="page">
        <back-to-home class="centered-content"/>
        <partners-gallery class="centered-content"/>
        <divider margin="6.5rem 0"/>
        <partners-section class="centered-content"/>
    </div>
</template>

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
