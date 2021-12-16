<template>
  <div id="app">
    <router-view name="header"/>
    <div>
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<style>
  .centered-content {
    max-width: calc(100vmin + (100vw - 100vmin) / 2);
    margin : auto;
    padding : 0 15px;
  }
  
  .page {
    margin: calc(5vh + 70px) 0 5rem;
  }
</style>
<script>
  export default {}
</script>
