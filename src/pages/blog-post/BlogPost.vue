<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small">
      <parallax class="page-header-image" style="background-image: url('img/bg24.jpg')" />
      <back-to-home></back-to-home>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">
              AI execution & Accelerator Market
            </h2>
            <h4>{{ new Date('2021-11-25').toLocaleDateString('en-US', { month: 'long', year : 'numeric', day : '2-digit' }) }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <p>
              Energy efficiency and model execution on compact devices are the two primary drivers of the artificial intelligence accelerator industry. Today, the processing power required to learn ten zip codes in three days is equivalent to a compact laptop with
              a 1060 GTX GPU, and computers take 20 to 30 seconds. However, in reality, we still have computing environment restrictions.
            </p>
  
            <p>
              In general, we view around 30 frames per second of the world. As a result, it is critical to determine if artificial intelligence processes 30 frames of visual data during image processing. However, in reality, existing artificial intelligence models
              consume a large amount of memory and are limited to 30 frames when simulating the process of identifying and categorizing items as humans do.
            </p>
            <p>
              While there is nothing we cannot accomplish with massive quantities of processing power, this remains a barrier to utilizing artificial intelligence. To begin with, the first is the computational framework. Our computer's processing unit uses a von Neumann
              topology to process commands sequentially.
            </p>
          </div>
  
          <div class="col-12">
            <divider margin="3rem" />
          </div>
  
          <div class="col-md-8 ml-auto mr-auto">
            <p>
              It is challenging to manage the matrix product of massive artificial intelligence models with CPUs since commands are processed sequentially. GPUs that analyze visual images in parallel were the first to garner attention in the field of artificial intelligence
              The GPU suffer from high energy consumption as parallel computing processors rather than neural networks like humans. As a result, the current computer system is incompatible with artificial intelligence.
            </p>
          </div>
          <div class="col-md-8 ml-auto mr-auto">
            <p>
              Second, since we are unfamiliar with the way our brains function, artificial intelligence is based on neural networks, which is a relatively simple concept that mimics how people learn and infer. Humans contain between 80 billion and 100 billion neurons
              and up to 100 trillion synapses. The total number of connections (synapses) in the galaxy equals the total number of stars. What's more astonishing is that the energy required to activate and infer these neurons is just around 20 watts (a
              rice dinner). Still, AlphaGo, which battled Lee Se-dol in Go, consumes the same amount of power as 12 GW with 1,920 CPUs and 280 GPUs to emulate only 100,000 neurons. As such, an artificial intelligence model that disregards energy efficiency
              is unsustainable.
            </p>
            <p>
  
              The third important factor is the current artificial intelligence framework structure. Artificial intelligence makes use of the number Weight, which refers to the notion of transmitting information by changing the strength of synapses' connections. To
              determine the best value of the weights , the process of modifying weights is repeated by distinguishing the difference between the resulting value and the label value obtained using backpropagation artificial intelligence. Learning is the
              process of matching the input value to the label value in this manner.
            </p>
          </div>
  
          <div class="col-12">
            <divider margin="3rem" />
          </div>
  
          <div class="col-md-8 ml-auto mr-auto">
            <p class="blockquote blockquote-primary">
              SoyNet ensures customer satisfaction and cost effectiveness at the point of sale by enhancing speed by factor of 3 and decreasing memory consumption by factor of 9 in image processing and NLP.
            </p>
            <p>
              Because the learned artificial intelligence model is optimized for Weight, it can be extended to the field and implemented using just forward inference. These models are applied on artificial intelligence frameworks such as TensorFlow. It will work on
              modules required for inference and on devices with limited memory, such as edge devices, as unnecessary modules used for learning are loaded into memory and occupy it. SoyNet Co., Ltd., which recently established the artificial intelligence
              accelerator market to address unmet demands in the artificial intelligence market, is bolstering its sales force among significant enterprises investing more in the AI sector.
            </p>
            <p>
              Fundamentally, artificial intelligence is activated by increasing the efficiency of both learning and thinking by imitating human neurons and synapses. However, several technological obstacles remain in the way of reaching this level. Intel intends to
              build 100 billion synapses by 2019 using Loihi, a neuromorphic artificial intelligence processor that emulates human brain networks. In comparison, cats have a cerebral cortex connected to the rest of the brain by 6.1 trillion synapses. Human
              synapses are estimated to be over 100 trillion won, and mounting this level of synapses has so many technological obstacles that the next 30 to 50 years appear challenging.
            </p>
  
            <p>
              As the focal point of the Fourth Industrial Revolution, the desire to deploy artificial intelligence will grow, as will the market's demand for more affordable and lightweight implementation.
            </p>
          </div>
          <div class="col-12">
            <divider margin="3rem" />
          </div>
  
          <div class="col-md-8 ml-auto mr-auto">
            <p>
              Soon, tiny devices can be implanted with inference models learned from cloud-based artificial intelligence servers, assisting humans in the field, and unlearned events will be relayed back to the learning server, resulting in continuous machine learning.
            </p>
            <p>
              While artificial intelligence models are individualized as they learn from their own data, they can be modified at any moment to improve their quality. As a result, hardware-based inference accelerators that support only a subset of AI models are highly
              susceptible in this regard. If you're considering an artificial intelligence inference model accelerator, you should examine the model's life cycle and scalability.
            </p>
            <p>
              Nonetheless, when it becomes impossible to match the field's requirements, software-based accelerators are predicted to act like seasonings in bland food. This is because inference accelerators such as Soynet accelerate and optimize memory usage on a
              hardware level and have a more straightforward
            </p>
          </div>
          
          <div class="col-md-8 ml-auto mr-auto">
            <p class="blockquote blockquote-primary">
              SoyNet is configured in a Plug-In manner and supports a variety of models, allowing anybody to utilize the artificial intelligence inference model simply. Additionally, TensorRT offers Variant LSTM or Parallel NMS, which TensorRT does not currently support. Anybody may benefit from the most outstanding performance indicators by leveraging the SoyNet inference model accelerator, which varies based on the skills of artificial intelligence developers.
            </p>
          </div>
          
  
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { BackToHome, Divider } from '@/components';

  export default {
    bodyClass: 'blog-post',
    components: {
      BackToHome,
      Divider
    }
  }
</script>
<style scoped>
  p {
    color: #000000 !important;
  }
</style>
