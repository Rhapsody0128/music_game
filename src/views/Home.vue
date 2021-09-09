<template lang="pug">
#Home
  el-header
  el-main
    el-row
      el-col(v-if='ready' v-for='music_data in all_music_data' :lg='4' :md='8')
        music_card(:music_data='music_data')
</template>
<script>
export default {
  data() {
    return {
      ready: false,
      all_music_data: null,
    };
  },
  mounted() {
    this.axios
      .get(import.meta.env.VITE_BACK_URL + "/music_data")
      .then((res) => {
        this.all_music_data = res.data;
        this.all_music_data.forEach((element) => {
          element.map_data = JSON.parse(element.map_data);
        });
        this.ready = true;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang="stylus" scoped></style>
