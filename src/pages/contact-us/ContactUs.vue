<template>
  <div class="wrapper contact-page">
    
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg45.jpg')"
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
                  Open today <span class="text-primary">09:00 am - 05:00 pm</span>
                </p>
              </info-section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Button, InfoSection, FormGroupInput, Divider } from '@/components';
  
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
      }
    }
  }
</script>
<style scoped>
  .disabled {
    opacity : 0.5 !important;
  }
</style>

<style>
  .icon-disabled{
    background-color : #E3E3E3 !important;
  }
</style>
