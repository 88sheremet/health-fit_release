import { createRouter, createWebHistory } from "vue-router";

import WelcomePage from "../pages/WelcomePage.vue";
import ScreeningPage from "../pages/ScreeningPage.vue";
import QuestionsPage from "../pages/QuestionsPage.vue";
import MainMenuPage from "../pages/MainMenuPage.vue";

const routes = [
  {
    path: "/",
    component: WelcomePage,
  },
  {
    path: "/screening",
    component: ScreeningPage,
  },
  {
    path: "/questions",
    component: QuestionsPage,
  },
  {
    path: "/menu",
    component: MainMenuPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
