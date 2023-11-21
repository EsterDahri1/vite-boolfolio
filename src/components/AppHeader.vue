<script>
export default {
    name: 'AppHeader',
    data() {
        return {

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
                            <RouterLink class="nav-link text-white active" to="/" aria-current="page">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link text-white" to="/about">About</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <RouterLink class="nav-link text-white" to="/contacts">Contacts</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <RouterLink class="nav-link text-white" to="/projects">Projects</RouterLink>
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
</template>

<style scoped></style>