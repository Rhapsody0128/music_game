<template lang="pug">
#playboard
  .row(:style='playBoardStyle()')
    .full-screen(v-for='(data,index) in data')
      .screen(:id="'S'+data.key")
        game_slider(@click="destroy()" v-if='start' v-for='(timeStamp,index) in data.timeStamp' :class="data.key" :color='data.color' :born="timeStamp")
      el-button.button.shadow(:style="getShadowStyle(data.color)" size="medium" @click="hit(data.key,data.color)" :id="'B'+data.key") {{data.key}}
</template>
<script>
export default {
  props: {
    start: Boolean,
    viewDegree: Number,
  },
  data() {
    return {
      score: 0,
      combo: 0,
      maxCombo: 0,
      data: [
        {
          key: "a",
          color: "rgb(200,10,15)",
          timeStamp: [100, 300, 500, 700, 900, 1100, 1300, 1500, 1700, 1900],
        },
        {
          key: "s",
          color: "rgb(0,10,15)",
          timeStamp: [5000],
        },
        {
          key: "d",
          color: "rgba(0,0,0,0.5)",
          timeStamp: [3000],
        },
        {
          key: "f",
          color: "rgba(255,255,255,1)",
          timeStamp: [1000, 2000],
        },
        {
          key: "4",
          color: "rgba(200,10,10,0.5)",
          timeStamp: [2000, 3000],
        },
        // {
        //   key: "5",
        //   color: "rgba(200,200,10,0.5)",
        //   timeStamp: [1, 2000, 3000],
        // },
        // {
        //   key: "6",
        //   color: "rgba(200,200,200,0.5)",
        //   timeStamp: [1000, 2000, 3000],
        // },
      ],
    };
  },
  computed: {},
  methods: {
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
  },
  mounted() {},
  created() {
    const component = this;
    document.onkeydown = function (event) {
      component.data.map((data) => {
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
  watch: {},
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
