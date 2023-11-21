
  
<script>
import { state } from '../state.js';
import axios from 'axios';
export default {
    name: 'SingleProjectView',
    data() {
        return {
            state,
            project: {},
            type: '',
            technologies: [],
        }
    },
    mounted() {
        const url = `http://127.0.0.1:8000/api/posts/${this.$route.params.slug}`;
        axios.get(url)
            .then(response => {
                console.log(response.result);
                this.project = response.data.result
            })
            .catch(err => {
                console.log(err.message);
            })

    }
}
</script>

<template>
    <div>

        <div class="container">
            <div class="cover_image">
                <img class="img-fluid object-fit-cover" :src="'http://127.0.0.1:8000/storage/' + project.cover_image" alt=""
                    style="height: 400px;">
            </div>
            <h1>{{ project.title }}</h1>
            <p>{{ project.content }}</p>
        </div>

    </div>
</template>
<style lang="scss" scoped></style>