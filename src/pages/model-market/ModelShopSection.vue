<template>
    <div class="container">
        <h2 class="font-weight-bold text-center">Shop Your Models</h2>
        
        <div>
            <h3 class="text-primary mb-0">Object Detection</h3>
            <p>Select and compare the best suited model optimized by SoyNet</p>
        </div>
        <div class="row">
            <div class="col-md-4" v-for="{ title, category, description, thumbnail, onClick } in objectDetection">
                <card plain>
                    <img  slot="image" class="img-raised rounded" :src="thumbnail">
                    <h4 class="card-title">{{ title }}</h4>
                    <h6 class="category text-primary">
                        {{category}}
                    </h6>
                    <p class="card-description">
                        {{description}}
                    </p>
                </card>
            </div>
        </div>
        
        <hr>
        
        <div>
            <h3 class="text-primary mb-0">Segmentation</h3>
            <p>We serve the best segmentation model in town.</p>
        </div>
        
        <div class="row">
            <div class="col-md-4" v-for="{ title, category, description, thumbnail, onClick } in segmentation">
                <card plain>
                    <img slot="image" class="img-raised rounded" :src="thumbnail">
                    <h4 class="card-title">{{ title }}</h4>
                    <h6 class="category text-primary">
                        {{category}}
                    </h6>
                    <p class="card-description">
                        {{description}}
                    </p>
                </card>
            </div>
        </div>
    </div>
</template>

<style scoped>
    /*.card-title {*/
    /*    cursor: pointer;*/
    /*}*/

    /*.card-title:hover {*/
    /*    color : #f96332;*/
    /*}*/
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
                objectDetection: [{
                        title: "YOLOv4",
                        category: "Frameworks",
                        description: "YOLO v4 is a real-time and high-quality object detection model. Soynet improves the speed of detection up to 4 times faster.",
                        thumbnail: "img/examples/card-blog11.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    },
                    {
                        title: "Mask R-CNN",
                        category: "Frameworks",
                        description: "The model generates bounding boxes and segmentation masks for each instance of an object in the image.",
                        thumbnail: "img/examples/card-blog15.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    },
                    {
                        title: "Third Item",
                        category: "Frameworks",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        thumbnail: "img/examples/card-blog7.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    }
                ],
                segmentation: [{
                        title: "First Item",
                        category: "Cat",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        thumbnail: "img/examples/card-blog10.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    },
                    {
                        title: "Second Item",
                        category: "Cat",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        thumbnail: "img/examples/card-blog9.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    },
                    {
                        title: "Third Item",
                        category: "Cat",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        thumbnail: "img/examples/card-blog12.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    }
                ]
            }
        }
    }
</script>
