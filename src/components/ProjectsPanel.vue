<template>
  <div class="projects-panel">
    <template v-if="featuredProject">
      <ProjectCard :project="featuredProject" featured @show-details="openDetails" @preview-image="openImage" />
      <section v-if="otherProjects.length" class="more-projects" aria-labelledby="more-projects-title">
        <h3 id="more-projects-title">More projects</h3>
        <div class="projects-grid">
          <ProjectCard v-for="project in otherProjects" :key="project.id" :project="project"
            @show-details="openDetails" @preview-image="openImage" />
        </div>
      </section>
    </template>
    <div v-else class="projects-empty" role="status">
      <h3>No projects to show yet</h3>
      <p>Project details will appear here once they are ready.</p>
    </div>
    <ProjectDetailsDialog v-if="selectedProject" :project="selectedProject" :trigger="detailsTrigger"
      @close="selectedProject = null" @preview-image="openImage" />
    <ProjectImageViewer v-if="selectedImage" :image="selectedImage" :trigger="imageTrigger"
      @close="selectedImage = null" />
  </div>
</template>

<script>
import '@/assets/project-dialog.css';
import { projects as projectEntries } from '@/data/projects';
import ProjectCard from './ProjectCard.vue';
import ProjectDetailsDialog from './ProjectDetailsDialog.vue';
import ProjectImageViewer from './ProjectImageViewer.vue';

export default {
  name: 'ProjectsPanel',
  components: { ProjectCard, ProjectDetailsDialog, ProjectImageViewer },
  props: { projects: { type: Array, default: () => projectEntries } },
  data() { return { selectedProject: null, detailsTrigger: null, selectedImage: null, imageTrigger: null }; },
  computed: {
    featuredProject() { return this.projects.find(project => project.featured) || this.projects[0]; },
    otherProjects() { return this.projects.filter(project => project !== this.featuredProject); },
  },
  methods: {
    openImage(image, trigger) {
      this.imageTrigger = trigger;
      this.selectedImage = image;
    },
    openDetails(project, trigger) {
      this.detailsTrigger = trigger;
      this.selectedProject = project;
    },
  },
};
</script>

<style scoped>
.projects-panel {
  max-width: 1200px;
  margin: 0 auto;
  color: #2b1a00;
  text-align: left;
}

.more-projects {
  margin-top: 40px;
}

.more-projects > h3 {
  margin: 0 0 20px;
  font-size: 1.5rem;
  font-weight: 700;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.projects-empty {
  padding: 48px 24px;
  border: 1px dashed rgba(43, 26, 0, 0.35);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.5);
  text-align: center;
}

.projects-empty h3 {
  margin: 0 0 18px;
}

.projects-empty p {
  margin: 0;
  line-height: 1.7;
}

@media (max-width: 700px) {
  .projects-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }
  .more-projects {
    margin-top: 32px;
  }
}
</style>
