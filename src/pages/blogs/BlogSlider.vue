<template>
    <div class="container">
        <contents-swiper :loop="false" :slidesPerView="1" :breakpoints="{768: {slidesPerView: 3, spaceBetween: 30}}" :otherOptions="{centeredSlides : true}">
          <template #slides>
              <swiper-slide v-for="({ title, thumbnail, date, onClick}) in customers">
                  <card type="profile" plain>
                      <img slot="image" class="img img-raised rounded" :src="thumbnail">
                      <h6 class="category">
                          {{ date.toLocaleDateString('en-US', { month: 'long', year : 'numeric', day : '2-digit' }) }}
                      </h6>
                      <h4 class="card-title">
                          {{title}}
                      </h4>
                      <n-button size="lg" type="neutral" @click="onClick">Read More</n-button>
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
                        title: "AI execution & Accelerator Market",
                        thumbnail: "img/soynet/blog1.jpg",
                        date: new Date("2021-11-25"),
                        onClick : () => this.$router.push('/blog-post/1')
                    },
                ]
            }
        }
    }
</script>