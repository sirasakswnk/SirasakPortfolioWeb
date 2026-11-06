<template>
  <section class="portfolio-section" id="Portfolio" tabindex="-1">
    <h2 class="section-title">
      <span class="title-icon">
        <img src="/icons/work.svg" alt="" aria-hidden="true" />
      </span>
      Portfolio
    </h2>

    <div class="portfolio-toolbar" ref="toolbar">
      <div class="portfolio-tabs" role="tablist" aria-label="Portfolio categories">
        <button v-for="(tab, index) in tabs" :key="tab.id" ref="tabButtons" type="button" role="tab"
          :id="`portfolio-tab-${tab.id}`" :aria-controls="`portfolio-panel-${tab.id}`"
          :aria-selected="activeIndex === index" :tabindex="activeIndex === index ? 0 : -1"
          :class="{ selected: activeIndex === index }" @click="selectPanel(index)"
          @keydown="handleTabKey($event, index)">
          {{ tab.label }}
        </button>
      </div>

      <div class="portfolio-pagination" role="group" aria-label="Portfolio pages">
        <button type="button" :disabled="activeIndex === 0" aria-label="Show projects"
          @click="selectPanel(activeIndex - 1, 'arrow')">
          <span aria-hidden="true">←</span>
        </button>
        <span class="page-counter" aria-hidden="true">{{ activeIndex + 1 }} / {{ tabs.length }}</span>
        <button type="button" :disabled="activeIndex === tabs.length - 1" aria-label="Show certificates"
          @click="selectPanel(activeIndex + 1, 'arrow')">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>

    <p class="sr-only" role="status" aria-atomic="true">{{ announcement }}</p>

    <div class="portfolio-stage" ref="stage" :style="{ '--slide-direction': direction }"
      @pointerdown="startSwipe" @pointerup="endSwipe" @pointercancel="cancelSwipe"
      @lostpointercapture="cancelSwipe">
      <Transition v-for="(tab, index) in tabs" :key="tab.id" name="portfolio-slide"
        @after-leave="releasePanel(index)" @enter-cancelled="releasePanel(index)"
        @leave-cancelled="releasePanel(index)">
        <div v-show="activeIndex === index" class="portfolio-panel" ref="panels" role="tabpanel"
          :id="`portfolio-panel-${tab.id}`" :aria-labelledby="`portfolio-tab-${tab.id}`"
          :aria-hidden="activeIndex !== index" :inert="activeIndex !== index">
          <ProjectsPanel v-if="index === 0 && mountedPanels[index]" />
          <CertificatesPanel v-if="index === 1 && mountedPanels[index]" />
        </div>
      </Transition>
    </div>
  </section>
</template>

<script>
import CertificatesPanel from './CertificatesPanel.vue';
import ProjectsPanel from './ProjectsPanel.vue';
import { prefersReducedMotion } from '@/utils/motion';

export default {
  name: 'PortfolioSection',
  components: { CertificatesPanel, ProjectsPanel },
  data() {
    return {
      tabs: [
        { id: 'projects', label: 'Projects' },
        { id: 'certificates', label: 'Certificates' },
      ],
      activeIndex: 0,
      mountedPanels: [true, false],
      direction: 1,
      announcement: '',
      swipeStart: null,
      touchPointers: new Set(),
      disposed: false,
    };
  },
  beforeUnmount() {
    this.disposed = true;
    this.cancelSwipe();
  },
  methods: {
    focusTab(index) {
      this.$refs.tabButtons?.[index]?.focus({ preventScroll: true });
    },
    selectPanel(index, source = 'tab') {
      if (this.disposed || index === this.activeIndex || index < 0 || index >= this.tabs.length) return;
      if (this.$refs.stage.querySelector('dialog[open]')) return;

      const previousPanel = this.$refs.panels[this.activeIndex];
      const needsFocus = source !== 'swipe' || previousPanel.contains(document.activeElement);
      // Move focus before making its previous panel inert/aria-hidden.
      if (needsFocus) this.focusTab(index);
      // Batched clicks can change selection before a hidden panel ever enters.
      if (previousPanel.style.display === 'none') this.mountedPanels[this.activeIndex] = false;
      this.direction = index > this.activeIndex ? 1 : -1;
      this.mountedPanels[index] = true;
      this.activeIndex = index;
      this.announcement = source === 'tab' ? '' : `${this.tabs[index].label}, ${index + 1} of ${this.tabs.length}`;
      this.swipeStart = null;

      if (this.$refs.stage.getBoundingClientRect().top < 100) {
        this.$refs.toolbar.scrollIntoView({
          block: 'start',
          behavior: prefersReducedMotion() ? 'instant' : 'smooth',
        });
      }
    },
    handleTabKey(event, index) {
      const destinations = {
        ArrowRight: (index + 1) % this.tabs.length,
        ArrowLeft: (index + this.tabs.length - 1) % this.tabs.length,
        Home: 0,
        End: this.tabs.length - 1,
      };
      if (!Object.hasOwn(destinations, event.key)) return;
      event.preventDefault();
      const destination = destinations[event.key];
      this.selectPanel(destination);
      this.focusTab(destination);
    },
    releasePanel(index) {
      if (!this.disposed && index !== this.activeIndex) this.mountedPanels[index] = false;
    },
    startSwipe(event) {
      if (event.pointerType !== 'touch') return;
      this.touchPointers.add(event.pointerId);
      this.swipeStart = null;
      if (!event.isPrimary || this.touchPointers.size !== 1) return;
      if (this.$refs.stage.querySelector('dialog[open]')) return;
      if (event.target.closest('a, button, input, select, textarea, summary, dialog, [role="button"], [contenteditable]')) return;

      this.swipeStart = { id: event.pointerId, x: event.clientX, y: event.clientY };
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        this.swipeStart = null;
      }
    },
    endSwipe(event) {
      if (event.pointerType !== 'touch') return;
      this.touchPointers.delete(event.pointerId);
      const start = this.swipeStart;
      this.swipeStart = null;
      if (!start || start.id !== event.pointerId || this.touchPointers.size) return;
      const x = event.clientX - start.x;
      const y = event.clientY - start.y;
      if (Math.abs(x) < 60 || Math.abs(x) <= Math.abs(y) * 1.5) return;
      this.selectPanel(this.activeIndex + (x < 0 ? 1 : -1), 'swipe');
    },
    cancelSwipe(event) {
      this.swipeStart = null;
      if (event?.pointerId !== undefined) this.touchPointers.delete(event.pointerId);
      else this.touchPointers.clear();
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
  margin-bottom: 32px;
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

.section-title {
  animation: fadeUp 0.8s ease both;
}

.portfolio-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto 28px;
  scroll-margin-top: 120px;
}

.portfolio-tabs,
.portfolio-pagination {
  display: flex;
  align-items: center;
  gap: 8px;
}

.portfolio-tabs {
  max-width: 100%;
  padding: 6px;
  border: 1px solid rgba(43, 26, 0, 0.15);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.45);
}

.portfolio-tabs button {
  padding: 10px 22px;
  border: 0;
  border-radius: 999px;
  color: #2b1a00;
  background: transparent;
  font-size: 0.95rem;
  font-weight: 600;
}

.portfolio-tabs button.selected {
  color: #fff;
  background: #6a11cb;
}

.portfolio-pagination button {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(43, 26, 0, 0.2);
  border-radius: 50%;
  color: #2b1a00;
  background: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  line-height: 1;
}

.portfolio-pagination button:disabled {
  opacity: 0.4;
  cursor: default;
}

.portfolio-tabs button,
.portfolio-pagination button:not(:disabled) {
  cursor: pointer;
}

.portfolio-tabs button:focus-visible,
.portfolio-pagination button:focus-visible {
  outline: 3px solid #2b1a00;
  outline-offset: 4px;
}

.page-counter {
  min-width: 52px;
  font-size: 0.9rem;
  font-weight: 600;
}

.portfolio-stage {
  position: relative;
  overflow: clip;
  padding: 8px;
  margin: -8px;
  touch-action: pan-y pinch-zoom;
}

.portfolio-panel {
  min-width: 0;
}

.portfolio-slide-enter-active,
.portfolio-slide-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.portfolio-slide-leave-active {
  position: absolute;
  inset: 8px 8px auto;
}

.portfolio-slide-enter-from {
  opacity: 0;
  transform: translateX(calc(var(--slide-direction) * 24px));
}

.portfolio-slide-leave-to {
  opacity: 0;
  transform: translateX(calc(var(--slide-direction) * -24px));
}

@media (max-width: 600px) {
  .portfolio-section {
    padding: 80px 20px;
  }

  .portfolio-toolbar {
    flex-direction: column;
    gap: 16px;
  }

  .portfolio-tabs button {
    padding: 10px 16px;
  }
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

@media (prefers-reduced-motion: reduce) {
  .section-title:hover .title-icon img {
    transform: none;
  }

  .portfolio-slide-enter-from,
  .portfolio-slide-leave-to {
    opacity: 1;
    transform: none;
  }
}
</style>
