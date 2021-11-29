<template>
    <div class="career-page">
        <div class="page-header page-header-small">
            <parallax class="page-header-image" style="background-image: url('img/soynet/career.jpg')" />
            <back-to-home></back-to-home>
        </div>
    
        <div class="container mb-5">
            <div class="text-center">
                <h1 class="title mb-5">
                    Join Us
                </h1>
                <p class=" blockquote blockquote-primary">
                    At SOYNET we thrive towards becoming leader in the inference accelerator market and hence we encourage talent who can resonate with similar passion. We strive towards maintaining equal opportunity irrespective of nationality, color, gender, sexual orientation
                    etc. as talent is foremost important for us.
                </p>
            </div>
            <divider margin="6.5rem 0"></divider>
        
            <div class="text-center">
                <h2 class="title pt-0">
                    Open Positions
                </h2>
                <p>
                    Following are the current opening for us.
                </p>
                <p>
                    Feel free to drop us an email : <strong>hr@soynet.io</strong>
                </p>
        
                <divider margin="3rem 0"></divider>
        
                <h3>
                    <i class="now-ui-icons ui-2_settings-90 text-primary"></i> Technical
                </h3>
                <h4>
                    AI researcher
                </h4>
                <p>
                    Computer Vision Analytics, NLP, Time Series Processing.
                </p>
        
                <h4>
                    Software Developer(Full Stack)
                </h4>
                <p>
                </p>
                <p>
                    Preferred Qualification: C++/C, CUDA, cuDNN, TensorRT, openCL, oneDNN.
                </p>
        
                <divider margin="3rem 0"></divider>
        
                <h3>
                    <i class="now-ui-icons business_briefcase-24 text-primary"></i> Business management
                </h3>
                <h4>
                    Digital Marketing Manager (Korean)
                </h4>
                <p>
                    Preferred Qualification: SEO, SEM, B2B marketing experience.
                </p>
        
                <h4>
                    Account Manager
                </h4>
                <p>
                    Preferred sales experience in IT industry.
                </p>
        
                <h4>
                    Pre-sales engineer
                </h4>
                <p>
                    Preferred pre-sales experience.
                </p>
        
            </div>
        </div>
    </div>
</template>
<script>
    import { Card, Button, Divider, BackToHome } from '@/components';

    export default {
        components: {
            Card,
            [Button.name]: Button,
            BackToHome,
            Divider
        },
        methods : {
        }
    }
</script>
<style scoped>
    
    p {
        color : #000000 !important
    }
</style>
