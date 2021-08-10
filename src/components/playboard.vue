<template lang="pug">
#playboard
  el-row(justify='center')
    el-col.full-screen(v-for='key in keys')
      .screen(:class='key.value' :style="getStyle(key.color)")
      el-button.button(:style="getStyle(key.color)" size="medium") {{key.value}}
</template>
<script>
export default {
  data() {
    return {
      keys: [
        {
          value: "a",
          color: "red",
        },
        {
          value: "s",
          color: "green",
        },
        {
          value: "d",
          color: "green",
        },
        {
          value: "",
          color: "green",
        },
        {
          value: "j",
          color: "green",
        },
        {
          value: "k",
          color: "green",
        },
        {
          value: "l",
          color: "green",
        },
      ],
    };
  },
  methods: {
    getStyle(color) {
      return {
        borderColor: color,
      };
    },
  },
};
</script>
<style lang="stylus" scoped>
#playboard
  .full-screen
    max-width 14%
    height 80vh
    .screen
      box-shadow: 10px 5px 5px rgba(0,0,0,0.2)
      border-style solid
      border-width 0.1rem
      height 80%
      border-radius 0.5rem 0.5rem 0 0
    .button
      width 100%
      height 5rem
      border-radius 0 0 0.5rem 0.5rem
      text-align center
      box-shadow: 10px 5px 5px rgba(0,0,0,0.2)
      text-align center
      border-style solid
      border-width 0.1rem
      font-size 3rem
      font-family '標楷體'
      padding 0
</style>
