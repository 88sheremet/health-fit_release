<template>
  <div class="screening-page">
    <div class="screening-container">
      <div class="top-section">
        <div class="hero-icon">
          <div class="glow"></div>

          <q-icon name="psychology" class="main-icon" />
        </div>

        <div class="title">Анализ состояния</div>

        <div class="subtitle">
          Ответь на несколько вопросов, чтобы получить персональный план
          восстановления
        </div>
      </div>

      <q-card flat class="info-card">
        <div class="info-item">
          <div class="info-icon green">
            <q-icon name="schedule" />
          </div>

          <div class="info-content">
            <div class="info-title">~2 минуты</div>

            <div class="info-text">Быстрый анализ состояния</div>
          </div>
        </div>

        <div class="info-item">
          <div class="info-icon blue">
            <q-icon name="monitoring" />
          </div>

          <div class="info-content">
            <div class="info-title">Персональный результат</div>

            <div class="info-text">Узнай свои основные точки роста</div>
          </div>
        </div>

        <div class="info-item">
          <div class="info-icon orange">
            <q-icon name="task_alt" />
          </div>

          <div class="info-content">
            <div class="info-title">Ежедневные задания</div>

            <div class="info-text">Система подстроится под тебя</div>
          </div>
        </div>
      </q-card>

      <div class="bottom-section">
        <div class="hint-text">
          Твой путь начинается с понимания текущего состояния
        </div>

        <q-btn
          unelevated
          no-caps
          class="start-btn"
          label="Начать скрининг"
          @click="$router.push('/questions')"
        />

        <q-btn
          flat
          no-caps
          class="skip-btn"
          label="Пропустить"
          @click="$router.push('/menu')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.screening-page {
  min-height: 100vh;

  padding: 24px;

  background: linear-gradient(180deg, #f5f9ff 0%, #eef7f2 100%);
}

.screening-container {
  max-width: 430px;

  margin: 0 auto;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
}

.top-section {
  padding-top: 48px;

  text-align: center;
}

.hero-icon {
  position: relative;

  width: 120px;
  height: 120px;

  margin: 0 auto 28px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--hero-icon);

  backdrop-filter: blur(12px);
}

.glow {
  position: absolute;

  width: 90px;
  height: 90px;

  border-radius: 50%;

  background: rgba(76, 175, 80, 0.25);

  filter: blur(24px);

  animation: pulse 3s infinite;
}

.main-icon {
  position: relative;
  z-index: 2;

  font-size: 54px;

  color: #4caf50;
}

.title {
  font-size: 34px;
  font-weight: 700;

  line-height: 1.15;

 color: var(--black1);

  margin-bottom: 16px;
}

.subtitle {
  font-size: 18px;
  line-height: 1.6;

  color: #5f6368;
}

.info-card {
  margin-top: 42px;

  padding: 26px 22px;

  border-radius: 28px;

   background: var(--hero-icon);

  backdrop-filter: blur(16px);

  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
}

.info-item {
  display: flex;
  align-items: center;

  gap: 18px;

  &:not(:last-child) {
    margin-bottom: 28px;
  }
}

.info-icon {
  width: 52px;
  height: 52px;

  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;

  flex-shrink: 0;
}

.green {
  background: rgba(76, 175, 80, 0.12);
  color: var(--green);
}

.blue {
  background: rgba(33, 150, 243, 0.12);
  color: var(--blue);
}

.orange {
  background: rgba(255, 152, 0, 0.12);
  color: var( --orange);
}

.info-title {
  font-size: 17px;
  font-weight: 600;

 color: var(--black1);

  margin-bottom: 4px;
}

.info-text {
  font-size: 15px;
  line-height: 1.5;

color: var(--grey2);
}

.bottom-section {
  margin-top: auto;

  padding-top: 42px;
  padding-bottom: 24px;
}

.hint-text {
  text-align: center;

  font-size: 15px;
  line-height: 1.5;

  color: var(grey);

  margin-bottom: 22px;
}

.start-btn {
  width: 100%;
  height: 60px;

  border-radius: 18px;

  font-size: 18px;
  font-weight: 700;

  background: linear-gradient(135deg, #6bcb77 0%, #4caf50 100%);

  color: white;

  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.35);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.15);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}
</style>