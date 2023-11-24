<script>
import axios from 'axios';
export default {
    name: 'ProjectsView',
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
    }
}
</script>

<template>
    <h1>Projects</h1>
    <section>
        <div class="container">
            <div class="row">
                <div class="col" v-for="project in projects.data">
                    <div class="card">
                        <h4>{{ project.title }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>