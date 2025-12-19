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
  html, body {
  overflow-x: hidden;
  overflow-y: auto;
}
/* =========================
   🔔 GLOBAL TOAST STYLE
========================= */
.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;

  padding: 14px 22px;
  border-radius: 14px;

  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;              /* 👈 ตัวหนังสือเข้ม */
  
  background: #facc15;         /* 👈 เหลืองชัด (match theme) */
  border: none;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
  /* animation: toastIn 0.35s ease forwards; */

  z-index: 99999;
}


@keyframes toastIn {
  from {
    opacity: 0;
    transform: translateY(15px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

</style>