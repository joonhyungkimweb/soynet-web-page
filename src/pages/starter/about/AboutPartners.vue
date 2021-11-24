<template>
    <div class="container">
        <h2 class="mt-5 mb-4 font-weight-bold text-center">Partners</h2>
        
        <contents-swiper>
        <template #slides>
            <swiper-slide v-for="partner in partnerImages" class="logo-container px-4" :key="partner">
                <img :src="partner" class="partner-logo"></img>
            </swiper-slide>
        </template>
        </contents-swiper>
    </div>
</template>

<style scoped>
    .partner-logo {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .logo-container {
        width: 180;
        height: 180px;
    }
</style>

<script>
    import { ContentsSwiper } from '@/components';

    import { SwiperSlide } from "vue-awesome-swiper";

    export default {
        components: {
            ContentsSwiper,
            SwiperSlide
        },
        data() {
            return {
                partnerImages: ['img/partners/kigam.png', 'img/partners/saltlux.png', 'img/partners/hundaiSteel.jpg', 'img/partners/posco.jpg'],
            }
        }
    }
</script>