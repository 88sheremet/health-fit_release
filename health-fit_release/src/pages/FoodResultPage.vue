<template>
  <div class="result-page">

    <div class="hero">

      <div class="hero-icon">
        ⚡
      </div>

      <div class="hero-title">
        Твой организм теряет
        энергию через питание
      </div>

      <div class="hero-subtitle">
        Питание сейчас не помогает
        восстановлению организма
      </div>

    </div>

    <q-card flat class="result-card">

      <div class="card-title">
        🥗 Главная зона риска
      </div>

      <div class="card-main">
        Питание и пищевые привычки
      </div>

      <div class="divider"></div>

      <div class="card-list">

        <div>• резкие перепады энергии</div>
        <div>• тяга к сладкому</div>
        <div>• переедание</div>
        <div>• питание “на автомате”</div>
        <div>• нехватка воды</div>
        <div>• усталость после еды</div>

      </div>

    </q-card>

    <q-btn
      unelevated
      no-caps
      class="main-btn"
      label="Восстановить энергию"
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
      #F4FFF5 0%,
      #FCFFFD 100%
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
    0 10px 40px rgba(76,175,80,.2);
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

.result-card {

  padding: 24px;

  border-radius: 28px;

  background:
    rgba(255,255,255,.75);

  backdrop-filter: blur(16px);

  box-shadow:
    0 10px 35px rgba(0,0,0,.05);
}

.card-title {

  font-size: 15px;

  font-weight: 700;

  color: #43A047;

  margin-bottom: 14px;
}

.card-main {

  font-size: 28px;

  font-weight: 700;

  line-height: 1.2;

  margin-bottom: 24px;
}

.divider {

  height: 1px;

  background:
    rgba(0,0,0,.06);

  margin-bottom: 24px;
}

.card-list {

  display: flex;

  flex-direction: column;

  gap: 12px;

  font-size: 16px;

  line-height: 1.5;
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
      #66BB6A 0%,
      #43A047 100%
    );

  color: white;
}

</style>