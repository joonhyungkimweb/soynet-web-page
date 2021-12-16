<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small">
      <parallax class="page-header-image" style="background-image: url('img/bg24.jpg')" />
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">
              Korean Government
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h3>State</h3>
            <ul>
              <li>
                10 TB data accumulating daily
              </li>
              <li>
                Batch job every hour to detect hacking patterns
              </li>
              <li>
                High end class 100 GPUs already deployed
              </li>
            </ul>
            <h3>Problems</h3>
            <ul>
              <li>
                AI model consumes 90% of GPUs  
              </li>
              <li>
                Slow (needs real-time)   
              </li>
            </ul>
            <h3>Result</h3>
            <ul>
              <li>
                Korean government saves $1M by deploying SoyNet 
              </li>
            </ul>
          </div>
          
          <div class="col-md-6 ml-auto mr-auto">
            <img src="img/soynet/koreangovernment.png">
            <a href="https://www.bbc.co.uk/search?q=lazarus+heist" class="ml-2">
              https://www.bbc.co.uk/search?q=lazarus+heist
            </a>
          </div>
  
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    bodyClass: 'case-study-post',
  }
</script>
<style scoped>
  p {
    color: #000000 !important;
  }
</style>
