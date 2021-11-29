<template>
    <div class="container mb-5">
        <h2 class="mb-4 font-weight-bold text-center">Partners</h2>
        <div class="row mx-auto w-75">
            <div class="col-6 col-md-3 logo-container" v-for="{ logo, home } in partnerImages">
                <a :href="home" target="_blank">
                    <img :src="logo" class="partner-logo">
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .partner-logo {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .logo-container {
        margin : 2rem 0;
        max-height: 8rem;
    }
</style>

<script>
    import { ContentsSwiper } from '@/components';

    import { SwiperSlide } from "vue-awesome-swiper";

    export default {
        components: {
            ContentsSwiper,
            SwiperSlide
        },
        data() {
            return {
                partnerImages: [{
                        logo: 'img/partners/posco.jpg',
                        home: "https://www.posco.co.kr"
                    },
                    {
                        logo: 'img/partners/hundaiSteel.jpg',
                        home: "https://www.hyundai-steel.com/en/index.hds"
                    },
                    {
                        logo: 'img/partners/neuromeka.png',
                        home: "https://www.neuromeka.com/about"
                    },
                    {
                        logo: 'img/partners/saltlux.png',
                        home: "http://saltlux.com/"
                    },
                    {
                        logo: 'img/partners/medicalstandard.png',
                        home: "http://medicalstandard.com/"
                    },
                    {
                        logo: 'img/partners/pintel.jpeg',
                        home: "http://www.pintel.co.kr/en/index/"
                    },
                    {
                        logo: 'img/partners/mobiis.png',
                        home: "http://www.mobiis.com/"
                    },
                    {
                        logo: 'img/partners/seculayer.png',
                        home: "http://www.seculayer.co.kr/"
                    },
                    {
                        logo: 'img/partners/hanatek.svg',
                        home: "https://hanatek.co.kr/kor/company/company.php"
                    },
                    {
                        logo: 'img/partners/vivans.png',
                        home: "https://www.vivans.net/"
                    },
                    {
                        logo: 'img/partners/impix.png',
                        home: "http://www.impix.co.kr/"
                    },
                    {
                        logo: 'img/partners/aissgo.png',
                        home: "http://www.aissgo.com"
                    }
                ],
            }
        }
    }
</script>