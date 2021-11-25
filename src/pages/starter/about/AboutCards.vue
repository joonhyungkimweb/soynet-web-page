<template>
    <div class="container">
        <h2 class="pb-5 mb-5 font-weight-bold text-center">About Us</h2>
        <div class="row">
            <div class="col-md-10 ml-auto mr-auto">
                <div class="about-card" v-for="({ category, title, thumbnail, description, buttonText }, index) in articles">
                    <card type="blog" plain v-if="index % 2 === 0">
                        <div slot="image" class="row">
                            <div class="col-md-5 d-md-block d-none">
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
    
                            <div class="col-md-5 d-md-none d-block">
                                <img class="img img-raised rounded" :src="thumbnail">
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
                                    <img class="img img-raised rounded" :src="thumbnail">
                            </div>
                        </div>
                    </card>
                </div>
    
            </div>
        </div>
    </div>
</template>
<style scoped>
    .about-card:not(:last-of-type) {
        margin-bottom: 80px;
    }
</style>

<script>
    import { Card } from '@/components';
    import { Button } from '@/components';

    export default {
        components: {
            Card,
            [Button.name]: Button,
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