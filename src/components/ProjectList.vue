<script>
import axios from 'axios';
import { state } from '../state.js';
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'projectList',
    components: {
        ProjectCard
    },
    data() {
        return {
            state,
            blog_api: '/api/projects',
            projects: null,

        }
    },
    methods: {
        getProjects() {
            const url = this.state.base_url + this.blog_api;
            console.log(url)
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
    },
    mounted() {
        this.getProjects();
    }
}




</script>


<template>
    <section class="projects" v-if="projects">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">



                <ProjectCard :project="project" v-for="project in projects.data"></ProjectCard>


            </div>
        </div>
    </section>
</template>