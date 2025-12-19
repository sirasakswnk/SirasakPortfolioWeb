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
        <!-- Email (COPY) -->
        <button class="contact-item copy" @click="copyToClipboard('sirasak.swnk@email.com')">
          <img src="/icons/mail.svg" />
          sirasak.swnk@email.com
          <span class="copy-hint">Click to copy</span>
        </button>

        <!-- Phone (COPY) -->
        <button class="contact-item copy" @click="copyToClipboard('0993699715')">
          <img src="/icons/phone.svg" />
          099-369-9715
          <span class="copy-hint">Click to copy</span>
        </button>

        <!-- LINE (COPY) -->
        <button class="contact-item copy" @click="copyToClipboard('taming31')">
          <img src="/icons/line.svg" />
          taming31
          <span class="copy-hint">Click to copy</span>
        </button>

        <!-- GitHub -->
        <a href="https://github.com/USERNAME" target="_blank" class="contact-item">
          <img src="/icons/github.svg" />
          GitHub
        </a>

        <!-- LinkedIn -->
        <a href="https://linkedin.com/in/USERNAME" target="_blank" class="contact-item">
          <img src="/icons/linkedin.svg" />
          LinkedIn
        </a>

        <!-- Instagram -->
        <a href="https://instagram.com/USERNAME" target="_blank" class="contact-item">
          <img src="/icons/instagram.svg" />
          Instagram
        </a>
      </div>
    </div>

    <p class="footer-text">© 2025 Sirasak · Portfolio</p>

    <Teleport to="body">
      <div class="toast" v-if="toast.show">
        {{ toast.message }}
      </div>
    </Teleport>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      toast: {
        show: false,
        message: "",
        timeout: null,
      },
    };
  },
  methods: {
    async copyToClipboard(text) {
      // 🔒 ถ้า browser รองรับ Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
          this.showToast("Copied to clipboard ✓");
        } catch (err) {
          this.fallbackCopy(text);
        }
      } else {
        // ❗ fallback สำหรับ http / browser เก่า
        this.fallbackCopy(text);
      }
    },

    fallbackCopy(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        document.execCommand("copy");
        this.showToast("Copied to clipboard ✓");
      } catch (err) {
        this.showToast("Copy not supported");
      }

      document.body.removeChild(textarea);
    },

    showToast(message) {
  console.log("SHOW TOAST"); // 👈 เพิ่มบรรทัดนี้

  this.toast.message = message;
  this.toast.show = true;

  // ❌ คอมเมนต์ timeout ออกก่อน
  // this.toast.timeout = setTimeout(() => {
  //   this.toast.show = false;
  // }, 2000);
},
  },

};
</script>

<style scoped>
/* =========================
   📞 CONTACT SECTION
========================= */
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

/* =========================
   🧊 GLASS CARD
========================= */
.contact-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 24px;
  padding: 48px 40px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

/* =========================
   ✨ TEXT
========================= */
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

/* =========================
   🔗 LINKS
========================= */
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
  position: relative;
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

/* copy hint */
.copy-hint {
  position: absolute;
  right: 16px;
  font-size: 0.7rem;
  opacity: 0.5;
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

/* =========================
   FOOTER
========================= */
.footer-text {
  margin-top: 50px;
  font-size: 0.85rem;
  opacity: 0.55;
}
</style>
