<template>
    <div class="partners-page">
        <back-to-home></back-to-home>
        <partners-cards></partners-cards>
    
    </div>
</template>

<style scoped>
    .partners-page{
        margin-top : 10vh;
    }

    .img{
        object-fit : cover;
        height : 100%;
    }
    
    .partner-name{
        font-weight : 600;
    }

    
</style>

<script>
    import { Divider, BackToHome } from '@/components';
    
    import PartnersCards from './PartnersCards.vue';

    export default {
        components: {
            Divider,
            BackToHome,
            PartnersCards
        },
        data() {
            return {
                partners: [{
                        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        thumbnail: "img/card-blog2.jpg",
                        category: "Healthcare",
                        name: "Hyundai steel"
                    },
                    {
                        title: "lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                        thumbnail: "img/card-blog3.jpg",
                        category: "Healthcare",
                        name: "Kigam",
                    },
                    {
                        title: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                        thumbnail: "img/bg14.jpg",
                        category: "Financial Services",
                        name: "Posco"
                    },
                    {
                        title: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        thumbnail: "img/bg35.jpg",
                        category: "Financial Services",
                        name: "Saltlux"
                    },
                    {
                        title: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        thumbnail: "img/bg37.jpg",
                        category: "Government",
                        name: "Korean Army",
                    },
                    {
                        title: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        thumbnail: "img/bg40.jpg",
                        category: "Government",
                        name: "Korean Airforce",
                    }
                ]

            }
        }
    };
</script>
