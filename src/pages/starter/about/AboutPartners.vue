<template>
    <div class="container">
        <h2 class="mt-5 mb-4 font-weight-bold text-center">Partners</h2>
            <el-carousel arrow="always" :autoplay="false" height="30vh">
                <el-carousel-item v-for="start in (partnerImages.length / 4)">
                    <div class="row px-5 align-content-center">
                        <div class="logo-container col-6 col-md-3 text-center" v-for="partner in partnerImages.slice((start - 1) * 4, (start - 1) * 4 + 4)">
                            <img :src="partner" class="partner-logo mb-3">
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
    </div>
</template>

<style scoped>
    .partner-logo {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .logo-container {
        flex-grow: 0;
    }
</style>

<script>
    import { Card } from '@/components';
    import { Button } from '@/components';
    import { Carousel, CarouselItem } from 'element-ui'

    export default {
        components: {
            Card,
            [Button.name]: Button,
            [Carousel.name]: Carousel,
            [CarouselItem.name]: CarouselItem
        },
        data() {
            return {
                partnerImages: ['img/partners/kigam.png', 'img/partners/saltlux.png', 'img/partners/hundaiSteel.jpg', 'img/partners/posco.jpg']
            }
        }
    }
</script>