import { defineStore } from "pinia";

import weeklyTasks from "../mocks/weeklyTasks/weeklyTasks.json";

interface WeeklyTask {
  nameProgram: string;
  whatDoing: string;
  whyDoing: string;
}

interface WeeklyState {
  completed: Record<number, boolean>;
}

export const useWeeklyTaskStore = defineStore("weeklyTasks", {
  state: (): WeeklyState => ({
    completed: {},
  }),

  getters: {
    currentTask(): WeeklyTask {
      const weekIndex = this.currentWeek - 1;

      return (
        weeklyTasks.weeklyTasks[
          weekIndex % weeklyTasks.weeklyTasks.length
        ]
      );
    },

    currentWeek(): number {
      const startDate =
        localStorage.getItem("recovery-start-date") ||
        new Date().toISOString();

      const diffDays = Math.floor(
        (Date.now() - new Date(startDate).getTime()) /
          (1000 * 60 * 60 * 24)
      );

      return Math.floor(diffDays / 7) + 1;
    },
  },

  actions: {
    completeCurrentTask() {
      this.completed[this.currentWeek] = true;
    },

    isCompleted() {
      return !!this.completed[this.currentWeek];
    },
  },

  persist: true,
});