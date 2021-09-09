import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import "./style.styl";

import music_card from "./components/music_card.vue";
import playboard from "./components/playboard.vue";
import game_slider from "./components/game_slider.vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Vuex);
app.use(ElementPlus);
app.use(VueAxios, axios);
app.component("music_card", music_card);
app.component("playboard", playboard);
app.component("game_slider", game_slider);
app.mount("#app");
