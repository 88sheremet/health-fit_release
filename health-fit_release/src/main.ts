import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Quasar, Notify } from "quasar";
import "quasar/src/css/index.sass";
import "@quasar/extras/material-icons/material-icons.css";
import router from "./router";
import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App)
  .use(Quasar, {
    plugins: {
      Notify,
    },
  })
  .use(router)
  .use(pinia)
  .mount("#app");
