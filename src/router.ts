import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/home.vue";
import AboutView from "@/views/about.vue";
import SocialView from "@/views/socials.vue";
import NotFoundView from "./views/notfound.vue";

const routes = [
    { path: "/", name: "home", component: HomeView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/socials", name: "socials", component: SocialView },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFoundView
    }
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
