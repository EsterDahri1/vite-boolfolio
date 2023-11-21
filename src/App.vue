<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      project_api: '/api/project',
      projects: [],
    };
  },
  methods: {
    getProjects() {
      const url = this.base_url + this.project_api;
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.projects = response.result;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    getProjects()
  },
  components: {
    AppHeader,
    AppFooter,
    ProjectCard
  }
}
</script>

<template>
  <AppHeader />

  <main>
    <RouterView />
  </main>

  <AppFooter />
</template>

<style></style>
