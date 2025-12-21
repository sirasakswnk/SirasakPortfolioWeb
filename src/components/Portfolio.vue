<template>


  <section class="portfolio-section" id="Portfolio">
    <h2 class="section-title">
      <span class="title-icon">
        <img src="/icons/certificate.svg" alt="certificate icon" />
      </span>
      Certificates
    </h2>


    <!-- GRID -->
    <div class="grid">
      <div class="card" v-for="(item, index) in items" :key="index" @click="openModal(item)">
        <img :src="item.image" />

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

    <!-- MODAL (เหมือนเดิม) -->
    <div class="modal" v-if="selectedItem" @click.self="closeModal">
      <div class="modal-content">
        <img :src="selectedItem.image" />
        <h3>{{ selectedItem.title }}</h3>
        <p class="modal-date">{{ selectedItem.date }}</p>
        <p>{{ selectedItem.description }}</p>
        <button class="close-btn" @click="closeModal">Close</button>
      </div>
    </div>
  </section>




</template>
<script>
import cert1 from "@/assets/photo/portfolio/cert1.jpg";
import cert2 from "@/assets/photo/portfolio/cert2.jpg";
import cert3 from "@/assets/photo/portfolio/cert3.jpg";
import cert4 from "@/assets/photo/portfolio/cert4.jpg";
import cert5 from "@/assets/photo/portfolio/cert5.jpg";
import cert6 from "@/assets/photo/portfolio/cert6.jpg";
import cert7 from "@/assets/photo/portfolio/cert7.jpg";
import cert8 from "@/assets/photo/portfolio/cert8.jpg";
import cert9 from "@/assets/photo/portfolio/cert9.jpg";
import cert10 from "@/assets/photo/portfolio/cert10.jpg";

export default {
  name: "PortfolioSection",
  data() {
    return {
      selectedItem: null,
      items: [
        {
          title: "FutureDev: Web Application Development with Next.js",
          image: cert1,
          description: "Certificate of completion for a training program on web application design and development using Next.js, organized by Kasetsart University, Sriracha Campus (November 2025).",
          date: "November 12 2025",
          tags: ["Web","Frontend"]

        },
        {
          title: "Cybersecurity Training Program (12 Hours)",
          image: cert2,
          description: "Certificate of completion for a 12-hour Cybersecurity training program conducted by Digital Academy Thailand (DAT) and the Faculty of Engineering, Kasetsart University, Sriracha Campus (November 2025).",
          date: "November 17, 2025",
          tags: ["Cybersecurity"]
        },
        {
          title: "Basic Cybersecurity  Certificate of Completion",
          image: cert3,
          description: "Successfully completed the Basic Cybersecurity course on the MOOC cybersecurity learning platform. The course covered fundamental cybersecurity concepts, threat awareness, and essential security practices for digital systems.",
          date: "November 15, 2025",
          tags: ["Cybersecurity"]
        },
        {
          title: "LINK Certified Network Cabling for Engineering (LCCE)",
          image: cert4,
          description: "Successfully completed the LINK Certified Network Cabling for Engineering (LCCE) training program, covering structured cabling standards, network infrastructure fundamentals, and installation best practices based on international standards.",
          date: "September 17 2025",
          tags: ["Network","Engineer"]
        },
        {
          title: "Super AI Engineer Season 5  AI Innovator Certification",
          image: cert5,
          description: "Successfully completed the Super AI Engineer Season 5 training and skill development program as an AI Innovator, organized by the Artificial Intelligence Association of Thailand (AIAT). The program focused on developing high-caliber AI talent, covering innovation-driven AI concepts, engineering skills, and industry-oriented applications to support rapidly changing global environments.",
          date: "July 19, 2025",
          tags: ["Ai","Engineer"]
        },
        {
          title: "AI Ethics Certification",
          image: cert6,
          description: "Certificate of achievement for completing the Artificial Intelligence Ethics course, demonstrating knowledge of responsible and ethical AI practices.",
          date: "March 10, 2025",
          tags: ["Ai"]
        },
        {
          title: "MATLAB Onramp – Course Completion Certificate",
          image: cert7,
          description: "Successfully completed the MATLAB Onramp self-paced training course provided by MathWorks Training Services.The course covered fundamental MATLAB concepts, including programming basics, data analysis, visualization,and problem-solving using MATLAB for engineering and scientific applications.",
          date: "March 17, 2024",
          tags: ["MATLAB"]
        },
        {
          title: "ChatGPT & AI for Digital Students",
          image: cert8,
          description: "Certificate of completion for training on ChatGPT and AI applications for digital learning and productivity",
          date: "September 2, 2023",
          tags: ["Ai"]
        },
        {
          title: "Academic Excellence Award (2023)",
          image: cert10,
          description: "Certificate of recognition for outstanding academic performance at Kasetsart University, Sriracha Campus.",
          date: "April 8, 2024",
          tags: ["KUSRC"]
        },
        {
          title: "Academic Excellence Award (2024)",
          image: cert9,
          description: "Certificate of recognition for outstanding academic performance at Kasetsart University, Sriracha Campus.",
          date: "July 25, 2024",
          tags: ["KUSRC"]
        },

      ],
    };
  },
  methods: {
    openModal(item) {
      this.selectedItem = item;
    },
    closeModal() {
      this.selectedItem = null;
    },
  },
};
</script>
<style scoped>

.portfolio-section {
  min-height: 100vh;
  background: #ffd84d;
  padding: 100px 40px;
  text-align: center;
  color: #2b1a00;
}

.section-title {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 700;
  color: #2b1a00;
  letter-spacing: 1px;
  margin-bottom: 60px;
  position: relative;
}

.title-icon img {
  width: 34px;
  height: 34px;
  filter: brightness(0);
  transition: transform 0.3s ease;
  filter: invert(16%) sepia(78%) saturate(430%) hue-rotate(250deg);
}

.section-title:hover .title-icon img {
  transform: rotate(-8deg) scale(1.05);
}

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
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: white;
  padding: 25px;
  max-width: 700px;
  width: 90%;
  border-radius: 24px;
  animation: scaleIn 0.3s ease;
}


.modal-content img {
  width: 100%;
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

.section-title {
  animation: fadeUp 0.8s ease both;
}

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
</style>
