<template>
        <div class="container">
            <contents-swiper 
                :loop="true"
                :slidesPerView="1"
                :otherOptions="cardEffects"
                :breakpoints="{768: {slidesPerView: 2, spaceBetween: 0}}"
                class="mb-3"
                ref="swiperTop"
                :pagination="false"
                @slideChange="onSlideChange">
                <template #slides>
                      <swiper-slide v-for="{ src, title, onClick } in galleries">
                          <img :src="src" class="img-fluid rounded">
                          <h6 class="text-center mt-1 mb-4"> {{ title }} </h6>
                      </swiper-slide>
                  </template>
            </contents-swiper>

            <contents-swiper 
                :loop="false"
                :slidesPerView="6" 
                :spaceBetween="5" 
                :breakpoints="{768: {slidesPerView: 15, spaceBetween: 10}}" 
                ref="swiperThumbs"
                :navigation="false"
                :pagination="false"
                :scrollbar="true">
                <template #slides>
                  <swiper-slide v-for="{ src }, index in galleries" class="mb-3">
                      <div>
                        <img :src="src" class="gallery-thumbnail" :class="index === 0 && 'selected-image'" @click="onThumbnailClick(index)">
                      </div>
                  </swiper-slide>
                </template>
            </contents-swiper>
        </div>
</template>

<style scoped>
    .selected-image {
        border : 1px solid #f96332;
    }

    .gallery-thumbnail {
        max-width: 100%;
        height: 9vh;
        object-fit: cover;
        cursor : pointer;
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
                galleries: [{
                        src: 'img/examples/card-blog14.jpg',
                        title: 'Object Detection with SOYNET',
                        onClick : () => window.open('/#/coming-soon')
                    },
                    {
                        src: 'img/examples/card-blog15.jpg',
                        title: 'segmentation',
                        onClick : () => window.open('/#/coming-soon')
                    },
                    {
                        src: 'img/examples/card-blog16.jpg',
                        title: 'Third Item',
                        onClick : () => window.open('/#/coming-soon')
                    },
                ],
                cardEffects: {
                    effect: 'coverflow',
                    centeredSlides : true,
                    coverflowEffect: {
                        rotate: 10,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        scale : 1,
                        slideShadows: false,
                    },
                }
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
