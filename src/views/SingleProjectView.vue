<script>
import axios from 'axios';
export default {
    name: 'SingleProjectView',
    data() {
        return {
            loading: true,
            project: {},
        }
    },
    mounted() {
        const url = `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`;
        axios.get(url)
            .then(resp => {
                //console.log(resp.data.result);
                //console.log(resp.data.success);
                if (resp.data.success) {
                    //console.log('ok project found');
                    // save the project if it exists
                    this.project = resp.data.result
                    this.loading = false;

                } else {
                    // pusha la rotta 404 
                    this.$router.push({ name: 'NotFound' });
                    //console.log('404 project not found');
                }

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

            <div v-if="!loading">
                <div class="cover_image">
                    <img class="img-fluid object-fit-cover" :src="project.cover_image" alt="" style="height: 400px;">
                </div>
                <h1>{{ project.title }}</h1>
                <p>{{ project.description }}</p>

            </div>
            <div v-else>
                loading...
            </div>


        </div>

    </div>
</template>



<style lang="scss" scoped></style>