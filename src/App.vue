<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      project_api: '/api/project',
      projects: [],
    }
  },
  methods: {
    getProjects() {
      const url = this.base_url + this.project_api;
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.projects = response.result
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-danger shadow">
      <div class="container">
        <a class="navbar-brand text-white" href="#">MyPortfolio</a>
        <button class="navbar-toggler text-white d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link text-white active" href="#" aria-current="page">Home <span
                  class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link text-white" href="#">Contacts</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link text-white" href="#">Blog</a>
            </li>
          </ul>
          <form class="d-flex my-2 my-lg-0">
            <input class="form-control me-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <main></main>
  <footer class="text-center text-lg-start bg-danger-subtle">
    <div class="container d-flex justify-content-center py-5">
      <button type="button" class="btn btn-outline-light btn-lg btn-floating mx-2">

      </button>
      <button type="button" class="btn btn-outline-light btn-lg btn-floating mx-2">

      </button>
      <button type="button" class="btn btn-outline-light btn-lg btn-floating mx-2">

      </button>
      <button type="button" class="btn btn-outline-light btn-lg btn-floating mx-2">

      </button>
    </div>

    <!-- Copyright -->
    <div class="text-center bg-danger text-white p-3">
      &copy; 2023 Copyright:
      <a class="text-white" href="">Boolean</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style></style>
