<template>
  <section class="contact-section" id="Contact" tabindex="-1">
    <div class="contact-card">
      <h2 class="contact-title">Contact</h2>

      <p class="contact-desc">
        Interested in internship opportunities or collaboration.
        <br />
        Let’s get in touch.
      </p>

      <div class="contact-links">
        <!-- Email -->
        <button type="button" class="contact-item copy" :class="{ copied: copied.email }"
          aria-label="Copy email address: sirasak.swnk@email.com"
          :disabled="copying.email" :aria-busy="copying.email"
          @click="copy('sirasak.swnk@email.com', 'email')">
          <img :src="copied.email ? '/icons/check.svg' : '/icons/mail.svg'" class="icon" alt="" aria-hidden="true" />
          {{ copied.email ? "Copied ✓" : "sirasak.swnk@email.com" }}
        </button>
        <span class="sr-only" role="status" aria-atomic="true">{{ copied.email ? 'Email address copied.' : '' }}</span>
        <p v-if="copyErrors.email" class="copy-error" role="status">{{ copyErrors.email }}</p>


        <!-- Phone -->
        <button type="button" class="contact-item copy" :class="{ copied: copied.phone }"
          aria-label="Copy phone number: 0993699715"
          :disabled="copying.phone" :aria-busy="copying.phone"
          @click="copy('0993699715', 'phone')">
          <img :src="copied.phone ? '/icons/check.svg' : '/icons/phone.svg'" class="icon" alt="" aria-hidden="true" />
          {{ copied.phone ? "Copied ✓" : "0993699715" }}
        </button>
        <span class="sr-only" role="status" aria-atomic="true">{{ copied.phone ? 'Phone number copied.' : '' }}</span>
        <p v-if="copyErrors.phone" class="copy-error" role="status">{{ copyErrors.phone }}</p>


        <!-- LINE -->
        <button type="button" class="contact-item copy" :class="{ copied: copied.line }"
          aria-label="Copy LINE ID: taming31"
          :disabled="copying.line" :aria-busy="copying.line"
          @click="copy('taming31', 'line')">
          <img :src="copied.line ? '/icons/check.svg' : '/icons/line.svg'" class="icon" alt="" aria-hidden="true" />
          {{ copied.line ? "Copied ✓" : "taming31" }}
        </button>
        <span class="sr-only" role="status" aria-atomic="true">{{ copied.line ? 'LINE ID copied.' : '' }}</span>
        <p v-if="copyErrors.line" class="copy-error" role="status">{{ copyErrors.line }}</p>

        <!-- GitHub -->
        <a href="https://github.com/sirasakswnk" target="_blank" class="contact-item">
          <img src="/icons/github.svg" alt="" aria-hidden="true" />
          GitHub
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/sirasak-suwannakoed-0572ab398/" target="_blank" class="contact-item">
          <img src="/icons/linkedin.svg" alt="" aria-hidden="true" />
          LinkedIn
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/mingmx._/" target="_blank" class="contact-item">
          <img src="/icons/instagram.svg" alt="" aria-hidden="true" />
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
      copying: { email: false, phone: false, line: false },
      copyErrors: { email: "", phone: "", line: "" },
      copyTimers: {},
      disposed: false,
    };
  },
  beforeUnmount() {
    this.disposed = true;
    Object.values(this.copyTimers).forEach(clearTimeout);
  },
  methods: {
    async copy(text, type) {
      if (this.copying[type] || this.disposed) return;

      clearTimeout(this.copyTimers[type]);
      this.copied[type] = false;
      this.copyErrors[type] = "";
      this.copying[type] = true;

      try {
        if (typeof navigator.clipboard?.writeText === "function") {
          await navigator.clipboard.writeText(text);
        } else {
          this.copyWithTextarea(text);
        }

        if (this.disposed) return;
        this.copied[type] = true;
        this.copyTimers[type] = setTimeout(() => {
          this.copied[type] = false;
          delete this.copyTimers[type];
        }, 1500);
      } catch {
        if (this.disposed) return;
        const labels = { email: "email address", phone: "phone number", line: "LINE ID" };
        this.copyErrors[type] = `Couldn't copy the ${labels[type]}. Please select and copy it manually.`;
      } finally {
        if (!this.disposed) this.copying[type] = false;
      }
    },
    copyWithTextarea(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.readOnly = true;
      textarea.tabIndex = -1;
      textarea.setAttribute("aria-hidden", "true");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      const previousFocus = document.activeElement;

      try {
        document.body.appendChild(textarea);
        textarea.select();
        if (!document.execCommand("copy")) {
          throw new Error("Copy command failed");
        }
      } finally {
        textarea.remove();
        previousFocus?.focus();
      }
    },
  },
};
</script>

<style scoped>
.contact-section {
  min-height: 100vh;
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

.contact-item:disabled {
  cursor: wait;
  opacity: 0.7;
}

.copy-error {
  margin: -8px 0 0;
  color: #fca5a5;
  font-size: 0.85rem;
  text-align: left;
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
