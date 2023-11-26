<script>
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'ProjectsView',
    data() {
        return {

        }
    },
    components: {
        ProjectCard,
    }
}
</script>

<template>
    <section class="title">
        <div class="container pt-4">
            <h1 class=" text-center text-danger-emphasis fw-bold">Projects</h1>

        </div>
    </section>
    <section class="intro bg-danger-subtle">
        <div class="container">
            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-5 text-danger-emphasis  border rounded-3">
                        <h2>Take a look at what I've created 🧐</h2>
                        <p>
                            This is what I worked for from the beginning of this journey 6 months ago.
                            My blood, sweat and tears.
                            Now I hope to be able to create even more interesting projects using different types of coding
                            languages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <ProjectCard />
</template>

<style lang="scss" scoped></style>