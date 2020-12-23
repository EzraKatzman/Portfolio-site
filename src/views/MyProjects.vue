<template>
  <div class="h-full">
    <div class="flex h-full justify-center">
      <Project v-for="(project, index) in projects" :key="index" :project="project"  class="h-64 my-auto mx-4 border-b-4 border-orange-400"/>
    </div>
  </div> 
</template>

<script>
  import Project from '../components/Projects.vue'
  import projects from '../content/projects.js'

  export default {
    data() {
      return {
        projects: projects
      }
    },

    name: "MyProjects",
    components: {
      Project,

    }
  }
</script>
