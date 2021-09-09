import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
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
    edit_music: [],
  },
  getters: {
    getEditMusic(state) {
      return state.edit_music;
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
    saveEditMusic(state, newMap) {
      let find = state.edit_music.find((data) => {
        return data.id === newMap.id;
      });
      if (find === undefined) {
        state.edit_music.push(newMap);
      }
    },
    clearEditMusic(state, id) {
      let find = state.edit_music.find((data) => {
        return data.id === id;
      });
      state.edit_music.pop(find);
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
    saveSetting(state, map_data) {
      state.setting.mapSetting[map_data.length] = map_data;
    },
    login(state, userData) {
      console.log(userData);
      state.user.name = userData.name;
      state.user.id = userData.id;
    },
    logout(state) {
      state.user = {
        name: "",
        id: null,
      };
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
