<script>
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
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
