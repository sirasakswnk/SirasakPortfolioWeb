<template>
  <article class="playground-card" :aria-labelledby="`playground-title-${project.id}`">
    <div class="playground-cover">
      <ProjectImageButton :src="project.image" :alt="project.imageAlt" :width="project.imageWidth"
        :height="project.imageHeight" :title="`${project.title} — Cover`" :caption="project.imageCaption"
        @preview="(image, trigger) => $emit('preview-image', image, trigger)" />
    </div>
    <div class="playground-content">
      <div class="playground-badges">
        <span>Personal project</span>
        <span v-if="project.status" class="playground-status">{{ project.status }}</span>
      </div>
      <h4 :id="`playground-title-${project.id}`">{{ project.title }}</h4>
      <p>{{ project.summary }}</p>
      <ul v-if="visibleTechnologies.length" class="playground-technologies"
        :aria-label="`Main technologies used in ${project.title}`">
        <li v-for="technology in visibleTechnologies" :key="technology">{{ technology }}</li>
      </ul>
      <div class="playground-actions">
        <button type="button" class="playground-details" aria-haspopup="dialog"
          :aria-label="`View details for ${project.title}`"
          @click="$emit('show-details', project, $event.currentTarget)">
          Details <span aria-hidden="true">&rarr;</span>
        </button>
        <a v-for="link in projectLinks" :key="link.label" :href="link.url" target="_blank"
          rel="noopener noreferrer" :aria-label="`${link.label} for ${project.title} (opens in a new tab)`">
          {{ link.label }} <span aria-hidden="true">&nearr;</span>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import ProjectImageButton from './ProjectImageButton.vue';

export default {
  name: 'PlaygroundCard',
  components: { ProjectImageButton },
  props: { project: { type: Object, required: true } },
  emits: ['show-details', 'preview-image'],
  computed: {
    visibleTechnologies() { return (this.project.technologies || []).slice(0, 2); },
    projectLinks() {
      return [
        { label: 'Play demo', url: this.project.demoUrl },
        { label: 'GitHub', url: this.project.repositoryUrl },
      ].filter(({ url }) => {
        if (typeof url !== 'string') return false;
        try { return ['https:', 'http:'].includes(new URL(url).protocol); }
        catch { return false; }
      });
    },
  },
};
</script>

<style scoped>
.playground-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  border: 1px solid #e5ddec;
  border-radius: 18px;
  background: #fffdf9;
  box-shadow: 0 4px 14px rgba(64, 43, 77, 0.04);
  overflow-wrap: anywhere;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
}

.playground-cover {
  --project-image-ratio: 16 / 9;
  --project-image-max-height: 180px;
  padding: 12px;
  border-radius: 18px 18px 0 0;
  background: #f6f2fa;
}

.playground-cover :deep(.image-preview) {
  z-index: 2;
}

.playground-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
  padding: 18px;
}

.playground-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.playground-badges span {
  padding: 4px 8px;
  border-radius: 6px;
  color: #665173;
  background: #f0eaf5;
  font-size: 0.72rem;
}

.playground-badges .playground-status {
  color: #52634d;
  background: #edf2e9;
}

h4 {
  margin: 0;
  color: #3c294c;
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.4;
}

p {
  margin: 0;
  color: #65566b;
  font-size: 0.88rem;
  line-height: 1.7;
}

.playground-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.playground-technologies li {
  padding: 3px 7px;
  border: 1px solid #e5ddec;
  border-radius: 6px;
  color: #665173;
  font-size: 0.75rem;
}

.playground-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 14px;
  margin-top: auto;
  padding-top: 2px;
}

.playground-actions button,
.playground-actions a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  padding: 0;
  border: 0;
  color: #69428d;
  background: transparent;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
}

.playground-actions button {
  cursor: pointer;
}

.playground-details::after {
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: 18px;
  content: '';
}

.playground-actions a {
  position: relative;
  z-index: 2;
}

.playground-actions a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.playground-details:focus-visible {
  outline: none;
}

.playground-details:focus-visible::after,
.playground-actions a:focus-visible {
  outline: 3px solid #8052aa;
  outline-offset: 4px;
}

@media (hover: hover) and (pointer: fine) {
  .playground-card:hover {
    transform: translateY(-3px);
    border-color: #c5aed8;
    box-shadow: 0 10px 22px rgba(64, 43, 77, 0.09);
  }
}

@media (prefers-reduced-motion: reduce) {
  .playground-card {
    transition: none;
  }

  .playground-card:hover {
    transform: none;
  }
}
</style>
