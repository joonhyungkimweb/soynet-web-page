<template>
    <div class="container">
            <h2 class="title text-center">
                Partners
            </h2>
            
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="row">
                        <div class="col-md-4" v-for="{ title, thumbnail, category, name } in partners">
                            <div class="card card-blog bg-dark text-white">
                                <div class="card-image">
                                    <img class="img rounded" :src="thumbnail"></a>
                                <div class="card-body">
                                    <h4 class="m-0 partner-name">
                                        {{name}}
                                    </h4>
                                    <h5 class="card-title">
                                        {{ title }}
                                    </h5>
                                    <div class="card-footer py-2">
                                        <div class="stats stats-right text-primary">
                                            <h6>
                                                {{ category }}
                                            </h6>
                                        </div>
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
    .img {
        object-fit: cover;
        height: 100%;
    }

    .partner-name {
        font-weight: 600;
    }
</style>

<script>
    export default {
        data() {
            return {
                partners: [{
                        title: "Robotic Arm setup",
                        thumbnail: "img/card-blog2.jpg",
                        category: "Robotics",
                        name: "Hyundai steel"
                    },
                    {
                        title: "AI for geological Data Contest",
                        thumbnail: "img/card-blog3.jpg",
                        category: "AI solution",
                        name: "Kigam",
                    },
                    {
                        title: "Surface detection for POSCO",
                        thumbnail: "img/bg14.jpg",
                        category: "AI solution",
                        name: "Posco"
                    },
                    {
                        title: "AI inference engine for AIaaS service infrastructure",
                        thumbnail: "img/bg35.jpg",
                        category: "AI solution",
                        name: "Saltlux"
                    },
                    {
                        title: "Cybersecurity AI Model Implementation",
                        thumbnail: "img/bg37.jpg",
                        category: "Government",
                        name: "Government of Korea",
                    },
                    {
                        title: "AI model Optimiziation",
                        thumbnail: "img/bg40.jpg",
                        category: "AI solution",
                        name: "Ainomis",
                    }
                ]

            }
        }
    };
</script>
