<template>
  <header :class="['navbar', {
    shrink: isScrolled,
    'light-text': isLightMode
  }]">
    <div class="nav-container">
      <div class="logo" @click="scrollTo('Hero')">
        MyPortfolio
      </div>

      <nav class="nav-links">
        <a v-for="link in links" :key="link.id" :class="{ active: activeSection === link.id }"
          @click="scrollTo(link.id)">
          {{ link.label }}
        </a>
      </nav>

      <div class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <transition name="fade">
      <div class="mobile-menu" v-if="menuOpen">
        <a v-for="link in links" :key="link.id" :class="{ active: activeSection === link.id }"
          @click="scrollTo(link.id)">
          {{ link.label }}
        </a>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false,
      isScrolled: false,
      activeSection: "Home",
      isLightMode: false,
      links: [
        { id: "Hero", label: "Home" },
        { id: "Portfolio", label: "Certificates" },
        { id: "Skills", label: "Skills" },
        { id: "Contact", label: "Contact" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    scrollTo(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      this.menuOpen = false;
    },
    handleScroll() {
      const scrollY = window.scrollY;
      this.isScrolled = scrollY > 60;

      for (const link of this.links) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          this.activeSection = link.id;

          // 👇 ถ้าอยู่ใน Skills หรือ Contact → ใช้ฟอนต์ขาว
          this.isLightMode = ["Skills", "Contact"].includes(link.id);
          break;
        }
      }
    },
  },
};
</script>

<style scoped>

.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  max-width: 1200px;
  z-index: 1000;

  background: rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);

  transition: all 0.35s ease;
}

.navbar.shrink {
  top: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.navbar.shrink .nav-container {
  padding: 10px 22px;
}

.navbar.shrink .logo {
  font-size: 1.3rem;
}

.navbar.shrink .nav-links a {
  font-size: 0.95rem;
}


.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
}



.logo {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 0.4px;
  cursor: pointer;
  color: #2b1a00;
}

.nav-links {
  margin-left: 20px;
  display: flex;
  gap: 28px;
}

.nav-links a,
.mobile-menu a {
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: 650;
  color: #2b1a00;
  position: relative;
  transition: color 0.3s ease;
  text-decoration: none;
}

.nav-links a:hover,
.mobile-menu a:hover {
  color: #ffb703;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: #ffb703;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.active,
.mobile-menu a.active {
  color: #ffb703;
}

.nav-links a.active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.menu-toggle span {
  width: 22px;
  height: 2px;
  background: #2b1a00;
}

.mobile-menu {
  margin: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(16px);
  border-radius: 18px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}

.navbar.light-text {
  transition: background 0.4s ease, box-shadow 0.4s ease;
}

.navbar.light-text .logo,
.navbar.light-text .nav-links a,
.navbar.light-text .mobile-menu a {
  color: #ffffff;
}

.navbar.light-text .nav-links a:hover,
.navbar.light-text .mobile-menu a:hover {
  color: #ffd84d;
}

.navbar.light-text .nav-links a::after {
  background: #ffd84d;
}

.navbar.light-text .nav-links a.active,
.navbar.light-text .mobile-menu a.active {
  color: #ffd84d;
}

.navbar.light-text .menu-toggle span {
  background: #ffffff;
}

.navbar .logo,
.navbar .nav-links a,
.navbar .menu-toggle span {
  transition: color 0.35s ease, background-color 0.35s ease;
}

</style>
