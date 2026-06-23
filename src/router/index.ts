import { createRouter, createWebHistory } from "vue-router";

import WelcomePage from "../pages/WelcomePage.vue";
import ScreeningPage from "../pages/ScreeningPage.vue";
import QuestionsPage from "../pages/QuestionsPage.vue";
import MainMenuPage from "../pages/MainMenuPage.vue";

import PhysicalResultPage from "../pages/PhysicalResultPage.vue";
import FoodResultPage from "../pages/FoodResultPage.vue";
import MindResultPage from "../pages/MindResultPage.vue";

import DailyTasks from "../components/DailyTasks.vue";
import WeeklyTask from "../components/WeeklyTask.vue";

import NotFoundPage from "../pages/NotFoundPage.vue";

import { getStartRoute } from "./getStartRoute";
import { useScreeningStore } from "../stores/screening";

export const routes = {
  onboarding: {
    welcome: "/",
    screening: "/screening",
    questions: "/questions",
  },

  results: {
    physical: "/physical-result",
    food: "/food-result",
    mind: "/mind-result",
  },

  recovery: {
    menu: "/menu",
    daily: "/daily",
    weekly: "/weekly",
    journal: "/journal",
  },
} as const;

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: routes.onboarding.welcome,
      component: WelcomePage,
    },
    {
      path: routes.onboarding.screening,
      component: ScreeningPage,
    },
    {
      path: routes.onboarding.questions,
      component: QuestionsPage,
    },

    {
      path: routes.recovery.menu,
      component: MainMenuPage,
    },

    {
      path: routes.results.physical,
      component: PhysicalResultPage,
    },
    {
      path: routes.results.food,
      component: FoodResultPage,
    },
    {
      path: routes.results.mind,
      component: MindResultPage,
    },

    {
      path: routes.recovery.daily,
      component: DailyTasks,
    },
    {
      path: routes.recovery.weekly,
      component: WeeklyTask,
    },

    {
      path: "/:pathMatch(.*)*",
      component: NotFoundPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useScreeningStore();

  const recoveryRoutes = [
    routes.recovery.menu,
    routes.recovery.daily,
    routes.recovery.weekly,
    routes.recovery.journal,
  ];

  const isRecoveryRoute = recoveryRoutes.includes(to.path as any);

  if (isRecoveryRoute && !store.screeningCompleted) {
    return next(routes.onboarding.welcome);
  }

  if (to.path === "/") {
    const startRoute = getStartRoute(store);

    if (startRoute && startRoute !== "/") {
      return next(startRoute);
    }
  }

  next();
});

export default router;
