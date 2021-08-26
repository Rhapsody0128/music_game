<template lang="pug">
.game_slider(:style='gameSliderStyle' v-if="exist" @click="destroy()")
</template>
<script>
export default {
  data() {
    return {
      break: false,
    };
  },
  props: {
    bpm: Number,
    color: String,
    bornTime: Number,
    currentTime: Number,
  },
  computed: {
    gameSliderStyle() {
      return {
        top: this.top + "%",
        background: this.color,
      };
    },
    top() {
      if (this.currentTime - this.bornTime > 0) {
        return (this.currentTime - this.bornTime) * 75 * this.bpm;
      } else {
        return 0;
      }
    },
    exist() {
      if (this.top > 0 && this.top < 100 && this.break === false) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    destroy() {
      this.break = true;
    },
  },
};
</script>
<style lang="stylus" scoped>
.game_slider
  width 100%
  height 1.1rem
  top 5%
  position absolute
  border-radius 1rem
  padding 0
  margin 0
  box-shadow 0px 0px 2px black
</style>
