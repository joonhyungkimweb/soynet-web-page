<template>
    <div class="header-container">
        <div class="content-center">
            <div class="row">
                <div class="col-md-12">
                    <div class="iframe-container">
                        <video class="intro-video" src="vid/SoyNet_intro_english_caption.mp4" autoplay muted controls playsinline></video>
                    </div>
                </div>
                <div class="col-md-12 ml-auto mr-auto text-center">
                    <h1 class="text-primary pt-4 mb-3 font-weight-bold">
                        SOYNET
                    </h1>
                    <h4 class="description">
                        SoyNet offers easier and more flexible ways to deliver AI-driven services.
                    </h4>
                        <n-button type="primary" size="lg" round @click="$router.push('/what-is-soynet')">Who are we?</n-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .intro-video{
        width : 100%;
    }
    
    .header-container {
        position: relative;
        overflow: hidden;
    }

    .content-center {
        margin : 10rem auto 0;
        text-align: center;
        padding: 0 15px;
        width: 100%;
        max-width: 880px;
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