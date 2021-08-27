import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    setting: {
      bpm: 1,
      viewDegree: 15,
      mapSetting: [
        {
          key: "a",
          color: "red",
          timeStamp: [],
        },
        {
          key: "s",
          color: "orange",
          timeStamp: [],
        },
        {
          key: "d",
          color: "yellow",
          timeStamp: [],
        },
        {
          key: "f",
          color: "green",
          timeStamp: [],
        },
        {
          key: "4",
          color: "blue",
          timeStamp: [],
        },
        {
          key: "5",
          color: "purple",
          timeStamp: [],
        },
        {
          key: "6",
          color: "black",
          timeStamp: [],
        },
      ],
    },
    mapData: [
      {
        key: "a",
        color: "red",
        timeStamp: [],
      },
      {
        key: "s",
        color: "orange",
        timeStamp: [],
      },
      {
        key: "d",
        color: "yellow",
        timeStamp: [],
      },
      {
        key: "f",
        color: "green",
        timeStamp: [],
      },
      {
        key: "4",
        timeStamp: [],
        color: "blue",
      },
      {
        key: "5",
        color: "purple",
        timeStamp: [],
      },
      {
        key: "6",
        color: "black",
        timeStamp: [],
      },
    ],
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
  plugins: [createPersistedState()],
});
