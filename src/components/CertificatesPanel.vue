<template>
  <div class="certificates-panel">
    <!-- GRID -->
    <div class="grid">
      <div class="card" v-for="(item, index) in items" :key="index"
        role="button" tabindex="0" aria-haspopup="dialog" :aria-label="`View certificate: ${item.title}`"
        @click="openModal(item, $event.currentTarget)"
        @keydown.enter.prevent="openModal(item, $event.currentTarget)"
        @keydown.space.prevent="openModal(item, $event.currentTarget)">
        <img :src="item.thumbnail" :alt="item.title" loading="lazy" decoding="async" />

        <!-- TAG -->
        <div class="tag-wrapper">
          <span class="tag" v-for="(tag, i) in item.tags" :key="i">
            {{ tag }}
          </span>
        </div>

        <h3>{{ item.title }}</h3>

        <!-- DATE -->
        <p class="card-date">{{ item.date }}</p>
      </div>

    </div>

    <dialog class="modal" ref="certificateDialog" v-if="selectedItem"
      aria-modal="true" aria-labelledby="certificate-modal-title" aria-describedby="certificate-modal-description"
      @click.self="closeModal" @cancel.prevent="closeModal" @close="closeModal"
      @keydown.tab.prevent="focusCloseButton">
      <div class="modal-content" ref="modalContent">
        <img :src="selectedItem.image" :alt="selectedItem.title" decoding="async" />
        <h3 id="certificate-modal-title" ref="modalTitle" tabindex="-1" autofocus>{{ selectedItem.title }}</h3>
        <p class="modal-date">{{ selectedItem.date }}</p>
        <p id="certificate-modal-description">{{ selectedItem.description }}</p>
        <button type="button" class="close-btn" ref="closeButton" @click="closeModal">Close</button>
      </div>
    </dialog>
  </div>
</template>

<script>
import cert1 from "@/assets/photo/optimized/portfolio/cert1.webp";
import cert2 from "@/assets/photo/optimized/portfolio/cert2.webp";
import cert3 from "@/assets/photo/optimized/portfolio/cert3.webp";
import cert4 from "@/assets/photo/portfolio/cert4.jpg";
import cert5 from "@/assets/photo/optimized/portfolio/cert5.webp";
import cert6 from "@/assets/photo/optimized/portfolio/cert6.webp";
import cert7 from "@/assets/photo/optimized/portfolio/cert7.webp";
import cert8 from "@/assets/photo/portfolio/cert8.jpg";
import cert9 from "@/assets/photo/optimized/portfolio/cert9.webp";
import cert10 from "@/assets/photo/optimized/portfolio/cert10.webp";
import thumb1 from "@/assets/photo/optimized/portfolio/cert1-thumb.webp";
import thumb2 from "@/assets/photo/optimized/portfolio/cert2-thumb.webp";
import thumb3 from "@/assets/photo/optimized/portfolio/cert3-thumb.webp";
import thumb4 from "@/assets/photo/optimized/portfolio/cert4-thumb.webp";
import thumb5 from "@/assets/photo/optimized/portfolio/cert5-thumb.webp";
import thumb6 from "@/assets/photo/optimized/portfolio/cert6-thumb.webp";
import thumb7 from "@/assets/photo/optimized/portfolio/cert7-thumb.webp";
import thumb8 from "@/assets/photo/optimized/portfolio/cert8-thumb.webp";
import thumb9 from "@/assets/photo/optimized/portfolio/cert9-thumb.webp";
import thumb10 from "@/assets/photo/optimized/portfolio/cert10-thumb.webp";

export default {
  name: "CertificatesPanel",
  data() {
    return {
      selectedItem: null,
      previousFocus: null,
      previousBodyOverflow: null,
      items: [
        {
          title: "FutureDev: Web Application Development with Next.js",
          image: cert1,
          thumbnail: thumb1,
          description: "Certificate of completion for a training program on web application design and development using Next.js, organized by Kasetsart University, Sriracha Campus (November 2025).",
          date: "November 12 2025",
          tags: ["Web","Frontend"]

        },
        {
          title: "Cybersecurity Training Program (12 Hours)",
          image: cert2,
          thumbnail: thumb2,
          description: "Certificate of completion for a 12-hour Cybersecurity training program conducted by Digital Academy Thailand (DAT) and the Faculty of Engineering, Kasetsart University, Sriracha Campus (November 2025).",
          date: "November 17, 2025",
          tags: ["Cybersecurity"]
        },
        {
          title: "Basic Cybersecurity  Certificate of Completion",
          image: cert3,
          thumbnail: thumb3,
          description: "Successfully completed the Basic Cybersecurity course on the MOOC cybersecurity learning platform. The course covered fundamental cybersecurity concepts, threat awareness, and essential security practices for digital systems.",
          date: "November 15, 2025",
          tags: ["Cybersecurity"]
        },
        {
          title: "LINK Certified Network Cabling for Engineering (LCCE)",
          image: cert4,
          thumbnail: thumb4,
          description: "Successfully completed the LINK Certified Network Cabling for Engineering (LCCE) training program, covering structured cabling standards, network infrastructure fundamentals, and installation best practices based on international standards.",
          date: "September 17 2025",
          tags: ["Network","Engineer"]
        },
        {
          title: "Super AI Engineer Season 5  AI Innovator Certification",
          image: cert5,
          thumbnail: thumb5,
          description: "Successfully completed the Super AI Engineer Season 5 training and skill development program as an AI Innovator, organized by the Artificial Intelligence Association of Thailand (AIAT). The program focused on developing high-caliber AI talent, covering innovation-driven AI concepts, engineering skills, and industry-oriented applications to support rapidly changing global environments.",
          date: "July 19, 2025",
          tags: ["Ai","Engineer"]
        },
        {
          title: "AI Ethics Certification",
          image: cert6,
          thumbnail: thumb6,
          description: "Certificate of achievement for completing the Artificial Intelligence Ethics course, demonstrating knowledge of responsible and ethical AI practices.",
          date: "March 10, 2025",
          tags: ["Ai"]
        },
        {
          title: "MATLAB Onramp – Course Completion Certificate",
          image: cert7,
          thumbnail: thumb7,
          description: "Successfully completed the MATLAB Onramp self-paced training course provided by MathWorks Training Services.The course covered fundamental MATLAB concepts, including programming basics, data analysis, visualization,and problem-solving using MATLAB for engineering and scientific applications.",
          date: "March 17, 2024",
          tags: ["MATLAB"]
        },
        {
          title: "ChatGPT & AI for Digital Students",
          image: cert8,
          thumbnail: thumb8,
          description: "Certificate of completion for training on ChatGPT and AI applications for digital learning and productivity",
          date: "September 2, 2023",
          tags: ["Ai"]
        },
        {
          title: "Academic Excellence Award (2023)",
          image: cert10,
          thumbnail: thumb10,
          description: "Certificate of recognition for outstanding academic performance at Kasetsart University, Sriracha Campus.",
          date: "April 8, 2024",
          tags: ["KUSRC"]
        },
        {
          title: "Academic Excellence Award (2024)",
          image: cert9,
          thumbnail: thumb9,
          description: "Certificate of recognition for outstanding academic performance at Kasetsart University, Sriracha Campus.",
          date: "July 25, 2024",
          tags: ["KUSRC"]
        },

      ],
    };
  },
  beforeUnmount() {
    this.restorePage();
  },
  methods: {
    async openModal(item, trigger) {
      if (this.selectedItem) return;
      this.previousFocus = trigger || document.activeElement;
      this.previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      this.selectedItem = item;
      await this.$nextTick();
      if (!this.selectedItem || !this.$refs.certificateDialog) return;
      this.$refs.certificateDialog.showModal();
      this.$refs.modalTitle.focus({ preventScroll: true });
      this.$refs.modalContent.scrollTop = 0;
    },
    focusCloseButton() {
      // Close is the dialog's only control; keep Tab and Shift+Tab inside it.
      this.$refs.closeButton?.focus();
    },
    closeModal() {
      if (!this.selectedItem) return;
      this.$refs.certificateDialog?.close();
      this.selectedItem = null;
      this.restorePage();
    },
    restorePage() {
      if (this.previousBodyOverflow !== null) {
        document.body.style.overflow = this.previousBodyOverflow;
        this.previousBodyOverflow = null;
      }
      if (this.previousFocus?.isConnected) {
        this.previousFocus.focus({ preventScroll: true });
      }
      this.previousFocus = null;
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}


.card {
  background: white;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.25);
}


.card:focus-visible,
.close-btn:focus-visible {
  outline: 3px solid #6a11cb;
  outline-offset: 4px;
}


.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 15px;
}


.card h3 {
  font-size: 1.1rem;
}


.tag-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}


.tag {
  font-size: 0.7rem;
  padding: 4px 10px;
  border-radius: 999px;
  background: #2b1a00;
  color: #ffd84d;
  font-weight: 600;
}


.card-date {
  font-size: 0.8rem;
  color: #666;
  margin-top: 6px;
}


.modal {
  position: fixed;
  inset: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: none;
  height: 100vh;
  height: 100dvh;
  max-height: none;
  margin: 0;
  padding: 16px;
  border: 0;
  background: transparent;
  color: #2b1a00;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1100; /* showModal() also places the dialog in the browser's top layer. */
}


.modal::backdrop {
  background: rgba(0, 0, 0, 0.65);
}


.modal-content {
  box-sizing: border-box;
  display: block;
  background: white;
  padding: 25px;
  max-width: 700px;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
  overflow-wrap: anywhere;
  border-radius: 24px;
  animation: scaleIn 0.3s ease;
}


.modal-content img {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 18px;
  margin-bottom: 24px;
  background: #f5f5f5;
  padding: 16px;
}


.modal-content h3 {
  font-size: 1.6rem;
  margin-bottom: 12px;
}


.modal-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #333;
}


.modal-date {
  display: inline-block;
  font-size: 0.85rem;
  padding: 4px 12px;
  border-radius: 999px;
  background: #f1f1f1;
  color: #555;
  margin-bottom: 14px;
}


.close-btn {
  margin-top: 20px;
  background: #ffd84d;
  border: none;
  padding: 10px 22px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}


/* =========================
   🎬 ANIMATION
========================= */


@keyframes scaleIn {
  from {
    transform: scale(0.85);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.97);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}


@media (max-width: 768px) {
  .modal-content {
    padding: 24px;
    max-width: 95%;
  }

  .modal-content img {
    max-height: 60vh;
    padding: 10px;
  }
}


@media (prefers-reduced-motion: reduce) {
  .card:hover {
    transform: none;
  }
}
</style>
