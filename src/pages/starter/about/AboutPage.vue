<template>
    <div class="about-page">
        <div class="content-center">
            <div class="container text-left">
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
                            <h4 class="description ">
                                SoyNet offers easier and more flexible ways to deliver AI-driven services.
                            </h4>
                            <n-button type="primary" size="lg" round>Who are we?</n-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .about-page {
        min-height: 100vh;
        color: #FFFFFF;
        position: relative;
        overflow: hidden;
    }

    .content-center {
        position: absolute;
        top: 55%;
        left: 50%;
        z-index: 2;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        color: #FFFFFF;
        padding: 0 15px;
        width: 100%;
        max-width: 880px;
    }

</style>

<script>
    import { FormGroupInput, Button } from '@/components';
    export default {
        components: {
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
        }
    }
</script>
