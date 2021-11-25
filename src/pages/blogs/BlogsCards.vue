<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10 ml-auto mr-auto">
                <div v-for="({ category, title, thumbnail, description, buttonText }, index) in articles">
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
                        category: "General AI Topics",
                        title: "AIpsum Lorem",
                        description: "Phasellus eu gravida sapien. Phasellus vulputate ante nulla. Aliquam iaculis tortor non ex condimentum varius.",
                        thumbnail: "img/examples/card-blog4.jpg",
                    },
                    {
                        category: "Object Detection",
                        title: "Artificial Intelligence",
                        description: "Suspendisse quis ligula at nibh convallis blandit. Sed venenatis diam elit, vel ultrices velit lacinia nec. Vestibulum in elit vel ex lacinia aliquam.",
                        thumbnail: "img/examples/card-blog6.jpg",
                    }
                ]
            }
        }
    }
</script>