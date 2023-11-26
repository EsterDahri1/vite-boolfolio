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

    <div class="container">
        <div class="pagination my-3">
            <nav aria-label="Page navigation">
                <ul class="pagination    ">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>