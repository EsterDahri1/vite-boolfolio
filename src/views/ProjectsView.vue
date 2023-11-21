<script>
import axios from 'axios';
import { state } from '../state.js';
import ProjectList from '../components/ProjectList.vue';
export default {
    name: 'ProjectsView',
    data() {
        return {
            state
        }
    },
    components: {
        ProjectList
    }
}
</script>

<template>
    <div class="container py-5">
        <h1 class="py-1">Projects</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">

            <ProjectList />


        </div>
    </div>
</template>

<style lang="scss" scoped></style>