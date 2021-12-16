<template>
    <div class="page">
        <back-to-home class="centered-content"/>
        <h2 class="title text-center mb-0">Blogs</h2>
        <blog-slider class="centered-content"/>
        <divider margin="6.5rem 0"/>
        <blogs-cards class="centered-content"/>
    </div>
</template>
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
