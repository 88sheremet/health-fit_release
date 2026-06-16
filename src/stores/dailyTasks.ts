import { defineStore } from "pinia";
import { getDayIndex, isRestDayByDate } from "../utils/taskEngine";

import food from "../mocks/dailyTasks/dailyFoodTasks.json";
import mental from "../mocks/dailyTasks/dailyMentalTasks.json";
import physical from "../mocks/dailyTasks/dailyPhysicalTasks.json";

interface Task {
  id: string;
  type: "food" | "mental" | "physical";
  title: string;
  reward: number;
  whatDoing: any;
  whyDoing: string;
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

      const foodTask = food.dailyFoodTasks[index % food.dailyFoodTasks.length];

      const mentalTask =
        mental.dailyMentalTasks[index % mental.dailyMentalTasks.length];

      const physicalTask =
        physical.dailyPhysicalTasks[index % physical.dailyPhysicalTasks.length];

      return [
        {
          id: `food-${index}`,
          type: "food",
          title: foodTask.nameProgram,
          reward: 10,
          whatDoing: foodTask.whatDoing,
          whyDoing: foodTask.whyDoing,
        },

        {
          id: `mental-${index}`,
          type: "mental",
          title: mentalTask.nameProgram,
          reward: 10,
          whatDoing: mentalTask.whatDoing,
          whyDoing: mentalTask.whyDoing,
        },

        {
          id: `physical-${index}`,
          type: "physical",
          title: physicalTask.nameProgram,
          reward: 15,
          whatDoing: physicalTask.whatDoing,
          whyDoing: physicalTask.whyDoing,
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
