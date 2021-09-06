<template lang="pug">
#playboard
  .toolBar(v-loading='loading')
    el-button(@click="gameStart()" icon='el-icon-video-play' round type="primary"  :disabled='playerState==1') Play
    el-button(@click="gamePause()" icon='el-icon-video-pause' round type="success" :disabled='playerState!=1') Pause
    el-button(@click="gameRestart()" icon='el-icon-refresh-left' round type="warning") Restart
    el-slider(v-model="currentTime" height="300" :max='music_data.duration' show-input @input="seekTo()" @change="seekToConfirm()")
    el-slider(v-model="viewDegree" :max='80' @change='setViewDegree()' v-if='showProgressBar')
    p {{score}}
  .row(:style='playBoardStyle()')
    .player(v-loading="loading")
      #player
    .full-screen(v-for='(data,index) in music_data.map_data' )
      .screen(:id="'S'+data.key")
        game_slider(@click="destroy()" v-for='(timeStamp,index) in data.timeStamp' 
                    :class="data.key" 
                    :color='data.color' 
                    :bornTime="timeStamp" 
                    :currentTime='currentTime'
                    :bpm="getBpm"
                    :restart='restart'
                    )
      el-button.button(:style="getButtonStyle(data.color)" size="medium" @click="hit(data.key,data.color,data.audio)" :id="'B'+data.key") {{data.key}}
</template>
<script>
export default {
  props: {
    music_data: Object,
    showProgressBar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: true,
      viewDegree: 0,
      currentTime: null,
      choiceTime: null,
      player: null,
      score: 0,
      combo: 0,
      maxCombo: 0,
      lifeTimer: null,
      playerState: 0,
      restart: false,
    };
  },
  computed: {
    getMapData() {
      return this.$store.getters.getMapData;
    },
    getBpm() {
      return this.$store.getters.getBpm;
    },
    getViewDegree() {
      return this.$store.getters.getViewDegree;
    },
    getVolum() {
      return this.$store.getters.getVolum;
    },
    judgeLine() {
      // [
      //   perfectLineStart,
      //   perfectLineEnd,
      //   ellectLineStart,
      //   ellectLineEnd,
      //   goodLineStart,
      //   goodLineEnd,
      // ];
      if (this.getBpm === 1) {
        return [80, 79, 82, 75, 85, 70];
      }
      if (this.getBpm === 1.5) {
        return [80.5, 78.5, 83, 74, 85, 68];
      }
      if (this.getBpm === 2) {
        return [81, 78, 84, 73, 89, 66];
      }
      if (this.getBpm === 0.5) {
        return [79.8, 79.2, 82, 76, 84, 72];
      }
      if (this.getBpm === 0.25) {
        return [79.6, 79.4, 81, 78, 83, 75];
      }
    },
  },
  methods: {
    gameStart() {
      this.restart = false;
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
    gameRestart() {
      this.restart = true;
      this.currentTime = 0;
      this.player.seekTo(this.currentTime);
      this.gamePause();
      (this.score = 0), (this.combo = 0), (this.maxCombo = 0);
    },
    playBoardStyle() {
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
        const sliders = document.getElementsByClassName(key);
        if (audioName !== "mute") {
          let audio = new Audio();
          audio.volume = this.getVolum;
          audio.src = "./audio/" + audioName + ".mp3";
          audio.play();
        }
        if (sliders.length > 0) {
          this.appendEffect(key, sliders[0].style.top, color);
          sliders[0].click();
        }
      }
    },
    judge(position) {
      var value = parseInt(position);
      var word = "";
      if (this.judgeLine[0] >= value && value >= this.judgeLine[1]) {
        this.score += 100;
        this.combo++;
        word = "perfect";
      } else if (
        (this.judgeLine[2] >= value && value >= this.judgeLine[0]) ||
        (this.judgeLine[1] >= value && value >= this.judgeLine[3])
      ) {
        this.score += 30;
        this.combo++;
        word = "excellent";
      } else if (
        (this.judgeLine[4] >= value && value >= this.judgeLine[2]) ||
        (this.judgeLine[3] >= value && value >= this.judgeLine[5])
      ) {
        this.score += 10;
        this.combo++;
        word = "good";
      } else {
        this.combo = 0;
        word = "miss";
      }

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

      if (this.combo > this.maxCombo) {
        this.maxCombo = this.combo;
      }
      return word;
    },
    appendEffect(key, position, color) {
      const screen = document.getElementById("S" + key);
      const effect = document.createElement("div");
      let judgeWord = this.judge(position);
      effect.appendChild(document.createTextNode(`${judgeWord}`));
      screen.appendChild(effect);
      if (judgeWord === "perfect") {
        effect.classList.add("perfectEffect");
      } else if (judgeWord === "excellent") {
        effect.classList.add("excellentEffect");
      } else if (judgeWord === "good") {
        effect.classList.add("goodEffect");
      } else {
        effect.classList.add("effect");
      }
      effect.style.top = position;
      effect.style.background = color;
      // setTimeout(() => {
      //   effect.remove();
      // }, 300);
    },
    destroy() {
      this.$emit("destroy");
    },
    seekTo() {
      if (this.playerState !== 1) {
        this.gamePause();
        this.restart = true;
        this.player.seekTo(this.currentTime);
      }
    },
    seekToConfirm() {
      this.gamePause();
      this.restart = true;
      this.player.seekTo(this.currentTime);
    },
    onPlayerReady(event) {
      this.loading = false;
      this.player.setPlaybackQuality("medium");
    },
    onPlayerStateChange(e) {
      this.playerState = e.data;
    },
    setViewDegree() {
      this.$store.commit("setViewDegree", this.viewDegree);
    },
  },
  mounted() {
    this.viewDegree = this.getViewDegree;
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
  },
  created() {
    const component = this;
    document.onkeydown = function (event) {
      component.music_data.map_data.map((data) => {
        if (data.key.toLowerCase() === event.key.toLowerCase()) {
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
#playboard
  transform-style: preserve-3d;
  position: relative;
  transition: transform 0.5s;
  perspective: 30rem;
  width 100%
  margin-top 5%
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
  .full-screen
    height 70vh
    width 100%
    position relative
    .screen
      box-shadow 0px 0px 1px rgba(0,0,0,1)
      height 100%
      overflow hidden
      position relative
      &:after
        width 100%
        height 1rem
        border-radius 1rem
        position absolute
        left 0%
        top 80%
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
</style>
