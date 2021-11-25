<template>
        <div class="container px-3">
            <contents-swiper 
                :loop="true"
                :slidesPerView="1"
                :breakpoints="{768: {slidesPerView: 1, spaceBetween: 0}}"
                class="mb-1"
                ref="swiperTop"
                @slideChange="onSlideChange">
                <template #slides>
                      <swiper-slide v-for="{ src, title } in partners">
                          <img :src="src" class="img-fluid rounded partner-image">
                      </swiper-slide>
                  </template>
            </contents-swiper>

            <contents-swiper 
                :loop="false"
                :slidesPerView="6" 
                :spaceBetween="5" 
                :breakpoints="{768: {slidesPerView: 6, spaceBetween: 5}}" 
                ref="swiperThumbs"
                :navigation="false"
                :pagination="false"
                :scrollbar="true">
                <template #slides>
                  <swiper-slide v-for="{ logo }, index in partners" class="mb-1 p-2">
                      <div>
                        <img :src="logo" class="gallery-thumbnail rounded" :class="index === 0 && 'selected-image'" @click="onThumbnailClick(index)">
                      </div>
                  </swiper-slide>
                </template>
            </contents-swiper>
        </div>
</template>

<style scoped>
    .gallery-thumbnail {
        width: 100%;
        height : 8vh;
        object-fit: contain;
        cursor : pointer;
        opacity : 0.5;
    }
    .selected-image {
        opacity : 1;
    }
    .partner-image {
        width : 100%;
        max-height : 65vh;
        object-fit: cover;
    }
</style>

<script>

    import { Divider, ContentsSwiper, BackToHome } from '@/components';

    import { SwiperSlide } from "vue-awesome-swiper";

    export default {
        components: {
            Divider,
            ContentsSwiper,
            SwiperSlide,
            BackToHome
        },
        data() {
            return {
                partners: [{
                        src: 'img/bg26.jpg',
                        logo: 'img/partners/hundaiSteel.jpg'
                    },
                    {
                        src: 'img/bg30.jpg',
                        logo: 'img/partners/kigam.png'
                    },
                    {
                        src: 'img/bg45.jpg',
                        logo: 'img/partners/hundaiSteel.jpg'
                    },
                    {
                        src: 'img/bg26.jpg',
                        logo: 'img/partners/posco.jpg'
                    },
                    {
                        src: 'img/bg30.jpg',
                        logo: 'img/partners/saltlux.png'
                    },
                    {
                        src: 'img/bg45.jpg',
                        logo: 'img/logo/soynet.png'
                    },
                    
                ],
            };
        },
        methods: {
            onThumbnailClick(index) {
                const gallerySwiper = this.$refs.swiperTop.swiper;
                gallerySwiper.slideToLoop(index);
            },
            onSlideChange() {
                const { realIndex } = this.$refs.swiperTop.swiper;
                this.toggleSelectedImage(document.querySelectorAll('.gallery-thumbnail')[realIndex]);
            },
            toggleSelectedImage(target) {
                document.querySelectorAll('.gallery-thumbnail').forEach(e => e.classList.remove('selected-image'));
                target.classList.add('selected-image');
            }
        }
    };
</script>
