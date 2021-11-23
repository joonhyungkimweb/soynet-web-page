<template>
    <div class="about-page">
        <div class="header-container">
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
                                <h4 class="description">
                                    SoyNet offers easier and more flexible ways to deliver AI-driven services.
                                </h4>
                                <n-button type="primary" size="lg" round>Who are we?</n-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <divider class="my-5"/>
        
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <h2 class="my-5 py-5 font-weight-bold text-center">
                        About Us
                    </h2>
                    
                    <div class="about-card" v-for="({ category, title, thumbnail, description, buttonText }, index) in articles">
                        <card type="blog" plain v-if="index % 2 === 0">
                            <div slot="image" class="row">
                                <div class="col-md-5">
                                    <img class="img img-raised rounded" :src="thumbnail">
                                </div>
                                <div class="col-md-7">
                                    <h6 class="category text-info">
                                        {{category}}
                                    </h6>
                                    <h3 class="card-title">
                                        {{title}}
                                    </h3>
                                    <p class="card-description" v-html="Array.isArray(description) ? description.reduce((acc, cur) => `${acc} <li>${cur}</li>`,'<ul>') + '</ul>' : description">
                                    </p>
                                    <n-button type="primary" simple>{{ buttonText }}</n-button>
                                </div>
                            </div>
                        </card>
                        
                        <card type="blog" plain v-else>
                            <div class="row">
                                <div class="col-md-7">
                                    <h6 class="category text-danger">
                                        {{ category }}
                                    </h6>
                                    <h3 class="card-title">
                                        {{ title }}
                                    </h3>
                                    <p class="card-description" v-html="Array.isArray(description) ? description.reduce((acc, cur) => `${acc} <li>${cur}</li>`,'<ul>') + '</ul>' : description">
                                    </p>
                                    
                                    <n-button type="primary" simple>{{ buttonText }}</n-button>
                                </div>
                                <div class="col-md-5">
                                    <div class="card-image">
                                        <img class="img img-raised rounded" :src="thumbnail">
                                    </div>
                                </div>
                            </div>
                        </card>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .header-container {
        min-height: 100vh;
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
        padding: 0 15px;
        width: 100%;
        max-width: 880px;
    }

    .about-card {
        margin-bottom: 80px;
    }
</style>

<script>
    import { FormGroupInput, Button } from '@/components';
    import { Card } from '@/components';
    import { Divider } from '@/components';
    
    export default {
        components: {
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
            Card,
            Divider
        },
        data() {
            return {
                articles: [{
                        category: "Deploy AI models",
                        title: "What we provide",
                        description: "Highly optimized models with SOYNET. We reduce the AI models to 1/5th size and now you deploy it any platform (On-premises, Cloud, Edge)",
                        thumbnail: "img/examples/card-blog4.jpg",
                        buttonText: "Learn more about Soynet"
                    },
                    {
                        category: "Marketplace",
                        title: "Choose from our Model Market",
                        description: "Model Market helps you select highly optimized models by SOYNET. Check the perfomance improvement with Soynet and other frameworks.",
                        thumbnail: "img/examples/card-blog6.jpg",
                        buttonText: "Model Market"
                    },
                    {
                        category: "Inference",
                        title: "Inference Optimizer",
                        description: ["Reduce memory consumption and increse the speed of the inference engine.", "Simple API like integration with software application.", "CPU,GPU and TPU support capability."],
                        thumbnail: "img/examples/card-blog11.jpg",
                        buttonText: "Read More"
                    }
                ]
            }
        }
    }
</script>
