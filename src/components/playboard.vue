<template lang="pug">
#playboard
  el-slider.slider(v-model="viewDegree" vertical height="10vh" :max='80')
  .row(:style='playBoardStyle()')
    .full-screen(v-for='(data,index) in data')
      .screen
        .judgeBar
        game_slider
      el-button.button.shadow(:style="getShadowStyle(data.color)" size="medium" @click="hit(key)" :id="data.key") {{data.key}}
</template>
<script>
export default {
  data() {
    return {
      viewDegree: 0,
      keys: [],
      data: [
        {
          key: "a",
          color: "rgb(200,10,15)",
        },
        {
          key: "s",
          color: "rgb(0,10,15)",
        },
        {
          key: "d",
          color: "rgba(0,0,0,0.5)",
        },
        {
          key: " ",
          color: "green",
        },
        {
          key: "4",
          color: "green",
        },
        {
          key: "5",
          color: "green",
        },
        {
          key: "6",
          color: "green",
        },
      ],
    };
  },
  computed: {},
  methods: {
    playBoardStyle() {
      return {
        transform: `rotateX(${this.viewDegree}deg)`,
      };
    },

    getShadowStyle(color) {
      return {
        background: color,
      };
    },
    hit(key) {},
    commitHit(key) {
      const button = document.getElementById(key);
      button.classList.add("show");
      setTimeout(() => {
        button.classList.remove("show");
      }, 300);
    },
  },
  mounted() {},
  created() {
    var keys = [];
    this.data.map((perData) => {
      keys.push(perData.key);
    });
    const component = this;
    document.onkeydown = function (event) {
      keys.map((key) => {
        if (key === event.key) {
          component.commitHit(key);
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
  .slider
    position absolute
    top 5%
  .row
    flex-wrap nowrap
    width 100%
    display flex
  .full-screen
    height 70vh
    width 100%
    position relative
    .screen
      box-shadow 0px 0px 3px rgba(0,0,0,1)
      height 100%
      overflow hidden
      .judgeBar
        width 100%
        height 1rem
        background red
        position absolute
        top 80%
    .button
      position relative
      width 100%
      height 6rem
      text-align center
      border-width 0rem
      box-shadow 0px 0px 3px rgba(0,0,0,1)
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
      transition 0s
      opacity 0.9
      height 8rem
      color white
</style>
