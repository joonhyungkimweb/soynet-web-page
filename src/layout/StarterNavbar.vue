<template>
      <nav class="navbar navbar-expand-lg bg-white fixed-top">
        <div class="container">
          <div class="navbar-translate">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#example-navbar-primary"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-bar bar1" />
              <span class="navbar-toggler-bar bar2" />
              <span class="navbar-toggler-bar bar3" />
            </button>
            <a
              class="navbar-brand"
              href="#pablo"
            >Creative Tim</a>
          </div>
          <div
            id="example-navbar-primary"
            class="collapse navbar-collapse"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="#pablo"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#pablo"
                >
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#pablo"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>



<script>
  import { DropDown, Navbar, NavLink } from '@/components';
  import { Popover } from 'element-ui'

  export default {
    name: 'MainNavbar',
    components: {
      DropDown,
      Navbar,
      NavLink,
      [Popover.name]: Popover
    }
  }
</script>

<style scoped>

</style>
