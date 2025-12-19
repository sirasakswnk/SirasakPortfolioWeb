<template>
  <nav class="navbar">
    <div class="profile-container">
      <img src="../assets/photo/profileicon.jpg" alt="Profile" class="profile-pic" />
      <h1 style="font-family: niramit;">Mingmings</h1>
    </div>
    <ul>
      <li>
        <a href="#Hero" class="nav-link">About me</a>
      </li>
      <li>
        <a href="#Portfolio" class="nav-link">Portfolio</a>
      </li>
      <li>
        <a href="#Contact" class="nav-link">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>  
export default {
  name: "Navbar",
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between; /* จัดให้โปรไฟล์ซ้าย เมนูขวา */
  background: transparent;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.3);
  z-index: 1000;
  transition: background 0.3s ease;
}

.profile-container {
  display: flex;
  align-items: center;
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%; /* ทำให้เป็นวงกลม */
  object-fit: cover;
  border: 3px solid white; /* เพิ่มกรอบ */
  margin-right: 15px; /* ขยับให้ห่างจากเมนู */
  transition: transform 0.3s ease;
}

/* 🎯 เอฟเฟกต์ Hover */
.profile-pic:hover {
  transform: scale(1.1) rotate(5deg);
}

ul {
  list-style: none;
  display: flex;
  gap: 30px;
  padding: 0;
  margin: 0;
}

li {
  font-size: 18px;
}

/* 🔥 Animation เวลา Hover */
.nav-link {
  text-decoration: none;
  color: #3498db;
  font-weight: bold;
  padding: 8px 15px;
  border-radius: 8px;
  transition: all 0.3s ease, transform 0.2s ease;
}

.nav-link:hover {
  background: rgba(52, 152, 219, 0.2);
  color: #2980b9;
  transform: scale(1.1);
}

.sticky {
  background: rgba(255, 255, 255, 0.9); /* Navbar ชัดขึ้นเมื่อเลื่อน */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
