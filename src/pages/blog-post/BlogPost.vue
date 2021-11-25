<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg24.jpg')"
      />
    <back-to-home></back-to-home>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">
              Artificial intelligence
            </h2>
            <h4>{{ new Date('2021-11-25').toLocaleDateString('en-US', { month: 'long', year : 'numeric', day : '2-digit' }) }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h3 class="title">
                Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans.
              </h3>
              <p>
                Leading AI textbooks define the field as the study of "intelligent agents"
              </p>
              <p class="blockquote blockquote-primary">
                Any system that perceives its environment and takes actions that maximize its chance of achieving its goals.
              </p>
              <p>
                Some popular accounts use the term "artificial intelligence" to describe machines that mimic "cognitive" functions that humans associate with the human mind, such as "learning" and "problem solving", however, this definition is rejected by major AI researchers.
              </p>
            </div>
            <div class="col-md-8 ml-auto mr-auto">
              <p>
                AI applications include advanced web search engines (e.g., Google), recommendation systems (used by YouTube, Amazon and Netflix), understanding human speech (such as Siri and Alexa), self-driving cars (e.g., Tesla), automated decision-making and competing at the highest level in strategic game systems (such as chess and Go). As machines become increasingly capable, tasks considered to require "intelligence" are often removed from the definition of AI, a phenomenon known as the AI effect. For instance, optical character recognition is frequently excluded from things considered to be AI, having become a routine technology.
              </p>
              <p>
                Artificial intelligence was founded as an academic discipline in 1956, and in the years since has experienced several waves of optimism, followed by disappointment and the loss of funding (known as an "AI winter"), followed by new approaches, success and renewed funding. AI research has tried and discarded many different approaches since its founding, including simulating the brain, modeling human problem solving, formal logic, large databases of knowledge and imitating animal behavior. In the first decades of the 21st century, highly mathematical statistical machine learning has dominated the field, and this technique has proved highly successful, helping to solve many challenging problems throughout industry and academia. The various sub-fields of AI research are centered around particular goals and the use of particular tools. The traditional goals of AI research include rea
                
              </p>
              
              <p>
                language processing, perception, and the ability to move and manipulate objects. General intelligence (the ability to solve an arbitrary problem) is among the field's long-term goals. To solve these problems, AI researchers have adapted and integrated a wide range of problem-solving techniques -- including search and mathematical optimization, formal logic, artificial neural networks, and methods based on statistics, probability and economics. AI also draws upon computer science, psychology, linguistics, philosophy, and many other fields.
              </p>
              
              <p>
                The field was founded on the assumption that human intelligence "can be so precisely described that a machine can be made to simulate it". This raises philosophical arguments about the mind and the ethics of creating artificial beings endowed with human-like intelligence. These issues have been explored by myth, fiction, and philosophy since antiquity. Science fiction and futurology have also suggested that, with its enormous potential and power, AI may become an existential risk to humanity.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { BackToHome,} from '@/components';

  export default {
    bodyClass: 'blog-post',
    components : {
      BackToHome
    }
  }
</script>
<style>
</style>
