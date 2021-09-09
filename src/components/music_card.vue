<template lang="pug">
el-card.music_card(@click="playMusic(music_data.id)" shadow="hover" :body-style="{ padding: '0px'}")
  .image
    img(:src='music_data.img_src')
  el-descriptions.info(:title='music_data.title' :column="1")
    template(#extra v-if='music_data.mapper == getUser.name')
      .tool
        el-button(type="primary" icon="el-icon-edit" circle @click="editMusic(music_data.id)")
        el-button(type="danger" icon="el-icon-delete" circle @click="deleteMusic(music_data.id)")
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
import { h } from "vue";
export default {
  props: {
    music_data: Object,
  },
  data() {
    return {};
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    playMusic(id) {
      this.$router.push({
        name: "Play",
        query: { id: id },
      });
    },
    deleteMusic(id) {
      event.stopPropagation();
      this.axios
        .delete(import.meta.env.VITE_BACK_URL + "/music_data", {
          params: {
            id: this.music_data.id,
          },
        })
        .then((res) => {
          this.$notify({
            title: "刪除",
            message: h("i", { style: "color: teal" }, "已刪除該音樂"),
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editMusic(id) {
      event.stopPropagation();
      this.$router.push({
        name: "Edit",
        query: { id: id },
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.music_card
  width 100%
  height 28rem
  padding 0.1rem
  overflow hidden
  position relative
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
  .tool
    display flex
    flex-wrap nowrap
    opacity 0
    margin-left 0.5rem
    transition 0.5s
    width 0

.music_card:hover
  .image
    height 0
    opacity 0
  .tool
    opacity 1
    width 100%
</style>
