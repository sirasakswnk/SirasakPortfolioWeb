<template>
  <Teleport to="body">
    <dialog ref="dialog" class="project-dialog project-popup" aria-modal="true" aria-labelledby="project-details-title"
      @cancel.prevent="$emit('close')" @close="$emit('close')"
      @pointerdown="backdropPointerDown = $event.target === $event.currentTarget"
      @click.self="closeFromBackdrop">
      <div class="dialog-header popup-header">
        <span>Project details</span>
        <button type="button" class="popup-close" aria-label="Close project details" title="Close project details" @click="$emit('close')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <div class="dialog-content">
        <p class="project-category">{{ project.category }}</p>
        <h2 id="project-details-title" ref="title" tabindex="-1" autofocus>{{ project.title }}</h2>
        <div class="project-badges">
          <span v-if="project.status" class="project-status">{{ project.status }}</span>
          <span>{{ project.role }}</span>
        </div>
        <p class="project-summary">{{ project.summary }}</p>
        <section v-if="project.roleDescription" aria-labelledby="project-contribution-title">
          <h3 id="project-contribution-title">My contribution</h3>
          <p>{{ project.roleDescription }}</p>
        </section>
        <section aria-labelledby="project-technologies-title">
          <h3 id="project-technologies-title">Technologies</h3>
          <ul class="technology-list"><li v-for="technology in project.technologies" :key="technology">{{ technology }}</li></ul>
        </section>
        <div v-if="projectLinks.length" class="project-actions">
          <a v-for="link in projectLinks" :key="link.label" class="popup-primary" :href="link.url" target="_blank"
            rel="noopener noreferrer" :aria-label="`${link.label} for ${project.title} (opens in a new tab)`">
            {{ link.label }} <span aria-hidden="true">&nearr;</span>
          </a>
        </div>
        <section class="project-gallery" aria-labelledby="project-gallery-title">
          <h3 id="project-gallery-title">Screenshots</h3>
          <p class="gallery-hint">Select an image to enlarge it. Use Actual size to inspect the details.</p>
          <figure class="cover-figure">
            <ProjectImageButton :src="project.image" :alt="project.imageAlt" :width="project.imageWidth"
              :height="project.imageHeight" :title="`${project.title} — Cover`" :caption="project.imageCaption"
              loading="eager" @preview="(image, trigger) => $emit('preview-image', image, trigger)" />
            <figcaption>{{ project.imageCaption }}</figcaption>
          </figure>
          <div v-if="project.screenshots?.length" class="screenshot-grid">
            <figure v-for="screenshot in project.screenshots" :key="screenshot.id">
              <h4>{{ screenshot.title }}</h4>
              <ProjectImageButton :src="screenshot.image" :alt="screenshot.imageAlt" :width="screenshot.width"
                :height="screenshot.height" :title="screenshot.title" :caption="screenshot.caption"
                @preview="(image, trigger) => $emit('preview-image', image, trigger)" />
              <figcaption>{{ screenshot.caption }}</figcaption>
            </figure>
          </div>
        </section>
      </div>
    </dialog>
  </Teleport>
</template>

<script>
import ProjectImageButton from './ProjectImageButton.vue';
import { lockBodyScroll } from '@/utils/bodyScrollLock';

export default {
  name: 'ProjectDetailsDialog',
  components: { ProjectImageButton },
  props: { project: { type: Object, required: true }, trigger: { default: null } },
  emits: ['close', 'preview-image'],
  data() { return { releaseScroll: null, previousFocus: null, backdropPointerDown: false }; },
  computed: {
    projectLinks() {
      return [
        { label: 'GitHub', url: this.project.repositoryUrl },
        { label: 'Live Demo', url: this.project.demoUrl },
      ].filter(({ url }) => {
        if (typeof url !== 'string') return false;
        try { return ['https:', 'http:'].includes(new URL(url).protocol); }
        catch { return false; }
      });
    },
  },
  mounted() {
    this.previousFocus = this.trigger || document.activeElement;
    this.releaseScroll = lockBodyScroll();
    this.$refs.dialog.showModal();
    this.$refs.title.focus({ preventScroll: true });
    this.$refs.dialog.scrollTop = 0;
  },
  beforeUnmount() {
    this.$refs.dialog?.close();
    this.releaseScroll?.();
    if (this.previousFocus?.isConnected && !this.previousFocus.closest('[inert]')) {
      this.previousFocus.focus({ preventScroll: true });
    }
  },
  methods: {
    closeFromBackdrop() {
      if (this.backdropPointerDown) this.$emit('close');
      this.backdropPointerDown = false;
    },
  },
};
</script>

<style scoped>
.project-dialog {
  box-sizing: border-box;
  width: min(1000px, calc(100dvw - 32px));
  max-width: none;
  max-height: calc(100dvh - 32px);
  padding: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  border-radius: 24px;
  text-align: left;
  overflow-wrap: anywhere;
}

.dialog-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 28px;
  font-weight: 600;
}

.dialog-content {
  padding: 28px;
}

.project-category {
  margin: 0 0 12px;
  color: #6a4190;
  font-size: 0.85rem;
  font-weight: 600;
}

h2 {
  margin: 0 0 18px;
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  line-height: 1.3;
}

h2:focus {
  outline: none;
}

h3 {
  margin: 28px 0 12px;
  font-size: 1.15rem;
  font-weight: 700;
}

h4 {
  margin: 0 0 14px;
  font-size: 1rem;
  font-weight: 600;
}

p {
  line-height: 1.8;
}

.project-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.project-badges span {
  padding: 6px 12px;
  border-radius: 999px;
  color: #59318b;
  background: #f3e8ff;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-badges .project-status {
  color: #5b4100;
  background: #ffe9a0;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.technology-list li {
  padding: 5px 10px;
  border: 1px solid var(--popup-border);
  border-radius: 8px;
  color: #65502e;
  background: #fff4d5;
  font-size: 0.85rem;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.project-actions a {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 10px 18px;
  border-radius: 999px;
  text-decoration: none;
}

.gallery-hint, figcaption {
  color: var(--popup-muted);
  font-size: 0.85rem;
  line-height: 1.7;
}

figure {
  min-width: 0;
  margin: 0;
}

.cover-figure {
  --project-image-max-height: 65vh;
}

figcaption {
  margin-top: 12px;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 28px;
  margin-top: 28px;
}

a:focus-visible, button:focus-visible {
  outline: 3px solid #6a11cb;
  outline-offset: 4px;
}

@media (max-width: 700px) {
  .screenshot-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 480px) {
  .project-dialog {
    width: calc(100dvw - 20px);
    max-height: calc(100dvh - 20px);
    border-radius: 18px;
  }
  .dialog-header {
    padding: 12px 18px;
  }
  .dialog-content {
    padding: 20px;
  }
}
</style>
