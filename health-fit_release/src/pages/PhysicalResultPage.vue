<template>
  <div class="result-page physical">
    <div class="hero">
      <div class="hero-icon">⚠️</div>

      <div class="hero-title">Твое тело работает на износ</div>

      <div class="hero-subtitle">
        Физическая перегрузка разрушает энергию, питание и нервы
      </div>
    </div>

    <q-card flat class="result-card">
      <div class="card-title">🔥 Главная зона риска</div>

      <div class="card-main">Физическое состояние</div>

      <div class="divider"></div>

      <div class="card-list">
        <div>• постоянная усталость и “разбитость”</div>
        <div>• низкая выносливость</div>
        <div>• напряжение и боли в спине/шее</div>
        <div>• организм не успевает восстанавливаться</div>
        <div>• нехватка энергии с самого утра</div>
      </div>
    </q-card>

    <!-- Новая карточка: влияние на питание -->
    <q-card flat class="info-card">
      <div class="info-title">🍽️ Как это связано с питанием</div>

      <div class="info-text">
        Из-за физической перегрузки организм требует быстрых углеводов.
        Появляется тяга к сладкому, переедание, резкие скачки энергии и
        усталость после еды.
      </div>
    </q-card>

    <!-- Новая карточка: влияние на нервную систему -->
    <q-card flat class="info-card">
      <div class="info-title">🧠 Связь с нервной системой</div>

      <div class="info-text">
        Физическое истощение усиливает стресс. Нарушается сон, падает мотивация,
        появляется прокрастинация и эмоциональное выгорание.
      </div>
    </q-card>

    <!-- Карточка восстановления с общим подходом -->
    <q-card flat class="recovery-card">
      <div class="info-title">✨ Что восстановит все три сферы</div>

      <div class="card-list">
        <div>• мягкая физическая активность</div>
        <div>• восстановление энергии через питание</div>
        <div>• снижение физической и нервной перегрузки</div>
        <div>• улучшение мобильности тела</div>
      </div>
    </q-card>

    <q-btn unelevated no-caps class="main-btn" label="Начать восстановление" />
  </div>
</template>

<style scoped lang="scss">
.result-page {
  min-height: 100vh;

  padding: 24px 20px 120px;

  background: linear-gradient(180deg, #fff6f1 0%, #fffdfb 100%);
}

.hero {
  text-align: center;

  margin-bottom: 32px;
}

.hero-icon {
  width: 110px;
  height: 110px;

  margin: 0 auto 24px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 52px;

  background: rgba(255, 255, 255, 0.7);

  box-shadow: 0 10px 40px rgba(255, 152, 0, 0.2);
}

.hero-title {
  font-size: 34px;

  font-weight: 700;

  line-height: 1.15;

  color: #1d1d1f;

  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 17px;

  line-height: 1.6;

  color: #6b7280;
}

.result-card,
.info-card,
.recovery-card {
  padding: 24px;

  border-radius: 28px;

  margin-bottom: 18px;

  background: rgba(255, 255, 255, 0.75);

  backdrop-filter: blur(16px);

  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
}

.card-title {
  font-size: 15px;

  font-weight: 700;

  color: #fb8c00;

  margin-bottom: 14px;
}

.card-main {
  font-size: 28px;

  font-weight: 700;

  line-height: 1.2;

  color: #1d1d1f;
}

.divider {
  height: 1px;

  background: rgba(0, 0, 0, 0.06);

  margin: 20px 0;
}

.card-list {
  display: flex;

  flex-direction: column;

  gap: 12px;

  font-size: 16px;

  line-height: 1.5;

  color: #374151;
}

.info-title {
  font-size: 22px;

  font-weight: 700;

  margin-bottom: 14px;
}

.info-text {
  font-size: 16px;

  line-height: 1.7;

  color: #6b7280;
}

.main-btn {
  width: 100%;

  height: 62px;

  border-radius: 22px;

  margin-top: 24px;

  font-size: 18px;

  font-weight: 700;

  background: linear-gradient(135deg, #ffb74d 0%, #fb8c00 100%);

  color: white;

  box-shadow: 0 10px 30px rgba(251, 140, 0, 0.35);
}
</style>