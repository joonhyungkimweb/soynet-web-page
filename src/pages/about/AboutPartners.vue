<template>
    <div>
        <h2 class="mb-4 font-weight-bold text-center">Partners</h2>
        
        <contents-swiper :spaceBetween="0">
        <template #slides>
            <swiper-slide v-for="partner in partnerImages" class="logo-container px-4 py-3" :key="partner">
                <img :src="partner" class="partner-logo" @click="$router.push('partners')" style="cursor : pointer;"></img>
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