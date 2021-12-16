<template>
    <div>
        <h2 class="pb-5 mb-5 font-weight-bold text-center">About Us</h2>
        <div class="row">
            <div class="col-md-12 ml-auto mr-auto">
                <div class="about-card" v-for="({ category, title, thumbnail, description, buttonText, buttonAction }, index) in articles">
                    <card type="blog" plain v-if="index % 2 === 0">
                        <div slot="image" class="row">
                            <div class="col-md-5 d-md-block d-none">
                                <img class="img img-raised rounded" :src="thumbnail">
                            </div>
                            <div class="col-md-7">
                                <h6 class="category text-mustard">
                                    {{category}}
                                </h6>
                                <h3 class="card-title">
                                    {{title}}
                                </h3>
                                <p class="card-description" v-html="Array.isArray(description) ? description.reduce((acc, cur) => `${acc} <li>${cur}</li>`,'<ul>') + '</ul>' : description">
                                </p>
                                <n-button type="primary" round @click="buttonAction">{{ buttonText }}</n-button>
                            </div>

                            <div class="col-md-5 d-md-none d-block">
                                <img class="img img-raised rounded" :src="thumbnail">
                            </div>
                        </div>
                    </card>

                    <card type="blog" plain v-else>
                        <div class="row">
                            <div class="col-md-7">
                                <h6 class="category text-primary">
                                    {{ category }}
                                </h6>
                                <h3 class="card-title">
                                    {{ title }}
                                </h3>
                                <p class="card-description" v-html="description">
                                </p>

                                <n-button type="primary" round @click="buttonAction">{{ buttonText }}</n-button>
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

    .card-description {
        color: #000000 !important;
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
                        description: "Highly optimized models with Soynet. We reduce the AI models to 1/5th size and now you deploy it any platform (On-premises, Cloud, Edge)",
                        thumbnail: "img/soynet/web-gd36244d23_1920.jpg",
                        buttonText: "Learn more",
                        buttonAction: () => this.$router.push('/what-is-soynet')
                    },
                    {
                        category: "Marketplace",
                        title: "Choose from our Model Market",
                        description: "Model Market helps you select highly optimized models by Soynet. Check the perfomance improvement with Soynet and other frameworks.",
                        thumbnail: "img/soynet/taras-shypka-iFSvn82XfGo-unsplash.jpg",
                        buttonText: "Check ModelMarket",
                        buttonAction: () => this.$router.push('/model-market')
                    },
                    {
                        category: "Inference",
                        title: "Inference Optimizer",
                        description: [
                            "Integrate your software with simple API.",
                            "Increase the inference speed of your Models.",
                            "Support GPU. (CPU, and TPU coming soon)",
                            `We will add the following Features.
                            <div class="ml-2 mt-2" style="font-size : 0.9rem">
                                <p class="mb-0" style="font-weight : 450">Extended Support for Standards</p>
                                <p>
                                    There are a range of standards offered by numerous vendors to help run AI models. SoyNet supports not only NVIDIA CUDA technology but also OpenCL.
                                </p>
                            </div>
                             
                            `,
                        ],
                        thumbnail: "img/soynet/possessed-photography-AUxh4Tccuf8-unsplash.jpg",
                        buttonText: "Learn More",
                        buttonAction: () => this.$router.push('/blogs')
                    }
                ]
            }
        }
    }
</script>