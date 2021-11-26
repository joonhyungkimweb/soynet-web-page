<template>
    <div class="header-container">
        <div class="content-center">
            <div class="row">
                <div class="col-md-12">
                    <div class="iframe-container">
                        <iframe height="400" src="https://www.youtube.com/embed/uexlz9vxjxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    .header-container {
        min-height: calc(100vh - 650px);
        position: relative;
        overflow: hidden;
    }

    .content-center {
        margin : 15vh auto 0;
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