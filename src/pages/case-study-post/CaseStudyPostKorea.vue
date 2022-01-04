<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg24.jpg')"
      />
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Medical Standard</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-12 ml-auto mr-auto">
            <ul>
              <li>
                <p>
                  Soynet Co. Ltd. entered into a business alliance with Medical
                  Standard, a strong player in the medical imaging market, and
                  combines Soynet 's artificial intelligence acceleration
                  technology with Medical Standard's domain expertise to
                  dramatically shorten the time of medical image processing.
                </p>
              </li>
              <li>
                <p>
                  We analyzed 1,263 lung X-ray photos submitted to the Kaggle
                  contest. SoyNet was significantly faster even though SoyNet
                  performs 32-bit operation and PyTorch performs 16-bit
                  operation
                </p>
              </li>
              <li>
                <h3>Result</h3>
                <h5>YoloV5 model</h5>
                <ul class="mb-5">
                  <li>SoyNet (32Bit) : 2 minutes 16 seconds</li>
                  <li>
                    Pytorch (16Bit) : 2 minutes 46 seconds Korean government
                    saves $1M by deploying SoyNet
                  </li>
                </ul>
                <h5>EfficientNet</h5>
                <ul>
                  <li>SoyNet: 1minute, 42 seconds</li>
                  <li>SoyNet (32Bit) : 2 minutes 16 seconds</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="col-12 mx-auto mt-5">
            <img src="img/soynet/medical.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  bodyClass: "case-study-post",
};
</script>
<style scoped>
p {
  color: #000000 !important;
}
h5 {
  font-weight: bold !important;
}
</style>
