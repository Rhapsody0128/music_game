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
    restart: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    gameSliderStyle() {
      if (this.top > 100) {
        this.break = true;
      }
      return {
        top: this.top + "%",
        background: this.color,
      };
    },
    top() {
      if (this.sneak - this.bornTime > 0) {
        return (this.sneak - this.bornTime) * 75 * this.bpm;
      } else {
        return 0;
      }
    },
    sneak() {
      if (!this.break) {
        if (this.bpm === 1) {
          return this.currentTime + 1.28;
        } else if (this.bpm === 1.5) {
          return this.currentTime + 0.84;
        } else if (this.bpm === 2) {
          return this.currentTime + 0.6;
        } else if (this.bpm === 0.5) {
          return this.currentTime + 2.67;
        } else if (this.bpm === 0.25) {
          return this.currentTime + 5.28;
        }
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
  watch: {
    restart() {
      this.break = false;
    },
  },
};
</script>
<style lang="stylus" scoped>
.game_slider
  width 100%
  height 2.5%
  top 5%
  position absolute
  border-radius 1rem
  padding 0
  margin 0
  box-shadow 0px 0px 2px black
</style>
