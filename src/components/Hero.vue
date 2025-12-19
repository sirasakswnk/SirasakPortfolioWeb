<template>
  <div class="Hero" id="Hero">
    <!-- 🔥 BACKGROUND TEXT -->
    <div class="bg-text">
      <div class="bg-marquee marquee-right">
        <span>SOFTWARE DEVELOPER · FRONTEND · CS STUDENT · </span>
        <span>SOFTWARE DEVELOPER · FRONTEND · CS STUDENT · </span>
      </div>

      <div class="bg-marquee marquee-left">
        <span>VUE · JAVASCRIPT · PORTFOLIO · INTERNSHIP · </span>
        <span>VUE · JAVASCRIPT · PORTFOLIO · INTERNSHIP · </span>
      </div>
    </div>

    <div class="avatar-wrapper">
      <img v-for="(img, index) in images" :key="index" :src="img" class="floating-icon" :style="iconStyle(index)"
        ref="icons" />


      <img src="@/assets/photo/profile1.jpg" class="main-avatar" alt="profile" />
    </div>

    <div class="text-content">
      <h1 class="name gradient-text">{{ student.name }}</h1>

      <p class="subtitle glass">
        Computer Science Student · Internship Portfolio
      </p>

      <!--ACTION BUTTONS-->
      <div class="action-buttons">
  <a class="btn github magnetic" href="https://github.com/sirasakswnk" target="_blank">
    <img src="/icons/github.svg" class="btn-icon" />
    GitHub
  </a>

  <a class="btn linkedin magnetic" href="https://www.linkedin.com/in/sirasak-suwannakoed-0572ab398/" target="_blank">
    <img src="/icons/linkedin.svg" class="btn-icon" />
    LinkedIn
  </a>

  <a class="btn resume magnetic" href="/resume.pdf" target="_blank">
    <img src="/icons/file-user.svg" class="btn-icon" />
    Resume
  </a>
</div>


    </div>
    
  </div>
</template>

<script>
import click from "@/assets/photo/click.jpg";
import cloud from "@/assets/photo/cloud.jpg";
import database from "@/assets/photo/database.jpg";
import code from "@/assets/photo/code.jpg";

export default {
  name: "Hero",
  data() {
    return {
      student: {
        name: "Sirasak Suwannakoed",
      },
      images: [click, cloud, database, code],
      lastScrollY: 0,
      rotation: 0,
    };
  },
  methods: {
    iconStyle(index) {
      const positions = [
        { top: "10px", left: "-25px" },     // click
        { top: "110px", right: "-30px" },    // cloud
        { bottom: "-50px", left: "-30px" },  // database
        { bottom: "-150px", right: "-50px" },   // code
      ];
      return {
        animationDelay: `${index * 0.4}s`,
        ...positions[index],
      };
    },

    handleScroll() {
      const currentScroll = window.scrollY;
      const delta = currentScroll - this.lastScrollY;

      this.rotation += delta * 0.2;

      this.$refs.icons?.forEach((icon) => {
        icon.style.transform = `rotate(${this.rotation}deg)`;
      });

      this.lastScrollY = currentScroll;
    }
    ,
  },
  mounted() {
  window.addEventListener("scroll", this.handleScroll);

  const magnets = document.querySelectorAll(".magnetic");

  magnets.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)";
    });
  });
},
beforeUnmount() {
  window.removeEventListener("scroll", this.handleScroll);
},

};
</script>

<style scoped>

  .magnetic {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

/* =========================
   🧠 BACKGROUND MARQUEE TEXT
========================= */
.bg-text {
  margin-bottom: 100px;
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: auto;
  cursor: default;
}

.bg-marquee {
  position: absolute;
  display: flex;
  width: max-content;
  font-size: 120px;
  font-weight: 800;
  opacity: 0.07;
  color: #ffffff;
  white-space: nowrap;
  letter-spacing: 8px;
}

/* บรรทัดบน → ไปขวา */
.marquee-right {
  top: 28%;
  animation: marqueeRight 30s linear infinite;
  animation-duration: 45s;
}

/* บรรทัดล่าง → ไปซ้าย */
.marquee-left {
  top: 48%;
  animation: marqueeLeft 32s linear infinite;
  animation-duration: 50s;
}

.bg-marquee span {
  padding-right: 60px;
}

.bg-text:hover .bg-marquee {
  animation-play-state: paused;
  opacity: 0.12;
}

/* =========================
   ✨ TEXT CONTENT (MODERN)
========================= */
.text-content {
  top: 70px;
  position: relative;
  z-index: 3;
  margin-top: 120px;
  text-align: center;
}

.name {
  font-size: clamp(2.6rem, 5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 12px;
  animation: fadeUp 1.2s ease forwards;

  background: linear-gradient(90deg,
      #fff7b0,
      #ffd84d,
      #ffb703);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  animation: fadeUp 1.2s ease forwards, gradientMove 6s linear infinite;
}

.subtitle:hover {
  transform: scale(1.03);
  transition: transform 0.3s ease;
}

/* ---------- SUBTITLE ---------- */
.subtitle {
  font-size: 1.05rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  animation: fadeUp 1.4s ease forwards;
  opacity: 0.9;
}

/* Glass style */
.glass {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

/* Hover interaction */
.text-content:hover .glass {
  background: rgba(255, 255, 255, 0.18);
}




/* =========================
   PURPLE MODERN THEME
========================= */
.Hero {
  position: relative; 
  min-height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #8e2de2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;

}

/* =========================
   AVATAR
========================= */
.avatar-wrapper {

  transform: translateY(-50px) scale(1.05);
  position: relative;
  width: 320px;
  height: 320px;
  margin-bottom: 20px;
  bottom: -70px;
  left: -20px;
}

.main-avatar {
  width: 600px;
  height: auto;
  object-fit: contain;
  z-index: 2;
  position: relative;
  animation: popIn 1s ease forwards;
  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.25));
  left: -155px;
  top: -210px;
}


.floating-icon {
  width: 60px;
  height: 60px;
  position: absolute;
  opacity: 0;
  z-index: 1;
  animation: floatOut 1s ease forwards;
  transition: transform 0.25s ease-out;
  filter: drop-shadow(0 8px 15px rgba(0, 0, 0, 0.25));
}


/* =========================
   🔘 ACTION BUTTONS
========================= */
.action-buttons {
  display: flex;
  gap: 18px;
  margin-top: 32px;
  justify-content: center;
  flex-wrap: wrap;
}

/* =========================
   🔘 BASE BUTTON
========================= */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 28px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);

  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease,
    background 0.35s ease;
}

/* =========================
   🎨 VARIANTS
========================= */
.btn.github {
  background: rgba(0, 0, 0, 0.45);
}

.btn.linkedin {
  background: rgba(10, 102, 194, 0.75);
}

.btn.resume {
  background: linear-gradient(
    135deg,
    #ffe066,
    #ffd84d,
    #ffb703
  );
  color: #2b1a00;
  font-weight: 600;
}

/* =========================
   ✨ ICON
========================= */
.btn-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  filter: brightness(0) invert(1);
}

.btn.resume .btn-icon {
  filter: none;
}

/* =========================
   🖱️ HOVER
========================= */
.btn:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.35);
}

.btn:hover .btn-icon {
  transform: translateX(4px);
}

/* =========================
   🌟 RESUME – SUBTLE GLOW
========================= */
.btn.resume {
  position: relative;
}

.btn.resume::after {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(
    120deg,
    rgba(255, 216, 77, 0.6),
    rgba(255, 216, 77, 0.1),
    rgba(255, 216, 77, 0.6)
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.btn.resume:hover::after {
  opacity: 1;
}


/* =========================
   🎬 ANIMATIONS
========================= */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientMove {
  to {
    background-position: 200% center;
  }
}

@keyframes popIn {
  from {
    transform: scale(0.7);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes floatOut {
  from {
    transform: scale(0.3);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes marqueeRight {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0%);
  }
}

@keyframes marqueeLeft {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-50%);
  }
}



@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 216, 77, 0.6);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(255, 216, 77, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 216, 77, 0);
  }
}
</style>
