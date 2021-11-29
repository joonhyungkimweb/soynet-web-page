<template>
    <div class="container">
        <h2 class="mb-4 font-weight-bold text-center">Prizes & Awards</h2>
        <contents-swiper :loop="false" :slidesPerView="1" :breakpoints="{768: {slidesPerView: 3,spaceBetween: 20}}">
          <template #slides>
              <swiper-slide v-for="({ title, thumbnail, description, buttonAction }) in customers">
                  <card type="profile" class="px-2" plain>
                      <div class="image-container img-raised rounded mb-4">
                          <img slot="image" class="img" :src="thumbnail">
                      </div>
                      <h6 class="category">
                          {{ description }}
                      </h6>
                      <h4 class="card-title">
                          {{title}}
                      </h4>
                  </card>
              </swiper-slide>
          </template>
</contents-swiper>

</div>
</template>

<style scoped>
    .image-container {
        width : 100%;
        padding-bottom : 130%;
        position : relative;
    }
    
    .image-container .img {
        position : absolute;
        width : 100%;
        height : 100%;
        object-fit : cover;
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
                        title: "Grand Prize of 2019 Seongnam Startup Competition",
                        thumbnail: "img/prizes/prize1.jpg",
                        description: "2019. 04. 11 ",
                    },
                    {
                        title: "Patent Office D-Day",
                        thumbnail: "img/prizes/prize2.jpg",
                        description: "2019. 05. 30 ",
                    },
                    {
                        title: "Roboworld Awards 2019",
                        thumbnail: "img/prizes/prize3.jpg",
                        description: "2019. 10. 09",
                    },
                    {
                        title: "2019 Best Prize in Wangzhong Wangjeon, Seongnam Startup",
                        thumbnail: "img/prizes/prize4.jpg",
                        description: "2019. 12. 11",
                    },
                    {
                        title: "STARTUP WARS 유니콘상",
                        thumbnail: "img/prizes/prize5.jpg",
                        description: "2020. 06. 17",
                    },
                    {
                        title: "STARTUP WARS 본상",
                        thumbnail: "img/prizes/prize6.jpg",
                        description: "2020. 07. 15",
                    },
                    {
                        title: "Korea Chamber of Commerce and Industry Corporate Startup Award",
                        thumbnail: "img/prizes/prize7.jpg",
                        description: "2020. 07. 16",
                    },
                    {
                        title: "Chinese Forest Changshin Startup Competition",
                        thumbnail: "img/prizes/prize8.jpg",
                        description: "-",
                    },{
                        title: "4th Industrial Revolution TargetEd Intelligence Information Industry Association Award",
                        thumbnail: "img/prizes/prize9.jpg",
                        description: "2020. 12. 10",
                    },
                    {
                        title: "4th Industrial Revolution TargetEd Intelligence Information Industry Association Award",
                        thumbnail: "img/prizes/prize10.jpg",
                        description: "2020. 12. 10",
                    },
                ]
            }
        }
    }
</script>