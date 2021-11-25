<template>
  <footer
    class="footer"
    :class="{[`footer-${type}`]: type}"
    :data-background-color="backgroundColor"
  >
    
    <div class="container">
      <h6 class="text-center"> Connect with us</h6>
          <div class="row w-50 mx-auto">
            <div class="col-4 text-center">
              <n-button class="btn-icon btn-round btn-facebook" @click="openLink('https://www.facebook.com/soynet.io/')">
                <i class="fab fa-facebook" />
              </n-button>
            </div>
            <div class="col-4 text-center">
              <n-button class="btn-icon btn-round btn-linkedin" @click="openLink('https://kr.linkedin.com/company/soynet')">
                <i class="fab fa-linkedin" />
              </n-button>
            </div>
            <div class="col-4 text-center">
              <n-button class="btn-icon btn-round btn-youtube" @click="openLink('https://www.youtube.com/channel/UC1BESOUWv1wqSByyCDwG0Bg')">
                <i class="fab fa-youtube" />
              </n-button>
            </div>
          </div>
    </div>
  </footer>
</template>
<script>
  import { Button } from '@/components';

  export default {
    components: {
      [Button.name]: Button
    },
    props: {
      backgroundColor: String,
      type: String
    },
    data() {
      return {
        year: new Date().getFullYear()
      }
    },
    methods: {
      openLink(url) {
        window.open(url);
      }
    }
  }
</script>
<style scoped>
</style>
