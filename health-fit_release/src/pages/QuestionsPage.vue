<template>
  <div class="questions-page">

    <!-- HEADER -->
    <div class="header">

      <div class="progress-info">
        Блок 1 из 3
      </div>

      <q-linear-progress
        rounded
        size="8px"
        :value="0.33"
        color="green"
        class="progress-bar"
      />

    </div>

    <!-- CONTENT -->
    <div class="content">

      <!-- BLOCK TITLE -->
      <q-card
        flat
        class="block-card"
      >

        <div class="block-title">
          Энергия и состояние
        </div>

        <div class="block-description">
          Ответь на вопросы, чтобы определить
          текущее состояние организма
        </div>

      </q-card>

      <!-- QUESTION -->
      <q-card
        flat
        class="question-card"
      >

        <div class="question-counter">
          Вопрос 1 / 10
        </div>

        <div class="question-title">
          Насколько часто ты чувствуешь усталость?
        </div>

        <!-- ANSWERS -->
        <div class="answers">

          <button
            v-for="item in 5"
            :key="item"
            class="answer-btn"
            :class="{ active: selected === item }"
            @click="selected = item"
          >
            {{ item }}
          </button>

        </div>

        <!-- SCALE -->
        <div class="scale-labels">

          <span>
            Никогда
          </span>

          <span>
            Постоянно
          </span>

        </div>

      </q-card>

    </div>

    <!-- FOOTER -->
    <div class="footer">

      <q-btn
        unelevated
        no-caps
        class="next-btn"
        label="Следующий вопрос"
      />

    </div>

  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const selected = ref<number | null>(null)

</script>

<style scoped lang="scss">

.questions-page {
  min-height: 100vh;

  padding: 24px;

  background: linear-gradient(
    180deg,
    #F5F9FF 0%,
    #EEF7F2 100%
  );

  display: flex;
  flex-direction: column;
}

.header {
  padding-top: 12px;
}

.progress-info {
  font-size: 14px;
  font-weight: 600;

  color: #6B7280;

  margin-bottom: 12px;
}

.progress-bar {
  border-radius: 20px;
}

.content {
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.block-card {
  padding: 24px;

  border-radius: 24px;

  background: rgba(255,255,255,0.7);

  backdrop-filter: blur(14px);

  margin-bottom: 20px;

  box-shadow:
    0 10px 30px rgba(0,0,0,0.05);
}

.block-title {
  font-size: 24px;
  font-weight: 700;

  color: #1D1D1F;

  margin-bottom: 10px;
}

.block-description {
  font-size: 15px;
  line-height: 1.5;

  color: #6B7280;
}

.question-card {
  padding: 28px 24px;

  border-radius: 28px;

  background: white;

  box-shadow:
    0 12px 40px rgba(0,0,0,0.06);
}

.question-counter {
  font-size: 14px;
  font-weight: 600;

  color: #9CA3AF;

  margin-bottom: 18px;
}

.question-title {
  font-size: 24px;
  font-weight: 700;

  line-height: 1.4;

  color: #1D1D1F;

  margin-bottom: 34px;
}

.answers {
  display: flex;
  justify-content: space-between;

  gap: 10px;
}

.answer-btn {
  width: 56px;
  height: 56px;

  border: none;
  border-radius: 18px;

  background: #F3F4F6;

  font-size: 18px;
  font-weight: 700;

  color: #374151;

  transition: all .25s ease;

  cursor: pointer;
}

.answer-btn.active {
  background: linear-gradient(
    135deg,
    #6BCB77 0%,
    #4CAF50 100%
  );

  color: white;

  transform: translateY(-2px);

  box-shadow:
    0 10px 20px rgba(76, 175, 80, 0.3);
}

.scale-labels {
  display: flex;
  justify-content: space-between;

  margin-top: 16px;

  font-size: 13px;

  color: #9CA3AF;
}

.footer {
  padding-bottom: 12px;
}

.next-btn {
  width: 100%;
  height: 58px;

  border-radius: 18px;

  font-size: 17px;
  font-weight: 700;

  background: linear-gradient(
    135deg,
    #6BCB77 0%,
    #4CAF50 100%
  );

  color: white;

  margin-top: 24px;

  box-shadow:
    0 10px 30px rgba(76, 175, 80, 0.35);
}

</style>