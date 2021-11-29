<template>
  <div class="wrapper contact-page">
    
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/soynet/contact-us.jpg')"
      />
    </div>

    <div class="main">
      <div class="contact-content">
        <div class="container">
          <div class="row">
            <div class="col-md-5 ml-auto mr-auto">
              <h2 class="title">
                Send us a message
              </h2>
              <p class="description">
                You can contact us with anything related to our Products. We'll get
                in touch with you as soon as possible.
                <br>
                <br>
              </p>
              <form
                id="contact-form"
                role="form"
                method="post"
              >
                <label>Your name</label>
                <fg-input
                  v-model="form.firstName"
                  placeholder="Your Name..."
                  addon-left-icon="now-ui-icons users_circle-08 icon-disabled"
                  disabled
                />

                <label>Email address</label>
                <fg-input
                  v-model="form.email"
                  placeholder="Email Here..."
                  addon-left-icon="now-ui-icons users_circle-08 icon-disabled"
                  disabled
                />
                <label>Phone</label>

                <fg-input
                  v-model="form.phone"
                  placeholder="Number Here..."
                  addon-left-icon="now-ui-icons tech_mobile icon-disabled"
                  disabled
                />

                <div class="form-group">
                  <label>Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    class="form-control"
                    rows="6"
                    disabled
                  />
                </div>
                <div class="submit text-center">
                  <n-button
                    type="primary"
                    round
                    class="disabled"
                  >
                    Send
                  </n-button>
                </div>
              </form>
            </div>
            <div class="col-md-5 ml-auto mr-auto">
              <info-section type="primary" icon="now-ui-icons tech_mobile">
                <h4 class="info-title">
                  Even better if you come in person!
                </h4>
                <p>
                Join us on slack to know what's happending at Soynet
                </p>
                <div class="text-center">
                  <n-button class="mx-auto">Join Us on Slack</n-button>
                </div>
              </info-section>

              <info-section type="primary" icon="business_briefcase-24 now-ui-icons">
                <h4 class="info-title">
                  Feel Free to Visit our branch
                </h4>
                <p>
                  <strong>Open today <span class="text-primary">09:00 am - 05:00 pm</span></strong>
                </p>
                <h6 class="text-black">
                  Head Office 
                </h6>
                <p>
                  34, Hwangsaeul-ro 200beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea (13595)
                </p>
                
                <h6 class="text-black">
                  Pangyo Office
                </h6>
                <p>
                  5GLab, 1-dong, 20, Pangyo-ro 289beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea (13488)
                </p>
              </info-section>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <gmap-map
      id="map"
      class="big-map"
      :center="center"
      :zoom="16"
      :options="options"
      map-type-id="roadmap"
    >
      <gmap-marker :position="center" />
    </gmap-map>
  </div>
</template>
<script>
  import { Button, InfoSection, FormGroupInput, Divider } from '@/components';
  
  import {API_KEY} from '@/constants'
  import Vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps'
  Vue.use(VueGoogleMaps, {
    load: {
      key: API_KEY
    }
  });
  
  export default {
    
    components: {
      InfoSection,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
      Divider
    },
    data() {
      return {
        form: {
          firstName: '',
          email: '',
          phone: ''
        },
        center: {
          lat: 37.37728009159633,
          lng: 127.11381831175966
        },
        options: {
          styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e9e9e9"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 29
            }, {
              "weight": 0.2
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 18
            }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 21
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dedede"
            }, {
              "lightness": 21
            }]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "visibility": "on"
            }, {
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [{
              "saturation": 36
            }, {
              "color": "#333333"
            }, {
              "lightness": 40
            }]
          }, {
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f2f2f2"
            }, {
              "lightness": 19
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 17
            }, {
              "weight": 1.2
            }]
          }]

        }
      }
    }
  }
</script>
<style scoped>
  .disabled {
    opacity : 0.5 !important;
  }
  
  p{
    color : #000000 !important;
  }
</style>

<style>
  .icon-disabled{
    background-color : #E3E3E3 !important;
  }
</style>
