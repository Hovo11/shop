<template>
  <div id="app">
    <Header />

<router-view/>
    <Footer/>
  </div>

</template>

<script>
  import Vue from 'vue';
  import BootstrapVue from 'bootstrap-vue';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import Header from "./components/Global/Header";
  import Footer from "./components/Global/Footer";
  Vue.use(BootstrapVue);
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {

  },
  components:{Header,
    Footer
  }
}
</script>

<style>
#app {
font-family: "Droid Sans";
}
</style>
