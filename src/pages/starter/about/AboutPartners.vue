<template>
    <div class="container">
        <h2 class="mt-5 mb-4 font-weight-bold text-center">Customers</h2>
        <div class="row justify-content-center mb-5">
            <div class="logo-container col-3 text-center" v-for="partner in partnerImages">
                <img :src="partner" class="partner-logo">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .partner-logo {
        height: 100%;
        object-fit: scale-down;
    }

    .logo-container {
        height: 200px;
        flex-grow : 0;
    }
</style>

<script>
    import { Card } from '@/components';
    import { Button } from '@/components';

    export default {
        components: {
            Card,
            [Button.name]: Button,
        },
        data() {
            return {
                partnerImages: ['img/partners/kigam.png', 'img/partners/saltlux.png', 'img/partners/hundaiSteel.jpg', 'img/partners/posco.jpg']
            }
        }
    }
</script>