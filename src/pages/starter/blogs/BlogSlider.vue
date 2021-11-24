<template>
    <div class="container">
        <contents-swiper :loop="false" :slidesPerView="1" :breakpoints="{768: {slidesPerView: 3,spaceBetween: 20}}">
          <template #slides>
              <swiper-slide v-for="({ title, thumbnail, date}) in customers">
                  <card type="profile" plain>
                      <img slot="image" class="img img-raised rounded" :src="thumbnail">
                      <h6 class="category">
                          {{ date.toLocaleDateString('en-US', { month: 'long', year : 'numeric', day : '2-digit' }) }}
                      </h6>
                      <h4 class="card-title">
                          {{title}}
                      </h4>
                      <n-button size="lg" type="neutral">Continue Reading</n-button>
                  </card>
              </swiper-slide>
          </template>
</contents-swiper>

</div>
</template>

<style scoped>
</style>

<script>
    import { Card, Button, ContentsSwiper } from '@/components';

    import { SwiperSlide } from "vue-awesome-swiper";

    export default {
        components: {
            Card,
            [Button.name]: Button,
            ContentsSwiper,
            SwiperSlide
        },
        data() {
            return {
                customers: [{
                        title: "New AI",
                        thumbnail: "img/bg3.jpg",
                        date: new Date("2222-01-01")
                    },
                    {
                        title: "Modern AI",
                        thumbnail: "img/bg23.jpg",
                        date: new Date("2021-01-01")
                    },
                    {
                        title: "Old AI",
                        thumbnail: "img/bg22.jpg",
                        date: new Date("1999-01-01")
                    },
                    {
                        title: "Good AI",
                        thumbnail: "img/bg23.jpg",
                        date: new Date("2021-01-01")
                    },
                    {
                        title: "Neutral AI",
                        thumbnail: "img/bg3.jpg",
                        date: new Date("2021-01-01")
                    },
                    {
                        title: "Bad AI",
                        thumbnail: "img/bg22.jpg",
                        date: new Date("2021-01-01")
                    }
                ]
            }
        }
    }
</script>