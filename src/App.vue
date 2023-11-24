<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    RouterView
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
