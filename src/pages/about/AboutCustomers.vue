<template>
    <div class="container">
        <h2 class="mb-4 font-weight-bold text-center">Customers</h2>
        <contents-swiper :loop="false" :slidesPerView="1" :breakpoints="{768: {slidesPerView: 3,spaceBetween: 20}}">
          <template #slides>
              <swiper-slide v-for="({ title, thumbnail, description, buttonAction }) in customers">
                  <card type="profile" class="px-2" plain>
                      <div class="image-container img-raised rounded mb-4">
                          <img slot="image" class="img" :src="thumbnail">
                      </div>
                      <h4 class="card-title">
                          {{title}}
                      </h4>
                      <h6 class="category">
                          {{ description }}
                      </h6>
                      <n-button size="lg" type="neutral" @click="buttonAction">Read More</n-button>
                  </card>
              </swiper-slide>
          </template>
</contents-swiper>

</div>
</template>

<style scoped>
    .image-container {
        width : 100%;
        padding-bottom : 100%;
        position : relative;
    }
    
    .image-container .img {
        position : absolute;
        top : 50%;
        left : 50%;
        transform : translate(-50%, -50%);
    }
    
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
                        thumbnail: "img/partners/koreaGovernment.png",
                        description: "Cybersecurity AI model implementation",
                        buttonAction : () => this.$router.push('/case-study')
                    },
                    {
                        title: "POSCO",
                        thumbnail: "img/partners/posco.jpg",
                        description: "Surface detection for POSCO",
                        buttonAction : () => this.$router.push('/case-study')
                    },
                    {
                        title: "Hyundai Steel",
                        thumbnail: "img/partners/hundaiSteel.jpg",
                        description: "Robotic Arm setup",
                        buttonAction : () => this.$router.push('/case-study')
                    }
                ]
            }
        }
    }
</script>