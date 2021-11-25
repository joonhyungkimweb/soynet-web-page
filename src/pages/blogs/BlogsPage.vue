<template>
    <div class="blogs-page">
        <back-to-home/>
        <h2 class="title text-center mb-0">Blogs</h2>
        <blog-slider/>
        <divider margin="6.5rem 0"/>
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
