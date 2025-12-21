<template>
    <Navbar />

    <Hero/>

    <Portfolio/>
    <Skills/>
    <Contact/>
    

  
</template>

<script>
import Hero from './components/Hero.vue';
import Portfolio from './components/Portfolio.vue';
import Navbar from './components/Navbar.vue';
import Contact from './components/Contact.vue';
import Skills from './components/Skills.vue';
export default {
  name: 'App',
  components: {
    Hero,
    Portfolio,
    Navbar,
    Skills,
    Contact
  }
}
</script>
<style>
  


</style>