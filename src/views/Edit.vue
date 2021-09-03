<template lang="pug">
#Edit
  el-row(justify='center')
    el-col(:xl='16' :lg='20' :md='24')
      .toolBar.marginTop
        el-button(@click="gameStart()" icon='el-icon-video-play' round type="primary"  :disabled='playerState==1') Play
        el-button(@click="gamePause()" icon='el-icon-video-pause' round :disabled='playerState!=1') Pause
        el-button(@click="saveMapData()" plain icon='el-icon-finished' round type="warning") Save
        el-button(@click="clearMapData()" plain icon='el-icon-delete' round type="danger") Clear
        el-button(@click="uploadMapData()" plain icon='el-icon-upload' round type="success") Upload
        el-button(@click='drawer = true' plain icon='el-icon-view' round type="info") DEMO
          el-drawer(title='DEMO' v-model='drawer' size='60%')
            playboard(v-if='drawer' :music_data='music_data')
        el-slider(v-model="currentTime" height="300" :max='music_data.duration' show-input @input="seekTo()" @change="seekToConfirm()")
        el-slider(v-model="viewDegree" :max='80' @change='setViewDegree()')
      .row(:style='editBoardStyle()')
        .player
          #player(v-loading="loading")
        .full-screen(v-for='(data,index) in music_data.map_data')
          .screen(:id="'S'+data.key")
          el-button.button(:style="getButtonStyle(data.color)" size="medium" @click="hit(data.key,data.color,data.audio)" :id="'B'+data.key") {{data.key}}
</template>
<script>
import { h } from "vue";
export default {
  data() {
    return {
      music_data: {
        title: "a",
        mapper: "z",
        bpm: 1,
        duration: 200,
        difficulty: 1.5,
        origin_song: "f",
        youtube_id: "VyvhvlYvRnc",
        video_url: "a",
        img_src: "c",
        producer: "d",
        love_count: 0,
        play_count: 0,
        view_count: 0,
        map_data: [
          {
            key: "A",
            color: "rgb(200,10,15)",
            timeStamp: [
              0.3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
              18, 19,
            ],
          },
          {
            key: "s",
            color: "rgb(0,10,15)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "d",
            color: "rgba(0,0,0,0.5)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "f",
            color: "rgba(255,255,255,1)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "4",
            color: "rgba(200,10,10,0.5)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "5",
            color: "rgba(200,200,10,0.5)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "6",
            color: "rgba(200,200,200,0.5)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45, 0.3, 0.8, 0.9, 1.2, 1.45],
          },
        ],
      },
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
    };
  },
  computed: {
    getViewDegree() {
      return this.$store.getters.getViewDegree;
    },
  },
  methods: {
    gameStart() {
      console.log(this.player);
      this.player.playVideo();
      this.lifeTimer = setInterval(() => {
        if (this.playerState === 1) {
          this.currentTime += 0.05;
        }
      }, 50);
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
    hit(key, color, audioName) {
      if (this.playerState === 1) {
        let audio = new Audio();
        audio.src = "./audio/" + audioName + ".mp3";
        audio.play();
        this.appendEffect(key, color);
        this.judge();
        this.editMap(key, this.player.getCurrentTime());
      }
    },
    editMap(key, currentTime) {
      this.getAMapData(key).timeStamp.push(currentTime);
    },
    getAMapData(key) {
      return this.newMap.find((data) => {
        return data.key === key;
      });
    },
    init() {
      this.newMap = this.music_data.map_data;
      this.viewDegree = this.getViewDegree;
    },
    saveMapData() {
      this.newMap.forEach((data) => {
        data.timeStamp.sort();
      });
      this.$store.commit("saveMapData", this.newMap);
      this.$notify({
        title: "Map Data",
        message: h("i", { style: "color: teal" }, "已儲存資料"),
      });
    },
    clearMapData() {
      this.$store.commit("clearMapData");
      this.$notify({
        title: "Map Data",
        message: h("i", { style: "color: teal" }, "已清空資料"),
      });
    },
    uploadMapData() {
      this.$store.commit("uploadMapData");
      this.$notify({
        title: "Map Data",
        message: h("i", { style: "color: teal" }, "已上傳資料"),
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
    onPlayerReady(event) {
      this.loading = false;
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
    this.init();
  },
  created() {
    const component = this;
    document.onkeydown = function (event) {
      component.music_data.map_data.map((data) => {
        if (data.key.toLowerCase() === event.key.toLowerCase()) {
          console.log(data.key);
          const button = document.getElementById("B" + data.key);
          button.click();
          button.classList.add("show");
          setTimeout(() => {
            button.classList.remove("show");
          }, 300);
        }
      });
    };
  },
};
</script>
<style lang="stylus" scoped>
#Edit
  .toolBar
    float right
  .player
    position absolute
    opacity 0.5
    height 100%
    width 100%
  .row
    flex-wrap nowrap
    width 100%
    display flex
    height 100%
    transform-style: preserve-3d
    perspective: 30rem
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
