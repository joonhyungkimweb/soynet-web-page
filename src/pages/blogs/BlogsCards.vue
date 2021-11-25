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
                        category: "Segmentation",
                        title: "Efficient Video Object Segmentation via Network Modulation",
                        description: `Video object segmentation targets at segmenting a specific object throughout a video sequence, given only an annotated first frame. Recent deep learning based approaches find it effective by fine-tuning a general-purpose segmentation model on the annotated frame using hundreds of iterations of gradient descent.`,
                        thumbnail: "img/examples/card-blog4.jpg",
                    },
                    {
                        category: "Object Detection",
                        title: "DensePose: Dense Human Pose Estimation In The Wild",
                        description: "In this work, we establish dense correspondences between RGB image and a surface-based representation of the human body, a task we refer to as dense human pose estimation. We first gather dense correspondences for 50K persons appearing in the COCO dataset by introducing an efficient annotation pipeline.",
                        thumbnail: "img/examples/card-blog6.jpg",
                    }
                ]
            }
        }
    }
</script>