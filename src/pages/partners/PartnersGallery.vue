<template>
        <div class="px-3">
            <contents-swiper 
                :loop="true"
                :slidesPerView="1"
                :breakpoints="{768: {slidesPerView: 1, spaceBetween: 0}}"
                class="mb-1"
                ref="swiperTop"
                :pagination="false"
                :scrollbar="true"
                @slideChange="onSlideChange">
                <template #slides>
                      <swiper-slide v-for="{ src, title } in partners">
                          <img :src="src" class="img-fluid rounded partner-image">
                      </swiper-slide>
                  </template>
            </contents-swiper>
            
                <contents-swiper style="width : 90%" :loop="false" :slidesPerView="4" :spaceBetween="5" :breakpoints="{768: {slidesPerView: 6, spaceBetween: 5}}" ref="swiperThumbs" :navigation="false">
                    <template #slides>
                              <swiper-slide v-for="{ logo }, index in partners" class="mb-3 p-2">
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
        max-height : 70vh;
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
                partners: [
                    // {
                    //     src: 'img/partners/hyundai-page.png',
                    //     logo: 'img/partners/hundaiSteel.jpg'
                    // },
                    // {
                    //     src: 'img/partners/posco-hompage.png',
                    //     logo: 'img/partners/posco.jpg'
                    // },
                    // {
                    //     src: 'img/partners/neuromeka-page.png',
                    //     logo: 'img/partners/neuromeka.png'
                    // },
                    // {
                    //     src: 'img/partners/pintel-page.png',
                    //     logo: 'img/partners/pintel.jpeg'
                    // },
                    // {
                    //     src: 'img/partners/mobiis-page.png',
                    //     logo: 'img/partners/mobiis.png'
                    // },
                    // {
                    //     src: 'img/partners/hanatek-page.png',
                    //     logo: 'img/partners/hanatek.svg'
                    // },
                    // {
                    //     src: 'img/partners/vivans-page.png',
                    //     logo: 'img/partners/vivans.png'
                    // },
                    // {
                    //     src: 'img/partners/impix-page.png',
                    //     logo: 'img/partners/impix.png'
                    // },
                    // {
                    //     src: 'img/partners/aissgo-page.png',
                    //     logo: 'img/partners/aissgo.png'
                    // },
                    {
                        src: 'img/partners/saltlux-page.png',
                        logo: 'img/partners/saltlux.png'
                    },
                    {
                        src: 'img/partners/medicalstandard-page.png',
                        logo: 'img/partners/medicalstandard.png'
                    },
                    {
                        src: 'img/partners/seculayer-page.png',
                        logo: 'img/partners/seculayer.png'
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
