<template>
    <div class="container">
        <h2 class="mt-5 mb-4 font-weight-bold text-center">Customers</h2>
        <contents-swiper :loop="false" :slidesPerView="1" :breakpoints="{768: {slidesPerView: 3,spaceBetween: 20}}">
          <template #slides>
              <swiper-slide v-for="({ title, thumbnail, description}) in customers">
                  <card type="profile" plain>
                      <img slot="image" class="img img-raised rounded" :src="thumbnail">
                      <h4 class="card-title">
                          {{title}}
                      </h4>
                      <h6 class="category">
                          {{ description }}
                      </h6>
                      <n-button size="lg" type="neutral">Read More</n-button>
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
                        title: "Government of Korea",
                        thumbnail: "img/bg3.jpg",
                        description: "Cybersecurity AI model implementation"
                    },
                    {
                        title: "POSCO",
                        thumbnail: "img/bg22.jpg",
                        description: "Surface detection for POSCO"
                    },
                    {
                        title: "Hyundai Steel",
                        thumbnail: "img/bg23.jpg",
                        description: "Robotic Arm setup"
                    }
                ]
            }
        }
    }
</script>