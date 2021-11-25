<template>
    <div class="container mb-5">
        <div class="row">
            <div class="col-md-10 ml-auto mr-auto">
                <div class="row">
                    <div class="col-md-4" v-for="{ title, thumbnail, description, date } in partners">
                        <div class="card card-blog">
                            <div class="card-image">
                                <img class="img rounded" :src="thumbnail"></a>
                                <div class="card-body">
                                    <h6 class="category">
                                        {{ date.toLocaleDateString('en-US', { month: 'long', year : 'numeric', day : '2-digit' }) }}
                                    </h6>
                                    <h4 class="card-title">
                                        {{title}}
                                    </h4>
                                    <h5 class="card-description">
                                        {{ description }}
                                    </h5>
                                    <div class="card-footer">
                                        <!--<n-button type="neutral" class="p-0">Continue Reading</n-button>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
</template>

<style scoped>
    .card-title {
        font-weight: 600;
    }
</style>

<script>
    import { Button } from '@/components';

    export default {
        components: {
            [Button.name]: Button,
        },
        
        data() {
            return {
                partners: [{
                        description: "Robotic Arm setup",
                        thumbnail: "img/card-blog2.jpg",
                        date: new Date("2022-01-01"),
                        title: "Hyundai steel"
                    },
                    {
                        description: "AI for geological Data Contest",
                        thumbnail: "img/card-blog3.jpg",
                        date: new Date("2020-01-01"),
                        title: "Kigam",
                    },
                    {
                        description: "Surface detection for POSCO",
                        thumbnail: "img/bg14.jpg",
                        date: new Date("2021-01-01"),
                        title: "Posco"
                    },
                    {
                        description: "AI inference engine for AIaaS service infrastructure",
                        thumbnail: "img/bg35.jpg",
                        date: new Date("2019-01-01"),
                        title: "Saltlux"
                    },
                    {
                        description: "Cybersecurity AI Model Implementation",
                        thumbnail: "img/bg37.jpg",
                        date: new Date("2020-01-01"),
                        title: "Government of Korea",
                    },
                    {
                        description: "AI model Optimiziation",
                        thumbnail: "img/bg40.jpg",
                        date: new Date("2021-01-01"),
                        title: "Ainomis",
                    }
                ]

            }
        }
    };
</script>
