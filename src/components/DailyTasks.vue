<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <q-page class="page">

        <div class="header">
          <div>
            <div class="title">Привет 👋</div>
            <div class="subtitle">
              День {{ store.dayIndex }}
            </div>
          </div>

          <q-avatar color="primary" text-color="white">
            {{ store.streak }}
          </q-avatar>
        </div>

        <q-card class="energy-card">
          <div class="row justify-between items-center">
            <div>
              <div class="label">Энергия</div>
              <div class="value">{{ store.energy }} ⚡</div>
            </div>

            <q-circular-progress
              :value="store.energy"
              :max="100"
              size="60px"
              color="green"
            />
          </div>
        </q-card>

        <div v-if="store.isRestDay" class="rest-card">
          <div class="emoji">🌿</div>
          <div class="rest-title">Сегодня полный отдых</div>
          <div class="rest-text">
            Восстановление — это тоже прогресс
          </div>
        </div>

        <div v-else class="tasks">

          <q-card
            v-for="task in tasks"
            :key="task.id"
            class="task-card"
            :class="{ done: store.isDone(task.id) }"
          >
            <div class="task-title">
              {{ task.title }}
            </div>

            <div class="task-footer">
              <div class="reward">
                +{{ task.reward }} ресурса
              </div>

              <q-btn
                unelevated
                dense
                color="green"
                :label="store.isDone(task.id) ? 'Готово' : 'Выполнить'"
                :disable="store.isDone(task.id)"
                @click="store.completeTask(task)"
              />
            </div>
          </q-card>

        </div>

      </q-page>
    </q-page-container>

    <BottomNavigation />

  </q-layout>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import BottomNavigation from "../components/BottomNavigation.vue";
import { useTaskStore } from "../stores/dailyTasks";

const store = useTaskStore();

onMounted(() => {
  store.init();
});

const tasks = computed(() => store.todayTasks);
</script>

<style scoped>
.page {
  padding: 20px;
  background: linear-gradient(180deg, #f5f9ff, #eef7f2);
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 28px;
  font-weight: 700;
}

.subtitle {
  color: #777;
}

.energy-card {
  margin-top: 20px;
  padding: 20px;
  border-radius: 20px;
  background: white;
}

.value {
  font-size: 22px;
  font-weight: 700;
}

.tasks {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-card {
  padding: 16px;
  border-radius: 18px;
  background: white;
  transition: 0.2s;
}

.task-card.done {
  opacity: 0.6;
  transform: scale(0.98);
}

.task-title {
  font-weight: 600;
  margin-bottom: 10px;
}

.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reward {
  font-size: 13px;
  color: #4caf50;
}

.rest-card {
  margin-top: 30px;
  text-align: center;
  padding: 30px;
  border-radius: 24px;
  background: white;
}

.emoji {
  font-size: 40px;
}

.rest-title {
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
}

.rest-text {
  color: #777;
}
</style>