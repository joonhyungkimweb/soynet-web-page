<template>
  <swiper :options="options">
      <slot name="slides"></slot>
      <div class="swiper-pagination" slot="pagination"></div>
      <n-button class="prev-button" slot="button-prev" type="link"> <i class="now-ui-icons arrows-1_minimal-left"></i> </n-button>
      <n-button class="next-button" slot="button-next" type="link"> <i class="now-ui-icons arrows-1_minimal-right"></i> </n-button>
  </swiper>
</template>

<style scoped>
    .logo-container {
        width: 180;
        height: 180px;
    }

    .prev-button,
    .next-button {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 100;
        font-size: 2rem;
        opacity: 0.2;
    }

    .prev-button:hover,
    .next-button:hover {
        opacity: 1;
    }

    .prev-button {
        left: 0;
    }

    .next-button {
        right: 0;
    }
</style>

<script>
    import { Swiper } from "vue-awesome-swiper";
    import { Button } from '@/components';
    import 'swiper/css/swiper.css';

    export default {
        components: {
            Swiper,
            [Button.name]: Button,
        },
        props: {
            slidesPerView: {
                type: Number,
                default: 2
            },
            spaceBetween: {
                type: Number,
                default: 30
            },
            breakpoints: {
                type: Object,
                default: () => ({
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 0
                    }
                }),
            },
            loop: {
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                options: {
                    slidesPerView: this.slidesPerView,
                    spaceBetween: this.spaceBetween,
                    loop: this.loop,
                    breakpoints: this.breakpoints,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.next-button',
                        prevEl: '.prev-button'
                    }
                }

            }
        }
    }
</script>