import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "../src/assets/css/main.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";


const app = createApp(App);
app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCYMfzm7SYY6rtEVt-kyAZfiry_76NqbXI",
  },
});
app.mount("#app");
