<template>
  <Teleport to="body">
    <dialog ref="dialog" class="image-viewer project-popup" aria-modal="true" aria-labelledby="project-image-title"
      :aria-describedby="image.caption ? 'project-image-caption' : undefined"
      @cancel.prevent="$emit('close')" @close="$emit('close')"
      @pointerdown="backdropPointerDown = $event.target === $event.currentTarget"
      @click.self="closeFromBackdrop">
      <div class="viewer-header popup-header">
        <h2 id="project-image-title">{{ image.title }}</h2>
        <div class="viewer-actions">
          <button type="button" class="viewer-zoom popup-primary" :aria-pressed="zoomed" @click="zoomed = !zoomed">
            {{ zoomed ? 'Fit to screen' : 'Actual size' }}
          </button>
          <button ref="closeButton" type="button" class="popup-close" autofocus
            aria-label="Close image preview" title="Close image preview" @click="$emit('close')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>
      <div class="viewer-image-area" :class="{ zoomed }" tabindex="0" aria-label="Image viewing area">
        <img :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" decoding="async" />
      </div>
      <p v-if="image.caption" id="project-image-caption" class="viewer-caption">{{ image.caption }}</p>
    </dialog>
  </Teleport>
</template>

<script>
import { lockBodyScroll } from '@/utils/bodyScrollLock';

export default {
  name: 'ProjectImageViewer',
  props: { image: { type: Object, required: true }, trigger: { default: null } },
  emits: ['close'],
  data() { return { zoomed: false, releaseScroll: null, previousFocus: null, backdropPointerDown: false }; },
  mounted() {
    this.previousFocus = this.trigger || document.activeElement;
    this.releaseScroll = lockBodyScroll();
    this.$refs.dialog.showModal();
    this.$refs.closeButton.focus({ preventScroll: true });
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
.image-viewer {
  box-sizing: border-box;
  width: min(1600px, calc(100dvw - 32px));
  max-width: none;
  max-height: calc(100dvh - 32px);
  padding: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  border-radius: 20px;
  text-align: left;
}

.viewer-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
}

h2 {
  min-width: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  overflow-wrap: anywhere;
}

.viewer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: auto;
}

.viewer-zoom {
  min-height: 44px;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
}

.viewer-image-area {
  max-height: calc(100dvh - 200px);
  min-height: 80px;
  margin: 20px 20px 0;
  overflow: auto;
  overscroll-behavior: contain;
  border: 1px solid var(--popup-border);
  border-radius: 10px;
  background: var(--popup-image-background);
}

.viewer-image-area img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: calc(100dvh - 200px);
  margin: 0 auto;
  object-fit: contain;
}

.viewer-image-area.zoomed img {
  width: auto;
  max-width: none;
  max-height: none;
}

.viewer-caption {
  margin: 0;
  padding: 14px 20px 20px;
  color: var(--popup-muted);
  font-size: 0.85rem;
  line-height: 1.7;
}

button:focus-visible, .viewer-image-area:focus-visible {
  outline: 3px solid #6a11cb;
  outline-offset: 3px;
}

@media (max-width: 480px) {
  .image-viewer {
    width: calc(100dvw - 20px);
    max-height: calc(100dvh - 20px);
  }
  .viewer-header {
    padding: 14px 16px;
  }
  .viewer-image-area {
    margin: 16px 16px 0;
  }
  .viewer-caption {
    padding: 12px 16px 16px;
  }
  .viewer-image-area, .viewer-image-area img {
    max-height: calc(100dvh - 250px);
  }
}
</style>
