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
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
            timeStamp: [],
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "pianoE",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
            timeStamp: [],
          },
          {
            key: "s",
            color: "#f37023",
            audio: "pianoD",
            timeStamp: [],
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "pianoE",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
            timeStamp: [],
          },
          {
            key: "s",
            color: "#f37023",
            audio: "pianoD",
            timeStamp: [],
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "pianoA",
            timeStamp: [],
          },
          {
            key: "6",
            color: "#292526",
            audio: "pianoB",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
            timeStamp: [],
          },
          {
            key: "s",
            color: "#f37023",
            audio: "pianoD",
            timeStamp: [],
          },
          {
            key: "4",
            color: "#0087d2",
            audio: "pianoG",
            timeStamp: [],
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "pianoA",
            timeStamp: [],
          },
          {
            key: "6",
            color: "#292526",
            audio: "pianoB",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
            timeStamp: [],
          },
          {
            key: "s",
            color: "#f37023",
            audio: "pianoD",
            timeStamp: [],
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "pianoE",
            timeStamp: [],
          },
          {
            key: "4",
            color: "#0087d2",
            audio: "pianoG",
            timeStamp: [],
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "pianoA",
            timeStamp: [],
          },
          {
            key: "6",
            color: "#292526",
            audio: "pianoB",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "pianoC",
            timeStamp: [],
          },
          {
            key: "s",
            color: "#f37023",
            audio: "pianoD",
            timeStamp: [],
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "pianoE",
            timeStamp: [],
          },
          {
            key: "f",
            color: "#0eb24e",
            audio: "pianoF",
            timeStamp: [],
          },
          {
            key: "4",
            color: "#0087d2",
            audio: "pianoG",
            timeStamp: [],
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "pianoA",
            timeStamp: [],
          },
          {
            key: "6",
            color: "#292526",
            audio: "pianoB",
            timeStamp: [],
          },
        ],
      ],
    },
    mapData: null,
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
      return state.user;
    },
  },
  mutations: {
    saveMapData(state, newMap) {
      state.mapData = newMap;
    },
    clearMapData(state) {
      state.mapData = null;
    },
    uploadMapData(state) {
      state.mapData = null;
    },
    setBpm(state, newBpm) {
      state.setting.bpm = newBpm;
    },
    setViewDegree(state, newViewDegree) {
      state.setting.viewDegree = newViewDegree;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
