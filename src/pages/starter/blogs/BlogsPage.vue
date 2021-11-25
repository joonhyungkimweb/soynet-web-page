<template>
    <div class="blogs-page">
        <back-to-home/>
        <blog-slider/>
        <divider margin="8rem 0"/>
        <blogs-cards/>
    </div>
</template>

<style scoped>
    .blogs-page{
        margin-top : 10vh;
        padding : 0;
    }

</style>

<script>
    import { Divider, BackToHome } from '@/components';
    
    import BlogSlider from './BlogSlider.vue';
    import BlogsCards from './BlogsCards.vue';

    export default {
        components: {
            Divider,
            BackToHome,
            BlogSlider,
            BlogsCards
        },
        data() {
            return {

            }
        }
    };
</script>
