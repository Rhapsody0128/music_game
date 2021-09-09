<template lang="pug">
el-card.music_card(v-if="demo" shadow="hover" :body-style="{ marginTop: '20%'}")
  el-result(icon='plus' title='新增曲目')
        template(#extra='')
          el-button(type='primary' size='medium' @click='addMusic()') 去新增曲目
el-card.music_card(v-else @click="playMusic(music_data.id)" shadow="hover" :body-style="{ padding: '0px'}")
  .image
    img(:src='music_data.img_src')
  el-descriptions.info(:title='music_data.title' :column="1")
    template(#extra v-if='music_data.mapper == getUser.name')
      .tool
        el-button(type="primary" icon="el-icon-edit" circle @click="editMusic(music_data.id)")
        el-button(type="danger" icon="el-icon-delete" circle @click="deleteMusic(music_data.id)")
    el-descriptions-item.info(label='作者') {{music_data.mapper}}
    el-descriptions-item.info(label='原曲') {{music_data.origin_song}}
    el-descriptions-item.info(label='原曲頻道') {{music_data.producer}}
    el-descriptions-item.info(label='難度') {{music_data.difficulty}}
    el-descriptions-item.info(label='鍵位') {{music_data.key_count}}
    el-descriptions-item.info(label='速度') {{music_data.bpm}}
    el-descriptions-item.info(label='長度') {{music_data.duration}}
    el-descriptions-item.info(label='收藏數') {{music_data.love_count}}
    el-descriptions-item.info(label='遊玩數') {{music_data.play_count}}
    el-descriptions-item.info(label='瀏覽數') {{music_data.view_count}}
  

  
</template>
<script>
import { h } from "vue";
export default {
  props: {
    music_data: Object,
    demo: {
      type: Boolean,
      default: false,
    },
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
    addMusic() {
      this.$router.push({
        name: "Form",
      });
    },
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
  margin 0.3rem
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
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
