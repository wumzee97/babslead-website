// @ts-nocheck
import { createApp } from "vue";
import "./index.css";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.vue";
import { createHead } from "@vueuse/head";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.use(AOS);
app.mount("#app");
