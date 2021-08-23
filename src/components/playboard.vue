<template lang="pug">
#playboard
  el-slider.slider(v-model="viewDegree" vertical height="10vh" :max='80')
  .row(:style='playBoardStyle()')
    el-button(@click="gameStart()") start
    .full-screen(v-for='(data,index) in data')
      .screen(:id="'S'+data.key")
        .judgeBar
        game_slider(@click="destroy($event)" v-if='start' v-for='(timeStamp,index) in data.timeStamp' :class="data.key" :color='data.color' :born="timeStamp")
      el-button.button.shadow(:style="getShadowStyle(data.color)" size="medium" @click="hit(data.key)" :id="'B'+data.key") {{data.key}}
</template>
<script>
export default {
  data() {
    return {
      a: [1, 2, 3],
      start: false,
      viewDegree: 0,
      startTimeStamp: 0,
      data: [
        {
          key: "a",
          color: "rgb(200,10,15)",
          timeStamp: [100, 800],
        },
        {
          key: "s",
          color: "rgb(0,10,15)",
          timeStamp: [5000],
        },
        // {
        //   key: "d",
        //   color: "rgba(0,0,0,0.5)",
        //   timeStamp: [1000, 3000],
        // },
        // {
        //   key: " ",
        //   color: "green",
        //   timeStamp: [1000, 2000],
        // },
        // {
        //   key: "4",
        //   color: "green",
        //   timeStamp: [2000, 3000],
        // },
        // {
        //   key: "5",
        //   color: "green",
        //   timeStamp: [1, 2000, 3000],
        // },
        // {
        //   key: "6",
        //   color: "green",
        //   timeStamp: [1000, 2000, 3000],
        // },
      ],
    };
  },
  computed: {},
  methods: {
    gameStart() {
      this.start = true;
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
    hit(key) {
      this.judge(key);
      const sliders = document.getElementsByClassName(key);
      if (sliders.length > 0) {
        sliders[0].click();
        console.log(sliders[0]);
      }

      // console.log(last);
      // if (last !== null) {
      //   last.remove();
      // }
    },
    destroy(e) {
      this.$emit("destroy", "");
    },
    judge(key) {
      // const screen = document.getElementById("S" + key);
      // screen.firstChild.remove();
    },
    commitHit(key) {
      const button = document.getElementById("B" + key);
      button.click();
      button.classList.add("show");
      setTimeout(() => {
        button.classList.remove("show");
      }, 300);
    },
  },
  mounted() {},
  created() {
    const component = this;
    document.onkeydown = function (event) {
      component.data.map((data) => {
        if (data.key === event.key) {
          component.commitHit(data.key);
        }
      });
    };
  },
  watch: {},
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
      .judgeBar
        width 100%
        height 1rem
        border 1px solid black
        position absolute
        top 90%
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
      transition 0.2s
      opacity 0.5
      color white
      span
      &:hover
        opacity 0.7
        color white
      &:active
        transition 0s
        opacity 0.9
        height 8rem
        color white
    .show
      opacity 0.9
      height 5rem
</style>
