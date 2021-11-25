<template>
    <div class="career-page">
        <div class="container">
            <div class="text-center">
                <h2 class="title">Join Our Team</h2>
    
                <p class="mb-4">
                    As a startup armed with specialized high-performance AI acceleration platform technologies, SOYNET offers a full range of AI-related business solutions. We look forward to collaborating with businesses from different sectors. Any inquiries on our technologies
                    and solutions or suggestions for collaboration are always welcome.
                </p>
                <img src="img/bg24.jpg">
            </div>
    
            <divider margin="6.5rem 0"></divider>
    
            <div class="text-center">
                <h2 class="title pt-0"> Our Benefits</h2>
    
                <div class="row">
                    <div class="col-md-4 py-3">
                        <card type="pricing" class="h-100">
                            <div class="icon icon-primary">
                                <i class="now-ui-icons business_bulb-63" />
                            </div>
                            <h3 class="card-title">
                                Self-Development
                            </h3>
                            <p class="card-description text-black">
                                Monthly provided credit points or cash for self-development
                            </p>
                        </card>
                    </div>
                    <div class="col-md-4 py-3">
                        <card type="pricing" class="h-100">
                            <div class="icon icon-primary">
                                <i class="now-ui-icons objects_spaceship" />
                            </div>
                            <h3 class="card-title">
                                Social Activities
                            </h3>
                            <p class="card-description text-black">
                                Support for leisure activities, including fitness and movies to boost teamwork
                            </p>
                        </card>
                    </div>
    
                    <div class="col-md-4 py-3">
                        <card type="pricing" class="h-100">
                            <div class="icon icon-primary">
                                <i class="now-ui-icons shopping_shop" />
                            </div>
                            <h3 class="card-title">
                                Family Day
                            </h3>
                            <p class="card-description text-black">
                                Permission to leave office early once a month with provided dinining fee
                            </p>
                        </card>
                    </div>
    
                    <div class="col-md-4 py-3">
                        <card type="pricing" class="h-100">
                            <div class="icon icon-primary">
                                <i class="now-ui-icons objects_diamond" />
                            </div>
                            <h3 class="card-title">
                                Holiday Gifts
                            </h3>
                            <p class="card-description text-black">
                                Provide gifts on personal anniversaries or national holidays
                            </p>
                        </card>
                    </div>
    
                    <div class="col-md-4 py-3">
                        <card type="pricing" class="h-100">
                            <div class="icon icon-primary">
                                <i class="now-ui-icons tech_laptop" />
                            </div>
                            <h3 class="card-title">
                                Equipment Support
                            </h3>
                            <p class="card-description text-black">
                                Provide essential equipment, including books and education programs, for self-development
                            </p>
                        </card>
                    </div>
    
                    <div class="col-md-4 py-3">
                        <card type="pricing" class="h-100">
                            <div class="icon icon-primary">
                                <i class="now-ui-icons health_ambulance" />
                            </div>
                            <h3 class="card-title">
                                Health Coverage
                            </h3>
                            <p class="card-description text-black">
                                Full health coverage to promote employees’ health
                            </p>
                        </card>
                    </div>
                </div>
            </div>
    
            <divider margin="6.5rem 0"></divider>
    
            <div class="text-center">
                <h2 class="title pt-0">
                    Open Positions
                </h2>
                <p class="mb-5">
                    Be part of Soynet, where we change the world through innovation.
                    <br> We are looking for highly passionate and motivated individuals.
                    <br> If that’s you, don’t hesitate to apply now!
                </p>
                <n-button class="btn-linkedin mb-5" size="lg" @click="toLinkedIn">
                    <h3 class="mb-0"><i class="fab fa-linkedin" /> Apply Now!</h3>
                </n-button>
    
            </div>
        </div>
    </div>
</template>
<script>
    import { Card, Button, Divider } from '@/components';

    export default {
        components: {
            Card,
            [Button.name]: Button,
            Divider
        },
        methods : {
            toLinkedIn(){
                window.open('https://kr.linkedin.com/company/soynet');
            }
        }
    }
</script>
<style scoped>
    .career-page {
        margin-top: 13vh;
    }
</style>
