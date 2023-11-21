<script>
export default {
    name: 'AboutView',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container py-5">
        <div class="p-5 mb-4 bg-danger-subdle rounded-3 d-flex">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">About me</h1>
                <p class="col-md-8 fs-4">Hello everyone, I'm Ester a former full-stack web developer. I'm 23 yo and I'm
                    eager to always learn new things. I love languages and coding. Thanks for being here! Please be sure to
                    check my projects in the dedicated page.</p>
                <RouterLink to="/projects" class="btn btn-danger btn-lg" type="button">Projects</RouterLink>
            </div>
            <img class="img-fluid" src="../assets/img/avataaars.png" alt="A cute avatar representing me">
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    height: 400px;
    width: 400px;
}
</style>