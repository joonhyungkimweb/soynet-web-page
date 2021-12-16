<template>
    <div>
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
                    <p class="card-description">
                        {{description}}
                    </p>
                </card>
            </div>
        </div>
        
        <hr>
        
        <div>
            <h3 class="text-primary mb-0">Segmentation</h3>
            <p>Partition a digital image into multiple segments</p>
        </div>
        
        <div class="row">
            <div class="col-md-4" v-for="{ title, category, description, thumbnail, onClick } in segmentation">
                <card plain>
                    <img slot="image" class="img-raised rounded" :src="thumbnail">
                    <h4 class="card-title">{{ title }}</h4>
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
    
    p{
        color : #000000 !important;
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
                objectDetection: [{
                        title: "YOLOv4",
                        description: "YOLO v4 is a real-time and high-quality object detection model. Soynet improves the speed of detection up to 4 times faster.",
                        thumbnail: "img/examples/card-blog11.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    },
                    {
                        title: "Mask R-CNN",
                        description: "The model generates bounding boxes and segmentation masks for each instance of an object in the image.",
                        thumbnail: "img/examples/card-blog15.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    },
                    {
                        title: "Pose Estimation",
                        description: "Dense correspondences between RGB image and a surface-based representation of the human body, a task we refer to as dense human pose estimation.",
                        thumbnail: "img/examples/card-blog7.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    }
                ],
                segmentation: [{
                        title: "Instance Segmentation",
                        description: "Instance segmentation is the task of detecting and delineating each distinct object of interest appearing in an image.",
                        thumbnail: "img/examples/card-blog10.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    },
                    {
                        title: "Video Segmentation",
                        description: "Video object segmentation targets at segmenting a specific object throughout a video sequence, given only an annotated first frame.",
                        thumbnail: "img/examples/card-blog9.jpg",
                        onClick : () => window.open('/#/coming-soon')
                    }
                ]
            }
        }
    }
</script>
