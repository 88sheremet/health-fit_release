import { createRouter, createWebHistory } from "vue-router";

import WelcomePage from "../pages/WelcomePage.vue";
import ScreeningPage from "../pages/ScreeningPage.vue";
import QuestionsPage from "../pages/QuestionsPage.vue";
import MainMenuPage from "../pages/MainMenuPage.vue";
import PhysicalResultPage from "../pages/PhysicalResultPage.vue";
import FoodResultPage from "../pages/FoodResultPage.vue";
import MindResultPage from "../pages/MindResultPage.vue";
import DailyTasks from "../components/DailyTasks.vue";

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
  {
    path: "/physical-result",
    component: PhysicalResultPage,
  },
  {
    path: "/food-result",
    component: FoodResultPage,
  },
  {
    path: "/mind-result",
    component: MindResultPage,
  },
   {
    path: "/daily",
    component: DailyTasks,
  }
  //  {
  //   path: "/weekly",
  //   component: WeeklyTasks,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
