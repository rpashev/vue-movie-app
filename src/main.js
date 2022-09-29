import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import BaseButton from "./components/UI/BaseButton.vue";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");

app.component("base-button", BaseButton);
