import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/blog', component: BlogView },
    { path: '/contacts', component: ContactsView },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export { router }