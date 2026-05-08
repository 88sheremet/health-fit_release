<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="bg-grey-1">
        <!-- HEADER -->
        <div class="q-pa-md">
          <div class="row items-center justify-between">
            <div>
              <div class="text-h6">Привет 👋</div>
              <div class="text-caption text-grey">
                День {{ day }} • серия {{ streak }} 🔥
              </div>
            </div>

            <q-avatar color="primary" text-color="white">
              {{ streak }}
            </q-avatar>
          </div>

          <!-- ENERGY -->
          <q-card class="q-mt-md q-pa-md bg-primary text-white">
            <div class="row items-center justify-between">
              <div>
                <div class="text-subtitle2">Энергия</div>
                <div class="text-h5">{{ energy }} ⚡</div>
              </div>

              <q-circular-progress
                :value="energy"
                :max="maxEnergy"
                size="60px"
                color="yellow"
                track-color="white"
                show-value
              />
            </div>
          </q-card>

          <!-- DAILY GOAL -->
          <q-card class="q-mt-md q-pa-md">
            <div class="text-subtitle2">Цель дня</div>
            <div class="text-h6">
              {{ completedTasks }}/{{ tasks.length }} выполнено
            </div>

            <q-linear-progress
              class="q-mt-sm"
              :value="progress"
              color="positive"
            />
          </q-card>
        </div>

        <!-- QUICK ACTIONS -->
        <div class="q-px-md row q-col-gutter-sm q-mb-md">
          <div class="col-4">
            <q-btn
              unelevated
              color="primary"
              class="full-width"
              label="💧 Вода"
              @click="quickAdd(3)"
            />
          </div>
          <div class="col-4">
            <q-btn
              unelevated
              color="secondary"
              class="full-width"
              label="🧘 Разминка"
              @click="quickAdd(5)"
            />
          </div>
          <div class="col-4">
            <q-btn
              unelevated
              color="accent"
              class="full-width"
              label="🚶 Шаги"
              @click="quickAdd(4)"
            />
          </div>
        </div>

        <!-- TASK LIST -->
        <div class="q-px-md">
          <q-card
            v-for="task in tasks"
            :key="task.id"
            class="q-mb-md"
            :class="{ 'bg-green-1': task.done }"
          >
            <q-card-section>
              <div class="row items-center justify-between">
                <div>
                  <div class="text-subtitle1">
                    {{ task.title }}
                  </div>
                  <div class="text-caption text-grey">
                    +{{ task.reward }} энергии
                  </div>
                </div>

                <q-badge v-if="task.done" color="positive" label="Готово" />
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="between">
              <q-btn
                flat
                color="primary"
                label="Начать"
                @click="startTask(task)"
              />

              <q-btn
                unelevated
                color="positive"
                :label="task.done ? 'Сделано' : 'Выполнено'"
                :disable="task.done"
                @click="completeTask(task)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";

/* STATE */
const day = ref(1);
const streak = ref(3);

const energy = ref(40);
const maxEnergy = 100;

const tasks = ref([
  { id: 1, title: "Почистить зубы", reward: 5, done: false },
  { id: 2, title: "Сделать разминку", reward: 10, done: false },
  { id: 3, title: "Выпить воду", reward: 5, done: false },
]);

/* COMPUTED */
const completedTasks = computed(() => tasks.value.filter((t) => t.done).length);

const progress = computed(() =>
  tasks.value.length ? completedTasks.value / tasks.value.length : 0
);

/* ACTIONS */
function startTask(task) {
  console.log("start:", task.title);
}

function completeTask(task) {
  if (task.done) return;

  task.done = true;
  energy.value = Math.min(maxEnergy, energy.value + task.reward);
}

function quickAdd(value) {
  energy.value = Math.min(maxEnergy, energy.value + value);
}
</script>

<style scoped>
</style>