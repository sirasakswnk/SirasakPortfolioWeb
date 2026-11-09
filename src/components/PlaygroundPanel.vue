<template>
  <section class="playground-section" aria-labelledby="playground-title">
    <div class="playground-heading">
      <div>
        <p class="playground-eyebrow">Personal projects</p>
        <h3 id="playground-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 7h10a4 4 0 0 1 4 3l1 7a2 2 0 0 1-3.3 1.8L16 16H8l-2.7 2.8A2 2 0 0 1 2 17l1-7a4 4 0 0 1 4-3Z" />
            <path d="M7 10v4m-2-2h4m6-1h.01m3 2h.01" />
          </svg>
          Playground
        </h3>
        <p class="playground-intro">Games and experiments built for fun with friends.</p>
      </div>
      <span v-if="projects.length" class="playground-count">
        {{ projects.length }} {{ projects.length === 1 ? 'project' : 'projects' }}
      </span>
    </div>
    <template v-if="projects.length">
      <div id="playground-games" class="playground-grid">
        <PlaygroundCard v-for="project in visibleProjects" :key="project.id" :project="project"
          @show-details="(entry, trigger) => $emit('show-details', entry, trigger)"
          @preview-image="(image, trigger) => $emit('preview-image', image, trigger)" />
      </div>
      <div v-if="projects.length > previewLimit" class="playground-footer">
        <p role="status" aria-live="polite">Showing {{ visibleProjects.length }} of {{ projects.length }} games</p>
        <button ref="toggle" type="button" :aria-expanded="expanded" aria-controls="playground-games"
          @click="toggleProjects">
          {{ expanded ? 'Show fewer games' : `Show all games (${projects.length})` }}
          <span aria-hidden="true">{{ expanded ? '−' : '+' }}</span>
        </button>
      </div>
    </template>
    <p v-else class="playground-empty">Game projects will appear here once they are ready.</p>
  </section>
</template>

<script>
import { playgroundProjects } from '@/data/playground';
import PlaygroundCard from './PlaygroundCard.vue';

export default {
  name: 'PlaygroundPanel',
  components: { PlaygroundCard },
  props: { projects: { type: Array, default: () => playgroundProjects } },
  emits: ['show-details', 'preview-image'],
  data() { return { expanded: false, previewLimit: 3 }; },
  computed: {
    visibleProjects() { return this.expanded ? this.projects : this.projects.slice(0, this.previewLimit); },
  },
  methods: {
    toggleProjects() {
      this.expanded = !this.expanded;
      if (!this.expanded) {
        this.$nextTick(() => this.$refs.toggle?.scrollIntoView({ block: 'nearest', behavior: 'instant' }));
      }
    },
  },
};
</script>

<style scoped>
.playground-section {
  margin-top: 56px;
  padding: 28px;
  border: 1px solid rgba(106, 65, 144, 0.14);
  border-radius: 24px;
  background: rgba(255, 253, 249, 0.65);
  overflow-wrap: anywhere;
}

.playground-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.playground-eyebrow {
  margin: 0 0 8px;
  color: #765e87;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 10px;
  color: #4d355f;
  font-size: 1.4rem;
  font-weight: 700;
}

h3 svg {
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  color: #86659f;
}

.playground-intro {
  margin: 0;
  color: #695b73;
  font-size: 0.9rem;
  line-height: 1.7;
}

.playground-count {
  flex-shrink: 0;
  padding: 5px 9px;
  border-radius: 999px;
  color: #695473;
  background: #f1eaf7;
  font-size: 0.75rem;
}

.playground-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.playground-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 22px;
}

.playground-footer p {
  margin: 0;
  color: #695b73;
  font-size: 0.82rem;
}

.playground-footer button {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  min-height: 44px;
  padding: 10px 16px;
  border: 1px solid #cbb8d9;
  border-radius: 999px;
  color: #62417d;
  background: #fffdf9;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.playground-footer button:hover {
  background: #f3ecf9;
}

.playground-footer button:focus-visible {
  outline: 3px solid #8052aa;
  outline-offset: 4px;
}

.playground-empty {
  margin: 0;
  padding: 18px 20px;
  border: 1px dashed #d8cadd;
  border-radius: 14px;
  color: #695b73;
  background: rgba(255, 255, 255, 0.55);
  font-size: 0.88rem;
  line-height: 1.7;
}

@media (max-width: 1023px) {
  .playground-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 599px) {
  .playground-section {
    margin-top: 40px;
    padding: 20px 16px;
  }

  .playground-heading {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
  }

  .playground-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
