<template>
  <button type="button" class="image-preview" aria-haspopup="dialog" :aria-label="`View image: ${title}`"
    @click="preview($event.currentTarget)">
    <img :src="src" :alt="alt" :width="width" :height="height" :loading="loading" decoding="async" />
    <span class="image-preview-label" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 4.5 4.5M10.5 7.5v6M7.5 10.5h6" />
      </svg>
      View image
    </span>
  </button>
</template>

<script>
export default {
  name: 'ProjectImageButton',
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    title: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    caption: { type: String, default: '' },
    loading: { type: String, default: 'lazy' },
  },
  emits: ['preview'],
  methods: {
    preview(trigger) {
      this.$emit('preview', {
        src: this.src, alt: this.alt, title: this.title,
        width: this.width, height: this.height, caption: this.caption,
      }, trigger);
    },
  },
};
</script>

<style scoped>
.image-preview {
  --preview-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: block;
  width: 100%;
  min-width: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--project-image-border, #dbe2ea);
  border-radius: 12px;
  background: var(--project-image-background, transparent);
  cursor: zoom-in;
  isolation: isolate;
  transition: box-shadow 0.5s var(--preview-ease), border-color 0.5s var(--preview-ease);
}

.image-preview::after {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, transparent 55%, rgba(48, 23, 79, 0.12));
  opacity: 0;
  pointer-events: none;
  content: '';
  transition: opacity 0.5s var(--preview-ease);
}

.image-preview img {
  display: block;
  width: 100%;
  height: auto;
  max-height: var(--project-image-max-height, none);
  aspect-ratio: var(--project-image-ratio, auto);
  object-fit: contain;
  transform: scale(1);
  transform-origin: center;
  transition: transform 0.7s var(--preview-ease);
}

.image-preview-label {
  position: absolute;
  z-index: 1;
  right: 12px;
  bottom: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 13px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  color: #fff;
  background: rgba(48, 23, 79, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(30, 15, 50, 0.12);
  font-size: 0.8rem;
  font-weight: 600;
  pointer-events: none;
  transition: opacity 0.45s var(--preview-ease), transform 0.5s var(--preview-ease);
}

.image-preview-label svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.image-preview:focus-visible {
  outline: 3px solid #6a11cb;
  outline-offset: 4px;
}

.image-preview:focus-visible .image-preview-label {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.image-preview:focus-visible::after {
  opacity: 1;
}

@media (hover: hover) and (pointer: fine) {
  .image-preview-label {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  .image-preview:hover {
    border-color: #b6a0d0;
    box-shadow: 0 12px 28px rgba(65, 38, 99, 0.13);
  }
  .image-preview:hover img {
    transform: scale(1.015);
  }
  .image-preview:hover::after {
    opacity: 1;
  }
  .image-preview:hover .image-preview-label {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .image-preview, .image-preview::after, .image-preview img, .image-preview-label {
    transition: none;
  }
  .image-preview img, .image-preview:hover img, .image-preview .image-preview-label {
    transform: none;
  }
}
</style>
