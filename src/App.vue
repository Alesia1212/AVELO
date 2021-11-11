<template>
  <div>
    <Conteiner></Conteiner>
        
    <router-view/>

    <Footer></Footer>

    
  </div>
</template>

<script lang="ts">
import Conteiner from "./components/Conteiner.vue";
import Footer from "./components/Footer.vue";



//import $ from "jquery";


export default {
  name: "App",
  components: {
    Conteiner,
    Footer,
    
    
    
  },
  data() {
    return {
      projects: null,
    };
  },
  /*mounted() {
    // This will break one day
    // TODO: Use own API key
    const url =
        "https://www.behance.net/v2/users/visheshbansal/projects?client_id=ZLBxK9rEfHwJf9K0rmseNr2fS2gS2HJW";
    $.ajax({
      url: url,
      type: "get",
      data: {projects: {}},
      dataType: "jsonp",
    })
        .done((response) => {
          let data = [];
          let res = response.projects;
          console.log(response);
          for (let i = 0; i < res.length; i++) {
            data.push({
              src: res[i].covers.original,
              link: res[i].url,
              name: res[i].name,
            });
          }
          this.projects = data;
        })
        .fail((error) => {
          console.error(error);
        });
  },
  methods: {
    scrollToTop() {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    },
  }*/
};
  
</script>

<style>

</style>
