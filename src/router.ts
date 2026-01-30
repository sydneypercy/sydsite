import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./home.vue";
import AboutView from "./about.vue";
import SocialView from "./socials.vue";
const routes = [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
    { path: "/socials", component: SocialView }
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes
});
