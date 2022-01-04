<template>
    <div>
        <h2 class="mb-4 pt-5 font-weight-bold text-center">Customers</h2>
        <contents-swiper :loop="false" :slidesPerView="1" :breakpoints="{768: {slidesPerView: 4,spaceBetween: 20}}" class="px-2">
          <template #slides>
              <swiper-slide v-for="({ title,linktext,link, thumbnail, description, buttonAction }) in customers">
                  <card type="profile" class="px-2" plain>
                      <div class="thumbnail-section img-raised rounded mb-4 bg-white">
                          <div class="image-container">
                              <img slot="image" class="img" :src="thumbnail">
                          </div>
                      </div>
                      <h4 class="card-title">
                          {{title}}
                      </h4>
                      <h6 class="category">
                          {{ description }}
                      </h6>
                      <div class="w-100">
                        <a :href="link" class="w-100">
                            {{linktext}}
                        </a>
                      </div>
                      <!-- <n-button  type="primary" round @click="buttonAction">Case Study</n-button> -->
                  </card>
              </swiper-slide>
          </template>
</contents-swiper>

</div>
</template>

<style scoped>
    .thumbnail-section {
        width : 100%;
        padding : 0 0 100%;
        position : relative;
    }
    
    .image-container {
        position : absolute;
        top : 50%;
        left : 50%;
        width : 100%;
        padding : 0 2rem;
        transform : translate(-50%, -50%);
    }
    
    .image-container .img{
        width : 100%;
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
                customers: [
                    {
                        title: "Saltlux",
                        linktext:"Go To Saltlux",
                        link:"http://saltlux.com/",
                        thumbnail: "img/partners/saltlux.png",
                    },
                    {
                        title: "Medical Standard",
                        linktext:"Go To Saltux",
                        link:"http://saltlux.com/",
                        thumbnail: "img/partners/medicalstandard.png",
                        // buttonAction : () => this.$router.push('/case-study')
                    },
                    {
                        title: "Pintel",
                        linktext:"Go To Pintel",
                        link:"http://www.pintel.co.kr/en/index/",
                        thumbnail: "img/partners/pintel.jpeg",
                    },
                    {
                        title: "Mobiis",
                        linktext:"Go To Mobiis",
                        link:"http://www.mobiis.com/",
                        thumbnail: "img/partners/mobiis.png",
                    },
                    {
                        title: "Seculayer",
                        linktext:"Go To Seculayer",
                        link:"http://www.seculayer.co.kr/",
                        thumbnail: "img/partners/seculayer.png",
                    },
                    {
                        title: "HANATECH SYSTEM",
                        linktext:"Go To HANATECH SYSTEM",
                        link:"https://hanatek.co.kr/kor/company/company.php",
                        thumbnail: "img/partners/hanatek.svg",
                    },
                    {
                        title: "VIVANS",
                        linktext:"Go To VIVANS",
                        link:"https://www.vivans.net/",
                        thumbnail: "img/partners/vivans.png",
                    },
                    {
                        title: "IMPIX",
                        linktext:"Go To IMPIX",
                        link:"http://www.impix.co.kr/",
                        thumbnail: "img/partners/impix.png",
                    },
                    {
                        title: "AISSGO",
                        linktext:"Go To AISSGO",
                        link:"http://www.aissgo.com",
                        thumbnail: "img/partners/aissgo.png",
                    },
                    // {
                    //     title: "POSCO",
                    //     linktext:"Go To Saltlux",
                    //     link:"http://saltlux.com/",
                    //     thumbnail: "img/partners/posco.jpg",
                    //     description: "Surface detection for POSCO",
                    // },
                ]
            }
        }
    }
</script>