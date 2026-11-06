<template>
  <div class="projects-panel">
    <div v-if="projects.length" class="projects-grid">
      <article v-for="project in projects" :key="project.id" class="project-card"
        :aria-labelledby="`project-title-${project.id}`">
        <figure class="project-cover">
          <a class="screenshot-link" :href="project.image" target="_blank" rel="noopener noreferrer"
            :aria-label="`Open ${project.title} cover at full size (opens in a new tab)`">
            <img :src="project.image" :alt="project.imageAlt" :width="project.imageWidth"
              :height="project.imageHeight" loading="lazy" decoding="async" />
          </a>
          <figcaption>{{ project.imageCaption }}</figcaption>
        </figure>

        <div class="project-content">
          <p class="project-category">{{ project.category }}</p>
          <div class="project-badges">
            <span class="project-status">{{ project.status }}</span>
            <span class="project-role">{{ project.role }}</span>
          </div>
          <h3 :id="`project-title-${project.id}`">{{ project.title }}</h3>
          <p class="project-summary">{{ project.summary }}</p>
          <p class="project-contribution">{{ project.roleDescription }}</p>

          <ul class="technology-list" :aria-label="`Technologies used in ${project.title}`">
            <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
          </ul>

          <div v-if="projectLinks(project).length" class="project-actions">
            <a v-for="link in projectLinks(project)" :key="link.label" :href="link.url"
              target="_blank" rel="noopener noreferrer" :aria-label="`${link.label} for ${project.title} (opens in a new tab)`">
              {{ link.label }}
            </a>
          </div>
        </div>

        <details v-if="project.screenshots?.length" class="project-screenshots">
          <summary>View project screenshots <span>({{ project.screenshots.length }} more)</span></summary>
          <div class="screenshot-grid">
            <figure v-for="screenshot in project.screenshots" :key="screenshot.id" class="screenshot">
              <h4>{{ screenshot.title }}</h4>
              <a class="screenshot-link" :href="screenshot.image" target="_blank" rel="noopener noreferrer"
                :aria-label="`Open ${screenshot.title} screenshot for ${project.title} at full size (opens in a new tab)`">
                <img :src="screenshot.image" :alt="screenshot.imageAlt" :width="screenshot.width"
                  :height="screenshot.height" loading="lazy" decoding="async" />
              </a>
              <figcaption>{{ screenshot.caption }}</figcaption>
            </figure>
          </div>
        </details>
      </article>
    </div>

    <div v-else class="projects-empty" role="status">
      <h3>No projects to show yet</h3>
      <p>Project details will appear here once they are ready.</p>
    </div>
  </div>
</template>

<script>
import { projects as projectEntries } from '@/data/projects';

export default {
  name: 'ProjectsPanel',
  props: {
    projects: {
      type: Array,
      default: () => projectEntries,
    },
  },
  methods: {
    projectLinks(project) {
      return [
        { label: 'GitHub', url: project.repositoryUrl },
        { label: 'Live Demo', url: project.demoUrl },
      ].filter(({ url }) => {
        if (typeof url !== 'string') return false;
        try {
          const parsed = new URL(url);
          return ['https:', 'http:'].includes(parsed.protocol);
        } catch {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.projects-panel {
  color: #2b1a00;
  text-align: left;
}

.projects-grid {
  display: grid;
  gap: 28px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  min-width: 0;
  overflow-wrap: anywhere;
  background: #fff;
  border: 1px solid rgba(43, 26, 0, 0.12);
  border-radius: 24px;
  box-shadow: 0 12px 28px rgba(43, 26, 0, 0.1);
}

.project-cover {
  display: grid;
  align-content: center;
  gap: 16px;
  min-width: 0;
  margin: 0;
  padding: 28px;
  background: linear-gradient(135deg, #f8fafc, #eef2ff);
  border-radius: 24px 0 0 0;
}

.screenshot-link {
  display: block;
  border-radius: 12px;
}

.screenshot-link:focus-visible,
summary:focus-visible {
  outline: 3px solid #6a11cb;
  outline-offset: 4px;
}

.project-cover img,
.screenshot img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid #dbe2ea;
  border-radius: 12px;
}

figcaption {
  margin-top: 12px;
  color: #526072;
  font-size: 0.85rem;
  line-height: 1.6;
}

.project-cover figcaption {
  margin-top: 0;
}

.project-content {
  min-width: 0;
  padding: clamp(24px, 3vw, 40px);
}

.project-category {
  margin: 0 0 16px;
  color: #6a4190;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.project-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-status,
.project-role {
  padding: 6px 12px;
  border-radius: 999px;
}

.project-status {
  color: #166534;
  background: #dcfce7;
}

.project-role {
  color: #59318b;
  background: #f3e8ff;
}

h3 {
  margin: 0 0 18px;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  line-height: 1.25;
}

.project-summary,
.project-contribution {
  font-size: 0.95rem;
  line-height: 1.8;
}

.project-contribution {
  color: #526072;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 24px 0 0;
  list-style: none;
}

.technology-list li {
  padding: 5px 10px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #334155;
  background: #f8fafc;
  font-size: 0.8rem;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.project-actions a {
  padding: 10px 18px;
  border-radius: 999px;
  color: #fff;
  background: #6a11cb;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
}

.project-actions a:hover {
  background: #54109e;
}

.project-screenshots {
  grid-column: 1 / -1;
  min-width: 0;
  border-top: 1px solid #e2e8f0;
}

summary {
  margin: 8px;
  padding: 18px 20px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
}

summary span {
  color: #526072;
  font-size: 0.85rem;
  font-weight: 400;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 28px;
  padding: 0 28px 28px;
}

.screenshot {
  min-width: 0;
  margin: 0;
}

.screenshot h4 {
  margin: 0 0 14px;
  font-size: 1.05rem;
  font-weight: 600;
}

.projects-empty {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
  border: 1px dashed rgba(43, 26, 0, 0.35);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.5);
  text-align: center;
}

.projects-empty p {
  margin: 0;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .project-card,
  .screenshot-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .project-cover {
    border-radius: 24px 24px 0 0;
  }
}

@media (max-width: 480px) {
  .project-cover,
  .project-content {
    padding: 20px;
  }

  .screenshot-grid {
    gap: 24px;
    padding: 0 20px 24px;
  }

  summary {
    padding: 14px 12px;
  }
}
</style>
