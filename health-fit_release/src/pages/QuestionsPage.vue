<template>
  <div class="questions-page" ref="pageRef">
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
        ref="questionRefs"
        flat
        class="question-card"
        :class="{
          invalid:
            showValidation && screeningStore.answers[question.id] === undefined,
        }"
      >
        <div class="question-top">
          <div class="question-number">
            {{ index + 1 }}
          </div>

          <div class="question-text">
            {{ question.text }}
          </div>
        </div>

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

        <div class="scale-labels">
          <span>Хорошо</span>
          <span>Плохо</span>
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

    <!-- КРАСИВЫЙ ALERT -->
    <transition name="fade">
      <div v-if="showErrorAlert" class="custom-alert">
        <div class="alert-card">
          <q-icon name="warning_amber" class="alert-icon" />

          <div class="alert-title">Не все вопросы заполнены</div>

          <div class="alert-text">
            Ответь на выделенный вопрос, чтобы продолжить
          </div>

          <q-btn
            flat
            no-caps
            class="alert-btn"
            label="Понял"
            @click="showErrorAlert = false"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from "vue";
import { useScreeningStore } from "../stores/screening";

const screeningStore = useScreeningStore();

const pageRef = ref<HTMLElement | null>(null);
const questionRefs = ref<any[]>([]);

const showValidation = ref(false);
const showErrorAlert = ref(false);

/**
 * заполненные ответы
 */
const answeredQuestions = computed(
  () =>
    screeningStore.currentBlockData.questions.filter(
      (q) => screeningStore.answers[q.id] !== undefined
    ).length
);

/**
 * скролл к первому пустому вопросу
 */
const scrollToFirstEmpty = async () => {
  await nextTick();

  const questions = screeningStore.currentBlockData.questions;

  const index = questions.findIndex(
    (q) => screeningStore.answers[q.id] === undefined
  );

  if (index === -1) return;

  const el = questionRefs.value?.[index];

  el?.$el?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

/**
 * кастомный красивый alert
 */
const showAlert = () => {
  showErrorAlert.value = true;

  setTimeout(() => {
    showErrorAlert.value = false;
  }, 2500);
};

/**
 * next block
 */
const goNext = async () => {
  showValidation.value = true;

  const isValid = screeningStore.validateCurrentBlock();

  if (!isValid) {
    showAlert();
    await scrollToFirstEmpty();
    return;
  }

  screeningStore.nextBlock();

  showValidation.value = false;

  await nextTick();

  pageRef.value?.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped lang="scss">
.questions-page {
  height: 100vh;
  overflow-y: auto;

  padding: 24px 20px 140px;

  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;

  background: radial-gradient(
      circle at 10% 0%,
      rgba(76, 175, 80, 0.12),
      transparent 45%
    ),
    radial-gradient(circle at 90% 20%, rgba(33, 150, 243, 0.1), transparent 40%),
    linear-gradient(180deg, #f8fbff 0%, #eef7f2 100%);
}

/* ===== HEADER ===== */
.header {
  position: sticky;
  top: 0;
  z-index: 20;

  padding: 14px 14px 16px;

  border-radius: 0 0 22px 22px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.block-counter {
  font-size: 13px;
  font-weight: 800;
  color: #22c55e;
  letter-spacing: 0.3px;
}

.questions-counter {
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
}

/* ===== TITLE ===== */
.title-section {
  margin-top: 26px;
  margin-bottom: 30px;

  animation: fadeInUp 0.4s ease;
}

.title {
  font-size: 30px;
  font-weight: 900;

  line-height: 1.15;

  color: #111827;

  letter-spacing: -0.5px;
}

.subtitle {
  margin-top: 10px;

  font-size: 15px;
  line-height: 1.6;

  color: #6b7280;
}

/* ===== LIST ===== */
.questions-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* ===== CARD ===== */
.question-card {
  padding: 22px;

  border-radius: 26px;

  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.5);

  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);

  transition: all 0.25s ease;
}

.question-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);
}

.question-card.invalid {
  border: 1px solid rgba(239, 68, 68, 0.4);
  box-shadow: 0 18px 50px rgba(239, 68, 68, 0.08);
  animation: shake 0.3s ease;
}

/* ===== QUESTION HEADER ===== */
.question-top {
  display: flex;
  gap: 14px;

  margin-bottom: 18px;
}

.question-number {
  width: 38px;
  height: 38px;

  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    rgba(34, 197, 94, 0.15),
    rgba(34, 197, 94, 0.05)
  );

  color: #16a34a;

  font-size: 14px;
  font-weight: 900;
}

.question-text {
  font-size: 16px;
  font-weight: 650;
  line-height: 1.5;

  color: #111827;
}

/* ===== ANSWERS ===== */
.answers {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.answer-btn {
  width: 52px;
  height: 52px;

  border-radius: 16px;

  border: 1px solid rgba(0, 0, 0, 0.06);

  background: #f9fafb;

  color: #374151;

  font-size: 15px;
  font-weight: 800;

  cursor: pointer;

  transition: all 0.2s ease;
}

.answer-btn:hover {
  transform: translateY(-2px);
  background: #eef2f7;
}

.answer-btn.active {
  background: linear-gradient(135deg, #6bcb77, #22c55e);
  color: white;

  transform: translateY(-3px);

  box-shadow: 0 12px 28px rgba(34, 197, 94, 0.35);
}

/* ===== SCALE ===== */
.scale-labels {
  display: flex;
  justify-content: space-between;

  margin-top: 10px;

  font-size: 12px;
  color: #9ca3af;
}

/* ===== FOOTER ===== */
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 18px 20px 26px;

  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);

  border-top: 1px solid rgba(0, 0, 0, 0.05);

  box-shadow: 0 -10px 35px rgba(0, 0, 0, 0.06);
}

.next-btn {
  width: 100%;
  height: 58px;

  border-radius: 18px;

  font-size: 16px;
  font-weight: 900;

  background: linear-gradient(135deg, #22c55e, #16a34a);

  color: white;

  box-shadow: 0 14px 35px rgba(34, 197, 94, 0.35);

  transition: all 0.2s ease;
}

.next-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 45px rgba(34, 197, 94, 0.45);
}

.next-btn:active {
  transform: scale(0.98);
}

/* ===== ANIMATIONS ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  50% {
    transform: translateX(4px);
  }
  75% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>