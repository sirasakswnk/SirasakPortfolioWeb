<template>
  <section class="skills-section" id="Skills">
    <h2 class="section-title">Skills</h2>

    <div class="skills-grid">
      <!-- =================
           PROGRAMMING SKILLS
      ================= -->
      <div class="skills-card reveal">
        <h3 class="card-title">Technical Skills</h3>
        <div class="skill-tabs">
          <button v-for="(cat, key) in skillCategories" :key="key"
            :class="['tab-btn', { active: activeCategory === key }]" @click="activeCategory = key">
            {{ cat.label }}
          </button>
        </div>
        <transition name="skill-fade" mode="out-in">
          <div :key="activeCategory">
            <div class="skill-item" v-for="skill in skillCategories[activeCategory].skills" :key="skill.name">
              <div class="skill-top">
                <div class="skill-left">
                  <div class="icon-wrapper" @mousemove="moveIcon($event)" @mouseleave="resetIcon($event)">
                    <img :src="skill.icon" class="skill-icon" />
                  </div>

                  <span class="skill-name">{{ skill.name }}</span>
                </div>

                <span class="level">
                  <span class="percent-badge">{{ skill.percent }}%</span>
                  <span class="level-text">{{ skill.level }}</span>
                </span>
              </div>

              <div class="progress-bar">
                <div class="progress" :style="{ '--target': skill.percent + '%' }"></div>
              </div>
            </div>
          </div>
        </transition>




      </div>

      <!-- =================
           SOFT SKILLS
      ================= -->
      <div class="skills-card reveal delay">
        <h3 class="card-title">Soft Skills</h3>

        <div class="soft-skill" v-for="soft in softSkills" :key="soft.title">
          <div class="soft-icon">
            <img :src="soft.icon" />
          </div>

          <div class="soft-text">
            <h4>{{ soft.title }}</h4>
            <p>{{ soft.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      activeCategory: "web",

      skillCategories: {
        programming: {
          label: "Programming",
          skills: [
            {
              name: "Python",
              percent: 70,
              level: "Intermediate",
              icon: "/icons/python.svg",
            },
            {
              name: "Java",
              percent: 70,
              level: "Intermediate",
              icon: "/icons/java.svg",
            },
            {
              name: "C",
              percent: 60,
              level: "Intermediate",
              icon: "/icons/c.svg",
            },
            {
              name: "C++",
              percent: 65,
              level: "Intermediate",
              icon: "/icons/cplusplus.svg",
            },
          ],
        },

        web: {
          label: "Web Development",
          skills: [
            {
              name: "HTML / CSS",
              percent: 80,
              level: "Advanced",
              icon: "/icons/html.svg",
            },
            {
              name: "Vue.js",
              percent: 85,
              level: "Advanced",
              icon: "/icons/vue.svg",
            },
            {
              name: "JavaScript",
              percent: 75,
              level: "Intermediate",
              icon: "/icons/javascript.svg",
            },
            {
              name: "RESTful API",
              percent: 75,
              level: "Intermediate",
              icon: "/icons/api.svg",
            },
          ],
        },

        tools: {
          label: "Tools",
          skills: [
            {
              name: "PostgreSQL",
              percent: 80,
              level: "Advanced",
              icon: "/icons/postgresql.svg",
            },
            {
              name: "Git / GitHub",
              percent: 75,
              level: "Intermediate",
              icon: "/icons/github.svg",
            },
            {
              name: "Postman",
              percent: 75,
              level: "Intermediate",
              icon: "/icons/postman.svg",
            },
            {
              name: "VS Code",
              percent: 85,
              level: "Advanced",
              icon: "/icons/vscode.svg",
            },
          ],
        },
      },
      softSkills: [
        {
          title: "Hard Working",
          desc: "Dedicated and responsible in completing assigned tasks.",
          icon: "/icons/work.svg",
        },
        {
          title: "Teamwork",
          desc: "Comfortable working in collaborative environments.",
          icon: "/icons/team.svg",
        },
        {
          title: "Problem Solving",
          desc: "Analyze problems and find practical solutions.",
          icon: "/icons/brain.svg",
        },
        {
          title: "Time Management",
          desc: "Manage tasks and deadlines efficiently.",
          icon: "/icons/time.svg",
        },
        {
          title: "Good Listener",
          desc: "Open to feedback and attentive to others' ideas.",
          icon: "/icons/ear.svg",
        },
        {
          title: "Communication",
          desc: "Clear communication with team members.",
          icon: "/icons/chat.svg",
        },
      ],
    };
  },
  mounted() {
    // reveal animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
  },
  methods: {
    // 🧲 magnetic icon effect (programming skills)
    moveIcon(e) {
      const icon = e.currentTarget.querySelector(".skill-icon");
      const rect = e.currentTarget.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      icon.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    },
    resetIcon(e) {
      const icon = e.currentTarget.querySelector(".skill-icon");
      icon.style.transform = "translate(0, 0)";
    },
  },
};
</script>

<style scoped>
.skill-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 26px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;

  color: #e5e7eb;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.22);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  transition: all 0.3s ease;
}

.tab-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
}

.tab-btn.active {
  position: relative;
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;

  border: 1px solid rgba(255, 255, 255, 0.35);

  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.15);
}




.skill-fade-enter-active,
.skill-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.skill-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.skill-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.skills-section {
  min-height: 100vh;
  background: #020617;
  padding: 100px 40px;
  color: #e5e7eb;
}

.section-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 60px;
}

.skills-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
}

.skills-card {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 36px 30px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(14px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4);
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}

.reveal.delay {
  transition-delay: 0.15s;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 28px;
}

.skill-item {
  margin-bottom: 26px;
  padding: 12px 14px;
  border-radius: 16px;
  transition: all 0.35s ease;
}

.skill-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(142, 45, 226, 0.25);
}

.skill-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.skill-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.skill-icon {
  width: 26px;
  height: 26px;
  filter: invert(1);
  opacity: 0.9;
  transition: transform 0.35s ease;
  will-change: transform;
}

.skill-item:hover .skill-icon {
  transform: scale(1.15) rotate(-6deg);
}

.skill-name {
  font-size: 1rem;
  font-weight: 500;
}

.level {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  opacity: 0.9;
}

.percent-badge {
  padding: 3px 10px;
  border-radius: 999px;

  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.3px;

  color: #ffffff;

  background: rgba(255, 255, 255, 0.18);

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  border: 1px solid rgba(255, 255, 255, 0.35);

  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.15);

  transition: all 0.25s ease;
}

/* level text */
.level-text {
  font-size: 0.75rem;
  opacity: 0.75;
}

.skill-item:hover .percent-badge {
  background: rgba(255, 255, 255, 0.28);
  transform: scale(1.06);
}


.progress-bar {
  height: 10px;
  border-radius: 999px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  border: 1px solid rgba(255, 255, 255, 0.25);
}

.progress {
  height: 100%;
  width: 0;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.75);

  transition: width 0.8s ease;
  width: var(--target);

  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.25),
    0 0 10px rgba(255, 255, 255, 0.15);

  transition: filter 0.3s ease;
}


.skill-item:hover .progress {
  filter: brightness(1.15);
}




.soft-skill {
  display: flex;
  gap: 16px;
  margin-bottom: 22px;
  padding: 14px 16px;
  border-radius: 16px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}


.soft-skill:hover {
  background: rgba(255, 255, 255, 0.07);
  transform: translateX(6px);
}

.soft-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;
}

.soft-skill:hover .soft-icon {
  transform: translateY(-4px) scale(1.1);
}

.soft-text h4 {
  font-size: 1rem;
  margin-bottom: 4px;
  transition: color 0.3s ease;
}

.soft-skill:hover .soft-text h4 {
  color: #facc15;
}

.soft-text p {
  font-size: 0.85rem;
  opacity: 0.8;
}

.soft-skill img {
  width: 28px;
  height: 28px;
  filter: invert(1);
}
</style>
