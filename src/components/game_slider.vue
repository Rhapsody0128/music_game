<template lang="pug">
.game_slider(:style='gameSliderStyle' v-if="life<100 && start && born!==0" )
</template>
<script>
export default {
  emits: ["destroy"],
  data() {
    return {
      bpm: 20,
      life: 0,
      start: false,
    };
  },
  props: {
    color: String,
    born: Number,
  },
  computed: {
    gameSliderStyle() {
      if (this.life > 0) {
        return {
          top: this.life + "%",
          background: this.color,
        };
      } else {
      }
    },
  },
  methods: {
    destroy() {
      console.log("object");
    },
  },
  mounted() {
    setTimeout(() => {
      this.lifeTimer = setInterval(() => {
        this.life += 1;
      }, this.bpm);
      this.start = true;
    }, this.born);
  },
};
</script>
<style lang="stylus" scoped>
.game_slider
  width 100%
  height 1rem
  top 5%
  position absolute
  border-radius 0.1rem
  padding 0
  margin 0
</style>
