<template lang="pug">
#editboard
  .toolBar
    el-button(@click="gameStart()" icon='el-icon-video-play' round type="primary"  :disabled='playerState==1') Play
    el-button(@click="gamePause()" icon='el-icon-video-pause' round :disabled='playerState!=1') Pause
    el-button(@click="saveMapData()" plain icon='el-icon-finished' round type="warning") Save
    el-button(@click="clearMapData()" plain icon='el-icon-delete' round type="danger") Clear
    el-button(@click="uploadMapData()" plain icon='el-icon-upload' round type="success") Upload
    el-button(@click='openDrawer()' plain icon='el-icon-view' round type="info") DEMO
      el-drawer(title='DEMO' v-model='drawer' size='80%')
        playboard(v-if='drawer' :music_data='music_data' :showProgressBar='true')
    el-button(round type="info") 
      el-slider(v-model="viewDegree" height="10px" vertical :max='80' @change='setViewDegree()')
    el-slider(v-model="currentTime" height="300" :max='music_data.duration' show-input @input="seekTo()" @change="seekToConfirm()")
  .row
    .col(:style='editBoardStyle()')
      .player
        #player
      .full-screen(v-for='(data,index) in music_data.map_data')
        .screen(:id="'S'+data.key")
        el-button.button(:style="getButtonStyle(data.color)" size="medium" @click="hit(data.key,data.color,data.audio,index)" :id="'B'+data.key") {{data.key}}
</template>
<script>
import { h } from "vue";
export default {
  props: {
    music_data: Object,
  },
  data() {
    return {
      drawer: false,
      loading: true,
      viewDegree: 0,
      currentTime: null,
      choiceTime: null,
      player: null,
      score: 0,
      combo: 0,
      lifeTimer: null,
      playerState: 0,
      watchData: [],
    };
  },
  computed: {
    getViewDegree() {
      return this.$store.getters.getViewDegree;
    },
    getVolum() {
      return this.$store.getters.getVolum;
    },
  },
  methods: {
    gameStart() {
      this.player.playVideo();
      this.lifeTimer = setInterval(() => {
        if (this.playerState === 1) {
          this.currentTime += 0.015;
        }
      }, 15);
    },
    gamePause() {
      this.player.pauseVideo();
      clearInterval(this.lifeTimer);
    },
    editBoardStyle() {
      return {
        transform: `
        rotateX(${this.viewDegree}deg)
        scale(${1 - this.viewDegree / 170})`,
      };
    },
    getButtonStyle(color) {
      return {
        background: color,
      };
    },
    openDrawer() {
      this.drawer = true;
      this.gamePause();
    },
    hit(key, color, audioName, index) {
      if (this.playerState === 1) {
        if (audioName !== "mute") {
          let audio = new Audio();
          audio.volume = this.getVolum;
          audio.src = "./audio/" + audioName + ".mp3";
          audio.play();
        }
        this.watchData[index].button.classList.add("show");
        this.appendEffect(key, color);
        this.judge();
        this.editMap(index, this.player.getCurrentTime());
      }
    },
    keydown(index, keydown) {
      if (keydown) {
        this.watchData[index].button.click();
      } else {
        this.watchData[index].button.classList.remove("show");
      }
    },
    editMap(index, currentTime) {
      this.music_data.map_data[index].timeStamp.push(currentTime);
    },
    init() {
      this.viewDegree = this.getViewDegree;
      this.music_data.map_data.map((data) => {
        const el_button = document.getElementById("B" + data.key);
        this.watchData.push({
          button: el_button,
          keyState: false,
        });
      });
      const component = this;
      document.onkeydown = function (keydownEvent) {
        component.music_data.map_data.map((data) => {
          if (data.key.toLowerCase() === keydownEvent.key.toLowerCase()) {
            let index = component.music_data.map_data.indexOf(data);
            component.watchData[index].keyState = true;
          }
        });
      };
      document.onkeyup = function (keydownEvent) {
        component.music_data.map_data.map((data) => {
          if (data.key.toLowerCase() === keydownEvent.key.toLowerCase()) {
            let index = component.music_data.map_data.indexOf(data);
            component.watchData[index].keyState = false;
          }
        });
      };
    },
    saveMapData() {
      this.music_data.map_data.forEach((data) => {
        data.timeStamp.sort();
      });
      this.$store.commit("saveMapData", this.music_data.map_data);
      this.$notify({
        title: "Map Data",
        message: h("i", { style: "color: teal" }, "已儲存資料"),
      });
    },
    clearMapData() {
      this.$store.commit("clearMapData");
      this.music_data.map_data.forEach((data) => {
        data.timeStamp = [];
      });
      this.$notify({
        title: "Map Data",
        message: h("i", { style: "color: teal" }, "已清空資料"),
      });
    },
    uploadMapData() {
      this.$store.commit("uploadMapData");
      this.axios
        .patch(import.meta.env.VITE_BACK_URL + "/music_data", {
          data: {
            map_data: this.music_data.map_data,
          },
          query: {
            id: this.music_data.id,
          },
        })
        .then((res) => {
          console.log(res);
          this.$notify({
            title: "Map Data",
            message: h("i", { style: "color: teal" }, "已上傳資料"),
          });
        })
        .catch((error) => {
          this.$notify({
            title: "Map Data",
            message: h("i", { style: "color: teal" }, `${error}`),
          });
          console.log(error);
        });
    },
    setViewDegree() {
      this.$store.commit("setViewDegree", this.viewDegree);
    },
    judge() {
      this.score += 100;
      this.combo++;
      if (this.combo > 10 && this.combo <= 30) {
        this.score += 5;
      } else if (this.combo > 30 && this.combo <= 50) {
        this.score += 10;
      } else if (this.combo > 50 && this.combo <= 100) {
        this.score += 25;
      } else if (this.combo > 100 && this.combo <= 200) {
        this.score += 35;
      } else if (this.combo > 200) {
        this.score += 50;
      }
    },
    appendEffect(key, color) {
      const screen = document.getElementById("S" + key);
      const effect = document.createElement("div");
      effect.appendChild(document.createTextNode(`perfect`));
      effect.classList.add("perfectEffect");
      effect.style.top = "80%";
      effect.style.background = color;
      screen.appendChild(effect);
    },
    seekTo() {
      if (this.playerState !== 1) {
        this.player.seekTo(this.currentTime);
        this.gamePause();
      }
    },
    seekToConfirm() {
      this.player.seekTo(this.currentTime);
      this.gamePause();
    },
    onPlayerReady() {
      this.player.setPlaybackQuality("medium");
    },
    onPlayerStateChange(e) {
      this.playerState = e.data;
    },
  },

  mounted() {
    this.player = new YT.Player("player", {
      videoId: this.music_data.youtube_id,
      width: "100%",
      height: "100%",
      playerVars: {
        loop: 1,
        rel: 0,
      },
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange,
      },
    });
    this.axios
      .get(import.meta.env.VITE_BACK_URL + "/music_data", {
        params: {
          id: this.$route.query.id,
        },
      })
      .then((res) => {
        console.log(res);
        this.music_data = res.data[0];
        this.music_data.map_data = JSON.parse(res.data[0].map_data);
        this.start = true;
      })
      .catch((error) => {
        console.log(error);
      });

    this.init();
  },
  watch: {
    "watchData.0.keyState": {
      handler: function (val) {
        this.keydown(0, val);
      },
      deep: true,
    },
    "watchData.1.keyState": {
      handler: function (val) {
        this.keydown(1, val);
      },
      deep: true,
    },
    "watchData.2.keyState": {
      handler: function (val) {
        this.keydown(2, val);
      },
      deep: true,
    },
    "watchData.3.keyState": {
      handler: function (val) {
        this.keydown(3, val);
      },
      deep: true,
    },
    "watchData.4.keyState": {
      handler: function (val) {
        this.keydown(4, val);
      },
      deep: true,
    },
    "watchData.5.keyState": {
      handler: function (val) {
        this.keydown(5, val);
      },
      deep: true,
    },
    "watchData.6.keyState": {
      handler: function (val) {
        this.keydown(6, val);
      },
      deep: true,
    },
  },
};
</script>
<style lang="stylus" scoped>
#Edit
  .player
    position absolute
    opacity 0.5
    height 100%
    width 100%
  .row
    flex-wrap nowrap
    width 100%
    display flex
    transform-style: preserve-3d
    perspective: 30rem
  .col
    flex-wrap nowrap
    width 100%
    display flex
    height 100%
  .full-screen
    height 70vh
    width 100%
    position relative
    .screen
      box-shadow 0px 0px 1px rgba(0,0,0,1)
      height 100%
      overflow hidden
      &:after
        width 100%
        height 1rem
        border-radius 1rem
        position absolute
        top 80%
        left 0%
        text-align center
        transition 0.5
        content ''
        box-shadow 0px 0px 2px black
    .button
      position relative
      width 100%
      height 6rem
      text-align center
      border-width 0rem
      box-shadow 0px 0px 2px rgba(0,0,0,1)
      text-align center
      border-style solid
      border-radius 0rem 0rem 0.5rem 0.5rem
      font-size 2rem
      font-family '標楷體'
      padding 0
      opacity 0.5
      color white
      text-shadow 0px 0px 5px black
      transition 0.1s
      span
      &:hover
        opacity 0.7
      &:active
        opacity 0.9
        height 5rem
    .show
      opacity 1
      height 5rem
  .marginTop
    margin-top 1rem
</style>
