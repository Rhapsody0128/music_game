<template lang="pug">
#Play
  el-header
  el-row(justify='center' v-if='ready' )
    el-col(:xl='16' :lg='20' :md='24')
      playboard(:youtube_id='youtube_id' :music_data="music_data" )
  el-skeleton.marginTop(v-else :rows="12" animated)
</template>
<script>
export default {
  data() {
    return {
      ready: false,
      music_data: {},
      youtube_id: "",
    };
  },
  methods: {},
  computed: {},
  mounted() {
    this.ready = false;
    this.axios
      .get(import.meta.env.VITE_BACK_URL + "/music_data", {
        params: {
          id: this.$route.query.id,
        },
      })
      .then((res) => {
        this.music_data = res.data[0];
        this.youtube_id = res.data[0].youtube_id;
        console.log(this.youtube_id);
        this.music_data.map_data = JSON.parse(res.data[0].map_data);
        this.ready = true;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang="stylus" scoped>
.settingBar
  float right
</style>
