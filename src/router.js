import {
    createWebHistory,
    createRouter
} from "vue-router";
import Home from "./views/Home.vue";
const history = createWebHistory();
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/myprojects",
        name: "MyProjects",
        component: () =>
        import(/* webpackChunkName: "projects" */ "./views/MyProjects.vue")
    },
    {
        path: "/experience",
        name: 'Experience',
        component: () =>
            import(/* webpackChunkName: "experience" */ "./views/Experience.vue")
    },

];
const router = createRouter({
    history,
    routes
});
export default router;