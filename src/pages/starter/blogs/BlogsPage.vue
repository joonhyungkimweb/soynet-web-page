<template>
    <div class="blogs-page">
        <back-to-home/>
        <h2 class="title text-center">Blog Posts</h2>
        <blog-slider/>
        <divider class="my-5"/>
        <blogs-cards/>
    </div>
</template>

<style scoped>
    .blogs-page{
        margin-top : 10vh;
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
