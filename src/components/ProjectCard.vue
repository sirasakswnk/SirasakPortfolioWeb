<template>
  <article class="project-card" :class="{ 'project-card-featured': featured }"
    :aria-labelledby="`project-title-${project.id}`">
    <div class="project-cover">
      <ProjectImageButton :src="project.image" :alt="project.imageAlt" :width="project.imageWidth"
        :height="project.imageHeight" :title="`${project.title} — Cover`" :caption="project.imageCaption"
        @preview="(image, trigger) => $emit('preview-image', image, trigger)" />
    </div>
    <div class="project-content">
      <p v-if="featured" class="featured-label">Featured project</p>
      <p class="project-category">{{ project.category }}</p>
      <div class="project-badges">
        <span v-if="project.status" class="project-status">{{ project.status }}</span>
        <span class="project-role">{{ project.role }}</span>
      </div>
      <component :is="featured ? 'h3' : 'h4'" :id="`project-title-${project.id}`" class="project-title">
        {{ project.title }}
      </component>
      <p class="project-summary">{{ project.summary }}</p>
      <ul class="technology-list" :aria-label="`Main technologies used in ${project.title}`">
        <li v-for="technology in visibleTechnologies" :key="technology">{{ technology }}</li>
        <li v-if="remainingTechnologies" class="more-technologies">
          +{{ remainingTechnologies }}<span class="sr-only"> more technologies in project details</span>
        </li>
      </ul>
      <button type="button" class="details-button" aria-haspopup="dialog"
        :aria-label="`View details for ${project.title}`" @click="$emit('show-details', project, $event.currentTarget)">
        View details <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  </article>
</template>

<script>
import ProjectImageButton from './ProjectImageButton.vue';

export default {
  name: 'ProjectCard',
  components: { ProjectImageButton },
  props: { project: { type: Object, required: true }, featured: Boolean },
  emits: ['show-details', 'preview-image'],
  computed: {
    visibleTechnologies() { return this.project.technologies.slice(0, 4); },
    remainingTechnologies() { return Math.max(0, this.project.technologies.length - 4); },
  },
};
</script>

<style scoped>
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow-wrap: anywhere;
  border: 1px solid rgba(43, 26, 0, 0.12);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 12px 28px rgba(43, 26, 0, 0.1);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease, border-color 0.4s ease;
}

/* Stretch the native details button across the card; image previews stay above it. */
.details-button::after {
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: 24px;
  content: '';
}

.project-cover :deep(.image-preview) {
  z-index: 2;
}

.project-cover {
  --project-image-ratio: 16 / 10;
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 20px;
  border-radius: 24px 24px 0 0;
  background: linear-gradient(135deg, #f8fafc, #eef2ff);
}

.project-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding: 28px;
}

.featured-label {
  margin: 0 0 12px;
  color: #6a11cb;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-category {
  margin: 0 0 14px;
  color: #6a4190;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-status, .project-role {
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

.project-title {
  margin: 0 0 14px;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.project-summary {
  margin: 0 0 20px;
  font-size: 0.95rem;
  line-height: 1.8;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: auto 0 24px;
  padding: 0;
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

.technology-list .more-technologies {
  color: #59318b;
  background: #f3e8ff;
}

.details-button {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-height: 44px;
  padding: 10px 20px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: #6a11cb;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background: #54109e;
}

.details-button:focus-visible {
  outline: none;
}

.details-button:focus-visible::after {
  outline: 3px solid #6a11cb;
  outline-offset: 4px;
}

@media (hover: hover) and (pointer: fine) {
  .project-card:hover {
    transform: translateY(-4px);
    border-color: #bca4d8;
    box-shadow: 0 18px 36px rgba(65, 38, 99, 0.16);
  }
  .project-card:hover .project-title {
    color: #6a11cb;
  }
  .project-card:hover .details-button {
    background: #54109e;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card, .project-title, .details-button {
    transition: none;
  }
  .project-card:hover {
    transform: none;
  }
}

.project-card-featured {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
}

.project-card-featured .project-cover {
  padding: 28px;
  border-radius: 24px 0 0 24px;
}

.project-card-featured .project-content {
  padding: clamp(24px, 3vw, 40px);
}

.project-card-featured .project-title {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
}

@media (max-width: 900px) {
  .project-card-featured {
    grid-template-columns: minmax(0, 1fr);
  }
  .project-card-featured .project-cover {
    border-radius: 24px 24px 0 0;
  }
}

@media (max-width: 480px) {
  .project-cover, .project-content, .project-card-featured .project-cover, .project-card-featured .project-content {
    padding: 20px;
  }
}
</style>
