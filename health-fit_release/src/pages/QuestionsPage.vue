<template>
  <div class="questions-page">
    <!-- HEADER -->
    <div class="header">
      <div class="header-top">
        <div class="block-counter">
          Блок {{ screeningStore.currentBlock + 1 }} из
          {{ screeningStore.blocks.length }}
        </div>

        <div class="questions-counter">
          {{ answeredQuestions }}
          /
          {{ screeningStore.currentBlockData.questions.length }}
        </div>
      </div>

      <q-linear-progress
        rounded
        size="10px"
        :value="screeningStore.progress"
        color="green"
        track-color="grey-3"
        class="progress-bar"
      />
    </div>

    <!-- TITLE -->
    <div class="title-section">
      <div class="title">
        {{ screeningStore.currentBlockData.title }}
      </div>

      <div class="subtitle">Оцени каждое утверждение по шкале от 1 до 5</div>
    </div>

    <!-- QUESTIONS -->
    <div class="questions-list">
      <q-card
        v-for="(question, index) in screeningStore.currentBlockData.questions"
        :key="question.id"
        flat
        class="question-card"
        :class="{
          invalid: showValidation && !screeningStore.answers[question.id],
        }"
      >
        <!-- QUESTION -->
        <div class="question-top">
          <div class="question-number">
            {{ index + 1 }}
          </div>

          <div class="question-text">
            {{ question.text }}
          </div>
        </div>

        <!-- ANSWERS -->
        <div class="answers">
          <button
            v-for="item in 5"
            :key="item"
            class="answer-btn"
            :class="{
              active: screeningStore.answers[question.id] === item,
            }"
            @click="screeningStore.setAnswer(question.id, item)"
          >
            {{ item }}
          </button>
        </div>

        <!-- LABELS -->
        <div class="scale-labels">
          <span> Хорошо </span>

          <span> Плохо </span>
        </div>
      </q-card>
    </div>

    <!-- FOOTER -->
    <div class="footer">
      <q-btn
        unelevated
        no-caps
        class="next-btn"
        :label="screeningStore.isLastBlock() ? 'Завершить' : 'Следующий блок'"
        @click="goNext"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { useQuasar } from "quasar";

import { useScreeningStore } from "../stores/screening";

const screeningStore = useScreeningStore();

const $q = useQuasar();

const showValidation = ref(false);

const answeredQuestions = computed(() => {
  return screeningStore.currentBlockData.questions.filter(
    (question) => screeningStore.answers[question.id]
  ).length;
});

const goNext = () => {
  showValidation.value = true;

  const isValid = screeningStore.validateCurrentBlock();

  if (!isValid) {
    $q.notify({
      message: "Ответь на все вопросы блока",

      position: "top",

      timeout: 2000,

      color: "white",

      textColor: "dark",

      icon: "warning",

      classes: "custom-notify",
    });

    return;
  }

  screeningStore.nextBlock();

  showValidation.value = false;
};
</script>

<style scoped lang="scss">
.questions-page {
  min-height: 100vh;

  padding: 24px 20px 120px;

  background: linear-gradient(180deg, #f5f9ff 0%, #eef7f2 100%);
}

.header {
  position: sticky;
  top: 0;

  z-index: 10;

  padding-top: 10px;
  padding-bottom: 20px;

  backdrop-filter: blur(10px);
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 14px;
}

.block-counter {
  font-size: 14px;
  font-weight: 700;

  color: #4caf50;
}

.questions-counter {
  font-size: 14px;
  font-weight: 600;

  color: #7b8190;
}

.progress-bar {
  border-radius: 30px;
}

.title-section {
  margin-top: 24px;
  margin-bottom: 32px;
}

.title {
  font-size: 32px;
  font-weight: 700;

  line-height: 1.15;

  color: #1d1d1f;

  margin-bottom: 12px;
}

.subtitle {
  font-size: 16px;
  line-height: 1.6;

  color: #6b7280;
}

.questions-list {
  display: flex;
  flex-direction: column;

  gap: 18px;
}

.question-card {
  padding: 22px 20px;

  border-radius: 28px;

  background: rgba(255, 255, 255, 0.72);

  backdrop-filter: blur(16px);

  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);

  transition: transform 0.2s ease, border 0.2s ease;
}

.question-card.invalid {
  border: 2px solid rgba(244, 67, 54, 0.35);
}

.question-top {
  display: flex;

  gap: 14px;

  margin-bottom: 24px;
}

.question-number {
  width: 34px;
  height: 34px;

  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(76, 175, 80, 0.12);

  color: #43a047;

  font-size: 14px;
  font-weight: 700;

  flex-shrink: 0;
}

.question-text {
  font-size: 17px;
  font-weight: 600;

  line-height: 1.5;

  color: #1d1d1f;
}

.answers {
  display: flex;
  justify-content: space-between;

  gap: 10px;
}

.answer-btn {
  width: 54px;
  height: 54px;

  border: none;
  border-radius: 18px;

  background: #f3f4f6;

  color: #374151;

  font-size: 17px;
  font-weight: 700;

  cursor: pointer;

  transition: all 0.25s ease;
}

.answer-btn:hover {
  transform: translateY(-2px);
}

.answer-btn.active {
  background: linear-gradient(135deg, #6bcb77 0%, #4caf50 100%);

  color: white;

  transform: translateY(-2px);

  box-shadow: 0 10px 20px rgba(76, 175, 80, 0.28);
}

.scale-labels {
  display: flex;
  justify-content: space-between;

  margin-top: 14px;

  font-size: 13px;

  color: #9ca3af;
}

.footer {
  position: fixed;

  left: 0;
  right: 0;
  bottom: 0;

  padding: 18px 20px 26px;

  background: rgba(255, 255, 255, 0.75);

  backdrop-filter: blur(18px);

  border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.next-btn {
  width: 100%;
  height: 60px;

  border-radius: 20px;

  font-size: 17px;
  font-weight: 700;

  background: linear-gradient(135deg, #6bcb77 0%, #4caf50 100%);

  color: white;

  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.35);
}
</style>