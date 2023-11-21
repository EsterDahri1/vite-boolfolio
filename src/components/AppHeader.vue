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
                    <div class="admin">
                        <a href="http://127.0.0.1:8000/admin" class="btn btn-outline-light" target="__blank">
                            Admin <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                <path fill-rule="evenodd"
                                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
svg {
    fill: white;
}
</style>