<template>
    <Navbar />

    <Hero/>

    <Portfolio/>
    
    <Contact/>
    

  
</template>

<script>
import Hero from './components/Hero.vue';
import Portfolio from './components/Portfolio.vue';
import Navbar from './components/Navbar.vue';
import Contact from './components/Contact.vue';
export default {
  name: 'App',
  components: {
    Hero,
    Portfolio,
    Navbar,
    Contact
  }
}
</script>
<style>
  


</style>