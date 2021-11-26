<template>
        <navbar type="white" menu-classes="ml-auto" class="z-index-high" position="fixed">
          <template slot-scope="{toggle, isToggled}">
              <div class="navbar-translate">
                <a class="navbar-brand" href="#/about"><img src="img/logo/soynet.png" height="24"></a>
              </div>
            </template>
          <template slot="navbar-menu">
              <li class="nav-item">
                <a class="nav-link" href="#/about">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/model-market">Model Market</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/partners">Partners</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/contact-us">Pricing</a>
              </li>
              <li class="nav-item">
                <drop-down tag="div">
                  <template #title>
                    <a class="dropdown-toggle nav-link" data-toggle="dropdown">
                      <span class="no-icon">SoyNet</span>
                    </a>
                  </template>
                  <a class="dropdown-item" href="#/blogs">Blogs</a>
                  <a class="dropdown-item" href="#/case-study">Case Study</a>
                  <a class="dropdown-item" href="#/career">Career</a>
                  <a class="dropdown-item" href="#/what-is-soynet">What is SoyNet</a>
                </drop-down>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/contact-us">Contact Us</a>
              </li>
              
            </template>
        </navbar>
</template>



<script>
  import { DropDown, Navbar } from '@/components';

  export default {
    name: 'MainNavbar',
    components: {
      DropDown,
      Navbar,
    }
  }
</script>

<style scoped>
.nav-link{
  color : black !important;
}

</style>
