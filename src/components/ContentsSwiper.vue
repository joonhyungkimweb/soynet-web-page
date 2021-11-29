<template>
  <swiper :options="options" ref="swiper" @slideChange="$emit('slideChange')">
      <slot name="slides"></slot>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" v-if="!!scrollbar" slot="scrollbar"></div>
      <n-button class="prev-button" v-if="!!navigation" slot="button-prev" type="link"> <i class="now-ui-icons arrows-1_minimal-left"></i> </n-button>
      <n-button class="next-button" v-if="!!navigation" slot="button-next" type="link"> <i class="now-ui-icons arrows-1_minimal-right"></i> </n-button>
  </swiper>
</template>

<style scoped>
    .prev-button,
    .next-button {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 100;
        font-size: 1.5rem;
        opacity: 0.5;
        margin : 0;
        padding : 10px;
        line-height : 100%;
    }

    .prev-button:hover,
    .next-button:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.4) !important; 
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

            pagination: {
                type: [Boolean, Object],
                default: () => ({
                    el: '.swiper-pagination',
                    clickable: true
                })
            },
            navigation: {
                type: [Boolean, Object],
                default: () => ({
                    nextEl: '.next-button',
                    prevEl: '.prev-button'
                })
            },
            scrollbar: {
                type: Boolean,
                default: false
            },
            otherOptions: {
                type: Object,
                default: () => ({})
            }

        },
        data() {
            return {
                options: {
                    slidesPerView: this.slidesPerView,
                    spaceBetween: this.spaceBetween,
                    loop: this.loop,
                    breakpoints: this.breakpoints,
                    pagination: this.pagination,
                    navigation: this.navigation,
                    scrollbar: this.scrollbar && { el: '.swiper-scrollbar' },
                    ...this.otherOptions
                }

            }
        },
        computed: {
            swiper() {
                return this.$refs.swiper.$swiper;
            }
        }
    }
</script>
