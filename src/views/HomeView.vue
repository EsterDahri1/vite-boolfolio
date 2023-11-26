<script>
export default {
    name: 'HomeView',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="body">
        <section class="intro">
            <div class="wrapper pt-5 d-flex flex-column align-items-center justify-content-center">
                <h1 class=" text-danger-emphasis text-center">Fullstack Web Developer</h1>
                <h4 class="text-center">Languages are my oxygen.</h4>
                <div class="pt-4">
                    <img height="200" src="../assets/img/avataaars.png" alt="">
                </div>
                <div>
                    <img class="pt-4 mb-0"
                        src="https://www.netsolutions.com/assets/images/software-development-company-implementing-code-bugs.svg"
                        alt="" srcset="">
                </div>
            </div>
        </section>
        <section class="aboutMe bg-danger-subtle py-5">
            <div class="wrapper">
                <h2 class="text-center text-danger-emphasis fw-bolder">
                    Hello, I'm Ester 👋. Welcome to my world &#x2661;
                </h2>
                <p class="text-center text-danger-emphasis pt-2 pb-2 px-5">
                    Hi, I'm a former student at Boolean Fullstack Web Developer course. I've always been passionate about
                    tech
                    and
                    bug problems and I looove languages. I see coding as the language of computers and I feel pretty tech to
                    be
                    able
                    to speak it.
                    I'm pretty confident, reliable and strict when it comes to work, but on a daily basis I'm a
                    funny
                    girl who likes to gossip with her friends.
                </p>
            </div>
        </section>
        <section class="tech">
            <div class="container py-5">
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col types">
                        <div class="card rounded-0 shadow border-dangr text-start">
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Body</p>
                            </div>
                        </div>
                    </div>
                    <div class="col technologies">
                        <div class="card rounded-0 shadow border-dangr text-start">
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Body</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="certificates bg-danger-subtle py-5">
            <div class="container">
                <h2 class=" text-danger-emphasis text-center text-capitalize">Certificates</h2>
                <div class="row row-cols-1 row-cols-md-3 gap-2 flex-nowrap">
                    <div class="card shadow p-4 rounded-0">
                        <img class="img-fluid" src="../assets/img/attestato_boolean.png" alt="">
                    </div>
                    <div class="card shadow p-4 rounded-0">
                        <img class="img-fluid" src="../assets/img/attestato_boolean.png" alt="">
                    </div>
                    <div class="card shadow p-4 rounded-0">
                        <img class="img-fluid" src="../assets/img/attestato_boolean.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.body {
    background-color: #f8fbff;

    .wrapper {
        max-width: 1440px;
        margin: auto;
        width: 60%;
    }

    .certificates {
        .card {
            border: dotted rgb(95, 0, 0) 2px;
        }
    }
}
</style>