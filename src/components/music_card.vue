<template lang="pug">
el-card.music_card(shadow="hover" :body-style="{ padding: '0px'}")
  .image
    img(:src='music_data.img_src')
  el-descriptions.info(:title='music_data.title' :column="1")
    el-descriptions-item(label='作者') {{music_data.mapper}}
    el-descriptions-item(label='原曲') {{music_data.origin_song}}
    el-descriptions-item(label='原曲頻道') {{music_data.producer}}
    el-descriptions-item(label='難度') {{music_data.difficulty}}
    el-descriptions-item(label='鍵位') {{music_data.key_count}}
    el-descriptions-item(label='速度') {{music_data.bpm}}
    el-descriptions-item(label='長度') {{music_data.duration}}
    el-descriptions-item(label='收藏數') {{music_data.love_count}}
    el-descriptions-item(label='遊玩數') {{music_data.play_count}}
    el-descriptions-item(label='瀏覽數') {{music_data.view_count}}
  
</template>
<script>
export default {
  props: {
    music_data: Object,
  },
  data() {
    return {};
  },
};
</script>
<style lang="stylus" scoped>
.music_card
  width 100%
  height 28rem
  padding 0.1rem
  overflow hidden
  .image
    height 10rem
    width 100%
    transition 0.5s
    img
      height 100%
      width 100%
      object-fit cover
  .info
    height 100%
    padding 0.5rem
.music_card:hover
  .image
    height 0
    opacity 0
</style>
