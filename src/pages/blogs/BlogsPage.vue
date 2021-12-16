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
        max-width : calc(100vmin + (100vw - 100vmin) / 2);;
        margin : calc(5vh + 70px) auto 5rem;
        padding : 0 15px;
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
