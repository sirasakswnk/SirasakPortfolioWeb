<template>
  <section class="contact-section" id="Contact">
    <div class="contact-card">
      <h2 class="contact-title">Contact</h2>

      <p class="contact-desc">
        Interested in internship opportunities or collaboration.
        <br />
        Let’s get in touch.
      </p>

      <div class="contact-links">
        <!-- Email -->
        <button class="contact-item copy" :class="{ copied: copied.email }"
          @click="copy('sirasak.swnk@email.com', 'email')">
          <img :src="copied.email ? '/icons/check.svg' : '/icons/mail.svg'" class="icon" />
          {{ copied.email ? "Copied ✓" : "sirasak.swnk@email.com" }}
        </button>


        <!-- Phone -->
        <button class="contact-item copy" :class="{ copied: copied.phone }"
          @click="copy('0993699715', 'phone')">
          <img :src="copied.phone ? '/icons/check.svg' : '/icons/phone.svg'" class="icon" />
          {{ copied.phone ? "Copied ✓" : "0993699715" }}
        </button>


        <!-- LINE -->
        <button class="contact-item copy" :class="{ copied: copied.line }"
          @click="copy('taming31', 'line')">
          <img :src="copied.line ? '/icons/check.svg' : '/icons/line.svg'" class="icon" />
          {{ copied.line ? "Copied ✓" : "taming31" }}
        </button>

        <!-- GitHub -->
        <a href="https://github.com/sirasakswnk" target="_blank" class="contact-item">
          <img src="/icons/github.svg" />
          GitHub
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/sirasak-suwannakoed-0572ab398/" target="_blank" class="contact-item">
          <img src="/icons/linkedin.svg" />
          LinkedIn
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/mingmx._/" target="_blank" class="contact-item">
          <img src="/icons/instagram.svg" />
          Instagram
        </a>
      </div>
    </div>

    <p class="footer-text">© 2025 Sirasak · Portfolio</p>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      copied: {
        email: false,
        phone: false,
        line: false,
      },
    };
  },
  methods: {
    copy(text, type) {
      // copy (รองรับ browser เก่า)
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      // inline feedback
      this.copied[type] = true;

      setTimeout(() => {
        this.copied[type] = false;
      }, 1500);
    },
  },
};
</script>

<style scoped>
.contact-section {
  min-height: 80vh;
  background: linear-gradient(135deg, #0f172a, #020617);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  color: #e5e7eb;
}


.contact-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  border-radius: 24px;
  padding: 48px 40px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}


.contact-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.contact-desc {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.85;
  margin-bottom: 36px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-item {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 12px 20px;
  border-radius: 999px;
  color: #e5e7eb;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.contact-item img {
  width: 20px;
  height: 20px;
  filter: invert(1);
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}


.footer-text {
  margin-top: 50px;
  font-size: 0.85rem;
  opacity: 0.55;
}

.contact-item.copied {
  background: rgba(34, 197, 94, 0.18);
  /* green glass */
  border-color: rgba(34, 197, 94, 0.6);
  color: #bbf7d0;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6);
  animation: pulseGlow 0.6s ease;
}

/* icon animation */
.contact-item.copied .icon {
  animation: pop 0.4s ease;
}

/* =========================
   ANIMATIONS
========================= */
@keyframes pop {
  0% {
    transform: scale(0.6) rotate(-10deg);
    opacity: 0;
  }

  60% {
    transform: scale(1.15) rotate(0deg);
    opacity: 1;
  }

  100% {
    transform: scale(1);
  }
}

@keyframes pulseGlow {
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6);
  }

  100% {
    box-shadow: 0 0 0 12px rgba(34, 197, 94, 0);
  }
}
</style>
