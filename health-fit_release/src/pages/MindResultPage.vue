<template>
  <div class="result-page">

    <div class="hero">

      <div class="hero-icon">
        🧠
      </div>

      <div class="hero-title">
        Твоя нервная система
        работает на перегрузке
      </div>

      <div class="hero-subtitle">
        Постоянный стресс постепенно
        забирает энергию и мотивацию
      </div>

    </div>

    <q-card flat class="result-card">

      <div class="card-title">
        ⚡ Главная зона риска
      </div>

      <div class="card-main">
        Психологическое состояние
      </div>

      <div class="divider"></div>

      <div class="card-list">

        <div>• высокий уровень стресса</div>
        <div>• эмоциональное выгорание</div>
        <div>• проблемы со сном</div>
        <div>• отсутствие сил</div>
        <div>• прокрастинация</div>
        <div>• потеря дисциплины</div>

      </div>

    </q-card>

    <q-card flat class="info-card">

      <div class="info-title">
        📉 Что происходит дальше
      </div>

      <div class="info-text">
        Нервная система постепенно
        перестает нормально восстанавливаться,
        а уровень энергии снижается.
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
      #F7F5FF 0%,
      #FCFBFF 100%
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
    0 10px 40px rgba(103,58,183,.2);
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
.info-card {

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

  color: #673AB7;

  margin-bottom: 14px;
}

.card-main {

  font-size: 28px;

  font-weight: 700;

  line-height: 1.2;
}

.divider {

  height: 1px;

  background:
    rgba(0,0,0,.06);

  margin: 24px 0;
}

.card-list {

  display: flex;

  flex-direction: column;

  gap: 12px;

  font-size: 16px;

  line-height: 1.5;
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

  margin-top: 28px;

  font-size: 18px;

  font-weight: 700;

  background:
    linear-gradient(
      135deg,
      #7E57C2 0%,
      #5E35B1 100%
    );

  color: white;
}

</style>