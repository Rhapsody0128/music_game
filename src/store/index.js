import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: {
      name: "Gary",
      id: 0,
    },
    setting: {
      bpm: 1,
      viewDegree: 15,
      mapSetting: [
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "pianoE",
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
          },
          {
            key: "s",
            color: "#f37023",
            audio: "pianoD",
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "pianoE",
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
          },
          {
            key: "s",
            color: "#f37023",
            audio: "pianoD",
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "pianoA",
          },
          {
            key: "6",
            color: "#292526",
            audio: "pianoB",
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
          },
          {
            key: "s",
            color: "#f37023",
            audio: "pianoD",
          },
          {
            key: "4",
            color: "#0087d2",
            audio: "pianoG",
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "pianoA",
          },
          {
            key: "6",
            color: "#292526",
            audio: "pianoB",
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
          },
          {
            key: "s",
            color: "#f37023",
            audio: "pianoD",
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "pianoE",
          },
          {
            key: "4",
            color: "#0087d2",
            audio: "pianoG",
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "pianoA",
          },
          {
            key: "6",
            color: "#292526",
            audio: "pianoB",
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
          },
          {
            key: "s",
            color: "#f37023",
            audio: "pianoD",
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "pianoE",
          },
          {
            key: "f",
            color: "#0eb24e",
            audio: "pianoF",
          },
          {
            key: "4",
            color: "#0087d2",
            audio: "pianoG",
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "pianoA",
          },
          {
            key: "6",
            color: "#292526",
            audio: "pianoB",
          },
        ],
      ],
    },
    SaveMapData: [],
  },
  getters: {
    getMapData(state) {
      return state.mapData;
    },
    getBpm(state) {
      return state.setting.bpm;
    },
    getViewDegree(state) {
      return state.setting.viewDegree;
    },
    getMapSetting(state) {
      return state.setting.mapSetting;
    },
    getUser(state) {
      console.log(state.user);
      return state.user;
    },
  },
  mutations: {
    saveMapData(state, newMap) {
      state.mapData = newMap;
    },
    setBpm(state, newBpm) {
      state.setting.bpm = newBpm;
    },
  },
  actions: {},
  modules: {},
  // plugins: [createPersistedState()],
});
