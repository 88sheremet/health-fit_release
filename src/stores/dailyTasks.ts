import { defineStore } from "pinia";
import { getDayIndex, isRestDayByDate } from "../utils/taskEngine";

import food from "../mocks/dailyTasks/dailyFoodTasks.json";
import mental from "../mocks/dailyTasks/dailyMentalTasks.json";
import physical from "../mocks/dailyTasks/dailyPhysicalTasks.json";

interface Task {
  id: string;
  title: string;
  reward: number;
}

interface TaskState {
  startDate: string;
  completed: Record<string, boolean>;
  energy: number;
  streak: number;
}

export const useTaskStore = defineStore("tasks", {
  state: (): TaskState => ({
    startDate: "",
    completed: {},
    energy: 40,
    streak: 0,
  }),

  getters: {
    dayIndex(state) {
      if (!state.startDate) return 1;
      return getDayIndex(state.startDate);
    },

    isRestDay(state): boolean {
      return isRestDayByDate(new Date());
    },

    todayTasks(): Task[] {
      if (this.isRestDay) return [];

      const index = (this.dayIndex - 1) % 30;

      const f = food.dailyFoodTasks[index % food.dailyFoodTasks.length];
      const m = mental.dailyMentalTasks[index % mental.dailyMentalTasks.length];
      const p =
        physical.dailyPhysicalTasks[index % physical.dailyPhysicalTasks.length];

      return [
        {
          id: `food-${index}`,
          title: f.nameProgram,
          reward: 10,
        },
        {
          id: `mental-${index}`,
          title: m.nameProgram,
          reward: 10,
        },
        {
          id: `physical-${index}`,
          title: p.nameProgram,
          reward: 15,
        },
      ];
    },

    completedCount(state): number {
      return Object.values(state.completed).filter(Boolean).length;
    },
  },

  actions: {
    init() {
      if (!this.startDate) {
        this.startDate = new Date().toISOString();
      }
    },

    completeTask(task: Task) {
      if (this.completed[task.id]) return;

      this.completed[task.id] = true;
      this.energy += task.reward;
    },

    isDone(id: string) {
      return !!this.completed[id];
    },
  },

  persist: true,
});
