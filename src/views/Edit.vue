<template lang="pug">
#Edit
  el-header
  el-row(justify='center' v-if='ready')
    el-col(:xl='16' :lg='20' :md='24')
      #editboard()
        .toolBar
          el-button(@click="gameStart()" icon='el-icon-video-play' round type="primary" :disabled='playerState==1') Play
          el-button(@click="gamePause()" icon='el-icon-video-pause' round :disabled='playerState!=1') Pause
          el-button(@click="saveMapData()" plain icon='el-icon-folder-checked' round type="warning") Save
          el-button(@click="loadMapData()" plain icon='el-icon-folder-opened' round type="primary") Load
          el-button(@click="clearMapData()" plain icon='el-icon-folder-delete' round type="danger") Clear
          el-button(@click="uploadMapData()" plain icon='el-icon-upload' round type="success") Upload
          el-button(@click='openDrawer()' plain icon='el-icon-view' round type="info") DEMO
            el-drawer(title='DEMO' v-model='drawer' size='80%')
              playboard(v-if='drawer' :music_data='music_data' :showProgressBar='true')
          el-button(round type="info") 
            el-slider(v-model="viewDegree" height="10px" vertical :max='80' @change='setViewDegree()')
          table.table
            tr
              th 鍵位
              td(v-for="data in music_data.map_data" :style="getButtonStyle(data.color)") {{data.key}}
            tr
              th 次數
              td.tableText(v-for="data in music_data.map_data") {{data.timeStamp.length}}
        el-slider(v-model="currentTime" height="300" :max='music_data.duration' show-input @input="seekTo()" @change="seekToConfirm()")
        .row
          .col(:style='editBoardStyle()')
            .player
              #player
            .full-screen(v-for='(data,index) in music_data.map_data')
              .screen(:id="'S'+data.key")
              el-button.button(:style="getButtonStyle(data.color)" size="medium" @click="hit(data.key,data.color,data.audio,index)" :id="'B'+data.key") {{data.key}}
  el-skeleton.marginTop(v-else :rows="12" animated)
</template>
<script>
import { h } from "vue";
export default {
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
      ready: false,
      music_data: {},
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
      if (this.watchData[index].button !== null) {
        if (keydown) {
          this.watchData[index].button.click();
        } else {
          this.watchData[index].button.classList.remove("show");
        }
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
      this.setYoutbe();
    },
    setYoutbe() {
      const component = this;
      this.player = new YT.Player("player", {
        videoId: component.music_data.youtube_id,
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
      this.findAndAutoLoad();
    },
    saveMapData() {
      this.music_data.map_data.forEach((data) => {
        data.timeStamp.sort();
      });
      this.$store.commit("saveEditMusic", this.music_data);
      this.$notify({
        title: "儲存",
        message: h("i", { style: "color: teal" }, "已儲存資料到本地"),
      });
    },
    loadMapData() {
      let find = this.$store.getters.getEditMusic.find((data) => {
        return data.id === this.music_data.id;
      });
      if (find === undefined) {
        this.$notify({
          title: "讀取失敗",
          message: h("i", { style: "color: teal" }, "本地沒有存取的資料"),
        });
      } else {
        this.music_data.map_data = find.map_data;
        this.$notify({
          title: "讀取成功",
          message: h("i", { style: "color: teal" }, "已讀取本地的資料"),
        });
      }
    },
    findAndAutoLoad() {
      let find = this.$store.getters.getEditMusic.find((data) => {
        return data.id === this.music_data.id;
      });
      if (find === undefined) {
        this.$confirm(
          "本地端沒有這首歌的紀錄檔，要從頭開始編輯嗎?",
          "重頭編輯",
          {
            confirmButtonText: "重頭開始",
            cancelButtonText: "維持雲端紀錄",
            type: "warning",
            center: true,
          }
        )
          .then(() => {
            this.$message({
              type: "success",
              message: "重頭開始",
            });
            this.clearMapData();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "維持雲端紀錄",
            });
          });
      } else {
        this.$confirm("本地端有這首歌的紀錄，需要讀取嗎?", "偵測到紀錄", {
          confirmButtonText: "讀取本地紀錄",
          cancelButtonText: "維持雲端紀錄",
          type: "warning",
          center: true,
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "讀取成功",
            });
            this.loadMapData();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "維持雲端紀錄",
            });
          });
      }
    },
    clearMapData() {
      this.$store.commit("clearEditMusic", this.music_data.id);
      this.music_data.map_data.forEach((data) => {
        data.timeStamp = [];
      });
      this.$notify({
        title: "清空",
        message: h("i", { style: "color: teal" }, "已清空本地資料"),
      });
    },
    uploadMapData() {
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
          this.$notify({
            title: "上傳成功",
            message: h("i", { style: "color: teal" }, "已上傳資料"),
          });
        })
        .catch((error) => {
          this.$notify({
            title: "上傳失敗",
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
  async mounted() {
    await this.axios
      .get(import.meta.env.VITE_BACK_URL + "/music_data", {
        params: {
          id: this.$route.query.id,
        },
      })
      .then((res) => {
        this.music_data = res.data[0];
        this.music_data.map_data = JSON.parse(res.data[0].map_data);
        this.ready = true;
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
  .table
    display inline-block;
    margin 0
    box-shadow 0px 0px 3px rgba(0,0,0,1)
    text-align center
    transform translate(10%,20%)
    th
      box-shadow 0px 0px 1px rgba(0,0,0,1)
      padding 0.3rem
    td
      min-width 2.32rem
      box-shadow 0px 0px 1px rgba(0,0,0,1)
      padding 0.3rem
      color white
      text-shadow 0px 0px 5px black
    .tableText
      color black
      box-shadow 0px 0px 1px rgba(0,0,0,1)
      text-shadow none
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
