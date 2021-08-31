<template lang="pug">
#Home
  el-header
  el-main
    el-row
      el-col(:lg='4' :md='8' v-for='music_card in music_cards')
        music_card
</template>
<script>
export default {
  data() {
    return {
      music_cards: [
        {
          videoID: "",
          mapper: "",
          info: "",
          uploadTime: "",
        },
        {
          videoID: "",
          mapper: "",
        },
        {
          videoID: "",
          mapper: "",
        },
        {
          videoID: "",
          mapper: "",
        },
        {
          videoID: "",
          mapper: "",
        },
      ],
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:4000" + "/test")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang="stylus" scoped></style>
