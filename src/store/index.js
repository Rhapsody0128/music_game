import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: {
      name: "Gary",
      id: 0,
    },
    setting: {
      volum: 0.5,
      bpm: 1,
      viewDegree: 15,
      mapSetting: [
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "cracker",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "cracker",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "s",
            color: "#f37023",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "cracker",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "s",
            color: "#f37023",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "6",
            color: "#292526",
            audio: "cracker",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "s",
            color: "#f37023",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "4",
            color: "#0087d2",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "6",
            color: "#292526",
            audio: "cracker",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "s",
            color: "#f37023",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "4",
            color: "#0087d2",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "6",
            color: "#292526",
            audio: "cracker",
            timeStamp: [],
          },
        ],
        [
          {
            key: "a",
            color: "#cd004b",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "s",
            color: "#f37023",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "d",
            color: "#fcb711",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "f",
            color: "#0eb24e",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "4",
            color: "#0087d2",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "5",
            color: "#6561ac",
            audio: "cracker",
            timeStamp: [],
          },
          {
            key: "6",
            color: "#292526",
            audio: "cracker",
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
    getVolum(state) {
      return state.setting.volum;
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
    setVolum(state, newVolum) {
      state.setting.volum = newVolum;
    },
    setViewDegree(state, newViewDegree) {
      state.setting.viewDegree = newViewDegree;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
