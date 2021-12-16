<template>
        <div class="row">
            <div class="col-md-12 text-center">
                    <video class="intro-video" src="vid/SoyNet_intro_english_caption.mp4" autoplay muted controls playsinline loop></video>
            </div>
            <div class="col-md-12 ml-auto mr-auto text-center">
                <h1 class="text-primary pt-4 mb-3 font-weight-bold">
                    SOYNET
                </h1>
                <p class="description">
                    SoyNet is a general-purpose inference-only acceleration solution developed to provide faster inference of AI models.
                </p>
                <h3>
                    SOYNET brings your AI dream to reality faster.
                </h3>
                <n-button type="primary" size="lg" round @click="$router.push('/what-is-soynet')">Who are we?</n-button>
            </div>
        </div>
</template>
<style scoped>
    .intro-video{
        width : 100%;
        max-height: 70vh;
    }
    
    .description{
        color : #000000 !important;
    }
</style>
<script>
    import { Button } from '@/components';

    export default {
        components: {
            [Button.name]: Button,
        }
    }
</script>