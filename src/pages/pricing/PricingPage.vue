<template>
  <div class="wrapper pricing">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg37.jpg')"
      />
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h1 class="title">
              Let's get started
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="pricing-4">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h4>
                Downloadable package with temporary license key.
              </h4>
              <p>
                For selected common models: Free license.
              </p>
              <p>
                For latest popular and custom models: 7 day free license.
              </p>
              <p>
                Buy perpetual license post 7 days.
              </p>
    
              <div class="section-space" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <card type="pricing" plain>
                <h6 class="category">
                  Indivisuals
                </h6>
                <div class="icon icon-info">
                  <i class="now-ui-icons business_briefcase-24" />
                </div>
                <h3 class="card-title">
                  free
                </h3>
                <ul>
                  <li>Basic Optimization level</li>
                  <li>Up to 5 model Usage</li>
                  <li>CPU and GPU</li>
                  <li>No support</li>
                </ul>
                <n-button type="info" class="disabled" round>Free</n-button>
              </card>
            </div>
            <div class="col-md-4">
              <card type="pricing" color="black">
                <h6 class="category">
                  Professional
                </h6>
                <div class="icon icon-success">
                  <i class="now-ui-icons tech_headphones" />
                </div>
                <h3 class="card-title">
                  <small>$</small> 15 <small>/month</small>
                </h3>
                <ul>
                  <li>Full optimization level</li>
                  <li>Up to 10 model usage</li>
                  <li>Any Hardware</li>
                  <li>Basic support</li>
                </ul>
                <n-button type="warning" round class="disabled">
                  Contact Us
                </n-button>
              </card>
            </div>
            <div class="col-md-4">
              <card type="pricing" plain>
                <h6 class="category">
                  Premium
                </h6>
                <div class="icon icon-danger">
                  <i class="now-ui-icons design_palette" />
                </div>
                <h3 class="card-title">
                  Contact Us
                </h3>
                <ul>
                  <li>Unlimied model usage</li>
                  <li>Any hardware & Any framework</li>
                  <li>Custom functions</li>
                  <li>Extended Support</li>
                </ul>
                <n-button type="danger" round class="disabled">
                  Contact Us
                </n-button>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, Button, InfoSection, FormGroupInput, Checkbox } from '@/components';

  export default {
    name: 'PricingPage',
    bodyClass: 'pricing',
    components: {
      Card,
      InfoSection,
      [Button.name]: Button,
      [Checkbox.name]: Checkbox,
      [FormGroupInput.name]: FormGroupInput
    }
  }
</script>
<style scoped>
  .disabled {
    color : #FFFFFF;
    opacity : 0.5 !important;
  }
  
  p {
    color : #000000 !important;
  }
</style>
