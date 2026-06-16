import { routes } from "./index";

export function getStartRoute(store: any) {
  if (store.screeningCompleted) {
    return routes.recovery.daily;
  }

  return routes.onboarding.welcome;
}
