<template lang="pug">
#Home
  el-main
    el-row(v-if='ready')
      el-col(:lg='4' :md='8')
        music_card(:demo='true') 
      el-col( v-for='music_data in all_music_data' :lg='4' :md='8')
        music_card(:music_data='music_data')
    el-skeleton.marginTop(v-else :rows="12" animated)
</template>
<script>
export default {
  data() {
    return {
      ready: false,
      demo: {},
      all_music_data: {},
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    this.axios
      .get(import.meta.env.VITE_BACK_URL + "/music_data", {
        params: {
          mapper_id: this.getUser.id,
        },
      })
      .then((res) => {
        console.log(res);
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
