// @ts-nocheck
import { createApp } from "vue";
import "./index.css";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.vue";


const app = createApp(App);

app.use(router);
app.use(AOS);
app.mount("#app");
