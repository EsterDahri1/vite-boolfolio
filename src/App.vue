<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      project_api: 'http://127.0.0.1:8000/api/project',
      projects: [],
    }
  },
  mounted() {
    axios
      .get(this.project_api)
      .then(response => { console.log(response) })
      .catch(err => {
        console.error(err);
      })
  }
}
</script>

<template>
  <div>
    <p>Hello world</p>
  </div>
</template>

<style></style>
