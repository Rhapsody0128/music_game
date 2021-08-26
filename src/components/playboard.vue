<template lang="pug">
#playboard
  el-slider.slider(v-model="viewDegree" vertical height="10vh" :max='80')
  el-button(@click="gameStart()") start
  el-button(@click="gamePause()") pause
  el-slider(v-model="currentProgress" height="300" :max='playerEnd')
  .row(:style='playBoardStyle()')
    .player
      #player
    .full-screen(v-for='(data,index) in musicData.mapData')
      .screen(:id="'S'+data.key")
        game_slider(@click="destroy()" v-if='start' v-for='(timeStamp,index) in data.timeStamp' :class="data.key" :color='data.color' :born="timeStamp" :playState='playState' :currentTime='currentTime')
      el-button.button.shadow(:style="getShadowStyle(data.color)" size="medium" @click="hit(data.key,data.color)" :id="'B'+data.key") {{data.key}}
</template>
<script>
export default {
  props: {
    musicData: Object,
  },
  data() {
    return {
      playState: 0,
      start: false,
      viewDegree: 0,
      currentProgress: 0,
      currentTime: null,
      playerEnd: 200,
      player: null,
      score: 0,
      combo: 0,
      maxCombo: 0,
    };
  },
  computed: {},
  methods: {
    gameStart() {
      this.start = true;
      this.playState = 1;
      this.player.playVideo();
    },
    gamePause() {
      this.playState = 2;
      this.player.pauseVideo();
    },
    playBoardStyle() {
      return {
        transform: `
        rotateX(${this.viewDegree}deg)
        scale(${1 - this.viewDegree / 170})`,
      };
    },
    getShadowStyle(color) {
      return {
        background: color,
      };
    },
    hit(key, color) {
      const sliders = document.getElementsByClassName(key);
      if (sliders.length > 0) {
        this.appendEffect(key, sliders[0].style.top, color);
        sliders[0].click();
      }
    },
    judge(position) {
      var value = parseInt(position);
      var word = "";
      if (value === 80) {
        this.score += 100;
        this.combo++;
        word = "perfect";
      } else if (85 > value && value > 75 && value != 80) {
        this.score += 30;
        this.combo++;
        word = "excellent";
      } else if ((90 >= value && value >= 85) || (75 >= value && value >= 70)) {
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
      effect.appendChild(document.createTextNode(`${this.judge(position)}`));
      effect.classList.add("effect");
      effect.style.top = position;
      effect.style.background = color;
      screen.appendChild(effect);
      setTimeout(() => {
        effect.remove();
      }, 300);
    },
    destroy() {
      this.$emit("destroy");
    },
    onPlayerReady(event) {
      event.target.loadVideoById({
        videoId: this.musicData.id,
        startSeconds: 0,
        endSeconds: null,
        suggestedQuality: "medium",
      });
      this.player.setPlaybackQuality("medium");
      this.currentTime = this.player.getCurrentTime();
    },
  },
  mounted() {
    this.player = new YT.Player("player", {
      videoId: this.musicData.id,
      width: "100%",
      height: "100%",
      playerVars: {
        loop: 1,
        rel: 0,
      },
      events: {
        onReady: this.onPlayerReady,
      },
    });
  },
  created() {
    const component = this;
    document.onkeydown = function (event) {
      component.musicData.mapData.map((data) => {
        if (data.key === event.key) {
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
  watch: {
    currentProgress() {
      this.player.seekTo(this.currentProgress);
    },
    currentTime(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="stylus">
.effect
  width 100%
  height 1.1rem
  top 5%
  position absolute
  border-radius 1rem
  padding 0
  margin 0
  background rgba(0,0,0,0.1)
  animation fadeInOut 0.5s
  text-align center
  opacity 0
  color white
  text-shadow 0px 0px 2px black
  box-shadow 0px 0px 2px black
@keyframes fadeInOut {
  from{
    opacity 1
  }
  100%{
    opacity 0
  }
}
</style>
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
  .slider
    position absolute
    top 5%
    left 0
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
      &:after
        width 100%
        height 1rem
        border-radius 1rem
        position absolute
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
