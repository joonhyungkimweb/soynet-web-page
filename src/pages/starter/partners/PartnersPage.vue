<template>
    <div class="partners-page">
        <back-to-home/>
        <partner-slider/>
        <divider margin="8rem 0"/>
        <partners-cards/>
        <divider margin="8rem 0"/>
        <other-partners/>
    </div>
</template>

<style scoped>
    .partners-page{
        margin-top : 10vh;
    }
</style>

<script>
    import { Divider, BackToHome } from '@/components';
    
    import PartnerSlider from './PartnerSlider.vue';
    import PartnersCards from './PartnersCards.vue';
    import OtherPartners from './OtherPartners.vue';

    export default {
        components: {
            Divider,
            BackToHome,
            PartnerSlider,
            PartnersCards,
            OtherPartners
        },
        data() {
            return {
            }
        }
    };
</script>
