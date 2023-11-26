<script>
import axios from 'axios';
export default {
    name: 'ProjectCard',
    data() {
        return {
            project_api: 'http://localhost:8000/api/projects',
            projects: [],
        }
    },
    mounted() {
        axios
            .get(this.project_api)
            .then(response => {
                console.log(response);
                this.projects = response.data.result
            })
            .catch(err => {
                console.error(err);
            })
    },
}
</script>

<template>
    <section>
        <div class="container py-4">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="project in projects.data">
                    <div class="card rounded-0 shadow p-1 h-100">
                        <img class="card-img-top" :src="project.cover_image" alt="Title">
                        <div class="card-body">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p class="card-text">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>