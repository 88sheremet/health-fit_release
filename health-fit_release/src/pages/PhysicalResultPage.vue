<template>
  <div class="result-page physical">

    <div class="hero">

      <div class="hero-icon">
        ⚠️
      </div>

      <div class="hero-title">
        Твое тело находится
        в состоянии перегрузки
      </div>

      <div class="hero-subtitle">
        Организм тратит больше энергии,
        чем успевает восстанавливать
      </div>

    </div>

    <q-card flat class="result-card">

      <div class="card-title">
        🔥 Главная зона риска
      </div>

      <div class="card-main">
        Физическое состояние
      </div>

      <div class="divider"></div>

      <div class="card-list">

        <div>• постоянная усталость</div>
        <div>• нехватка энергии</div>
        <div>• напряжение в теле</div>
        <div>• боли в спине и шее</div>
        <div>• слабая выносливость</div>
        <div>• ощущение “разбитости”</div>

      </div>

    </q-card>

    <q-card flat class="info-card">

      <div class="info-title">
        📉 Что происходит дальше
      </div>

      <div class="info-text">
        Если ничего не менять —
        организм постепенно адаптируется
        к низкому уровню энергии.
      </div>

    </q-card>

    <q-card flat class="recovery-card">

      <div class="info-title">
        ✨ Что поможет восстановлению
      </div>

      <div class="card-list">

        <div>• мягкая физическая активность</div>
        <div>• восстановление энергии</div>
        <div>• улучшение мобильности тела</div>
        <div>• снижение перегрузки</div>

      </div>

    </q-card>

    <q-btn
      unelevated
      no-caps
      class="main-btn"
      label="Начать восстановление"
    />

  </div>
</template>

<style scoped lang="scss">

.result-page {

  min-height: 100vh;

  padding: 24px 20px 120px;

  background:
    linear-gradient(
      180deg,
      #FFF6F1 0%,
      #FFFDFB 100%
    );
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

  background:
    rgba(255,255,255,.7);

  box-shadow:
    0 10px 40px rgba(255,152,0,.2);
}

.hero-title {

  font-size: 34px;

  font-weight: 700;

  line-height: 1.15;

  color: #1D1D1F;

  margin-bottom: 16px;
}

.hero-subtitle {

  font-size: 17px;

  line-height: 1.6;

  color: #6B7280;
}

.result-card,
.info-card,
.recovery-card {

  padding: 24px;

  border-radius: 28px;

  margin-bottom: 18px;

  background:
    rgba(255,255,255,.75);

  backdrop-filter: blur(16px);

  box-shadow:
    0 10px 35px rgba(0,0,0,.05);
}

.card-title {

  font-size: 15px;

  font-weight: 700;

  color: #FB8C00;

  margin-bottom: 14px;
}

.card-main {

  font-size: 28px;

  font-weight: 700;

  line-height: 1.2;

  color: #1D1D1F;
}

.divider {

  height: 1px;

  background:
    rgba(0,0,0,.06);

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

  color: #6B7280;
}

.main-btn {

  width: 100%;

  height: 62px;

  border-radius: 22px;

  margin-top: 24px;

  font-size: 18px;

  font-weight: 700;

  background:
    linear-gradient(
      135deg,
      #FFB74D 0%,
      #FB8C00 100%
    );

  color: white;

  box-shadow:
    0 10px 30px rgba(251,140,0,.35);
}

</style>