<template>
    <div>
        <div class="row">
            <div class="col-md-10 ml-auto mr-auto">
                <div class="row">
                    <div class="col-md-4" v-for="{ title, thumbnail, description, id } in partners">
                        <div class="card card-blog">
                            <div class="card-image">
                                <div class="thumbnail-section rounded mb-4">
                                    <div class="image-container">
                                        <img slot="image" class="img" :src="thumbnail">
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">
                                        {{title}}
                                    </h4>
                                    <h5 class="card-description">
                                        {{ description }}
                                    </h5>
                                    <div class="card-footer text-center">
                                        <n-button type="primary" round @click="$router.push(`/case-study-post/${id}`)">Read More</n-button>
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

    .card-description {
        color: #000000 !important;
    }

    .thumbnail-section {
        width: 100%;
        padding: 0 0 100%;
        position: relative;
    }

    .image-container {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        padding: 0 2rem;
        transform: translate(-50%, -50%);
    }

    .image-container .img {
        width: 100%;
        height: 100%;

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
                        description: "Government of Korea saved millions of USD using SOYNET.",
                        thumbnail: "img/partners/koreaGovernment.png",
                        title: "Government of Korea",
                        id: 0
                    },
                    {
                        description: "POSCO implements SOYNET for surface defect detection.",
                        thumbnail: "img/partners/posco.jpg",
                        title: "Posco",
                        id: 1
                    },
                ]

            }
        }
    };
</script>
