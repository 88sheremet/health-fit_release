<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="page">
        <div class="header">
          <div class="title">Еженедельное задание</div>

          <div class="subtitle">Неделя {{ store.currentWeek }}</div>
        </div>

        <q-card class="task-card">
          <div class="badge">🎯 Задание недели</div>

          <div class="task-title">
            {{ store.currentTask.nameProgram }}
          </div>

          <div class="section">
            <div class="section-title">Что делать</div>

            <div class="text">
              {{ store.currentTask.whatDoing }}
            </div>
          </div>

          <div class="section">
            <div class="section-title">Зачем это нужно</div>

            <div class="text">
              {{ store.currentTask.whyDoing }}
            </div>
          </div>

          <q-btn
            v-if="!store.isCompleted()"
            unelevated
            color="green"
            class="complete-btn"
            label="Выполнил задание"
            @click="store.completeCurrentTask()"
          />

          <q-banner v-else rounded class="success-banner">
            ✅ Задание недели выполнено
          </q-banner>
        </q-card>
      </q-page>
    </q-page-container>

    <BottomNavigation />
  </q-layout>
</template>

<script setup lang="ts">
import BottomNavigation from "../components/BottomNavigation.vue";
import { useWeeklyTaskStore } from "../stores/weeklyTasks";

const store = useWeeklyTaskStore();
</script>

<style scoped>
.page {
  padding: 20px;
  padding-bottom: 60px;
  background: linear-gradient(180deg, #f5f9ff, #eef7f2);
  min-height: 100vh;
}

.header {
  margin-bottom: 20px;
}

.title {
  font-size: 30px;
  font-weight: 700;
}

.subtitle {
  color: #777;
  margin-top: 4px;
}

.task-card {
  border-radius: 24px;
  padding: 24px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  background: #e8f5e9;
  color: #2e7d32;

  padding: 8px 14px;
  border-radius: 999px;

  font-weight: 600;

  margin-bottom: 20px;
}

.task-title {
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 24px;
}

.section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  font-weight: 700;

  margin-bottom: 10px;
}

.text {
  line-height: 1.7;
  color: #555;
  white-space: pre-line;
}

.complete-btn {
  width: 100%;
  height: 54px;
  border-radius: 16px;
}

.success-banner {
  background: #e8f5e9;
  color: #2e7d32;
}
</style>