<template>
    <div class="blogs-page">
        <back-to-home/>
        <blog-slider/>
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

    export default {
        components: {
            Divider,
            BackToHome,
            BlogSlider
        },
        data() {
            return {

            }
        }
    };
</script>
