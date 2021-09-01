<template lang="pug">
#Form
  el-header
  el-main
    .firstStep(v-if='active==0')
      h3 找到你要製作的音樂:
      el-input.marginTop(v-model='searchValue' placeholder='請輸入youtube網址' @keyup.enter='search(searchValue)')
        template(#append)
          el-button(@click="search(searchValue)" icon="el-icon-search" circle)
      .youtubeCard.marginTop(v-if='music_data.youtube_id.length>0')
        el-row(justify='cetnter')
          el-col
            el-card(shadow="hover" :body-style="{ padding: '8px' }")
              el-row(justify='space-around' :gutter='8')
                el-col(:span='24' :sm='6' :lg='4')
                  .image
                    img(:src="music_data.img_src")
                el-col(:span='24' :sm='18' :lg='20')
                  h4.marginTop 歌名: {{music_data.origin_song}}
                  h4.marginTop 頻道: {{music_data.producer}}
                  h4.marginTop 時間: {{getTimeString}}
          el-col
            el-button.marginTop(type='primary' @click="next()") 確認
      el-skeleton.marginTop(v-else :rows="5" animated)
    el-form.secondStep(v-if='active==1' :model='music_data' :rules='rules' ref='map_data' label-width='100px')
      h3 輸入你的音樂資訊:
      el-form-item.marginTop(label='標題' prop='title')
        el-input(v-model='music_data.title')
      el-form-item(label='作者' prop='mapper')
        el-input(v-model='music_data.mapper')
      el-form-item(label='節奏速度' prop='bpm')
        el-radio-group(v-model='music_data.bpm')
          el-radio-button(:label='0.25') 極慢
          el-radio-button(:label='0.5') 慢
          el-radio-button(:label='1') 正常
          el-radio-button(:label='1.5') 快
          el-radio-button(:label='2') 極快
      el-form-item
        el-button(type='primary' @click="submitForm('map_data')") 確認
        el-button(@click="resetForm('map_data')") 重寫
        el-button(type='danger' @click="previous()") 上一步
    .thirdStep(v-if='active==2')
      h3 最後一步
      h3 最後一步
      h3 最後一步
      h3 最後一步
      h3 最後一步
      h3 最後一步
      h3 最後一步
      h3 最後一步
      h3 最後一步
      h3 最後一步
      el-button(type='primary' @click="submitForm('map_data')") 確認
      el-button(type='danger' @click="previous()") 上一步
  el-steps(:active='active' align-center finish-status='success')
      el-step(title='找到Youtube音樂')
      el-step(title='輸入你的歌曲資訊')
      el-step(title='編輯預設個人設定')

</template>
<script>
export default {
  data() {
    return {
      active: 0,
      searchValue: "",
      music_data: {
        title: "",
        mapper: "",
        bpm: null,
        duration: 0,
        difficulty: 1.5,
        origin_song: "",
        youtube_id: "",
        video_url: "",
        img_src: "",
        producer: "",
        love_count: 0,
        play_count: 0,
        view_count: 0,
      },
      rules: {
        title: [
          { required: true, message: "請輸入標題", trigger: "blur" },
          {
            min: 1,
            max: 30,
            message: "長度請控制在30個字以內",
            trigger: "blur",
          },
        ],
        mapper: [
          { required: true, message: "作者不能為空", trigger: "blur" },
          {
            min: 1,
            max: 30,
            message: "長度請控制在30個字以內",
            trigger: "blur",
          },
        ],
        bpm: [{ required: true, message: "請選擇速度", trigger: "blur" }],
      },
    };
  },
  computed: {
    getTimeString() {
      let min = parseInt(this.music_data.duration / 60);
      let sec = parseInt(this.music_data.duration % 60);
      if (sec < 10) {
        sec = "0" + sec;
      }
      return min + "分" + sec + "秒";
    },
  },
  methods: {
    search(searchValue) {
      console.log("object");
      this.getInfo(this.getYoutubeID(searchValue));
      this.searchValue = "";
    },
    getYoutubeID(youtubeUrl) {
      let result = youtubeUrl.split("?v=");
      return result[1];
    },
    getDuration(duration) {
      var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
      var hours = 0,
        minutes = 0,
        seconds = 0,
        totalseconds;
      if (reptms.exec(duration)) {
        var matches = reptms.exec(duration);
        if (matches[1]) hours = Number(matches[1]);
        if (matches[2]) minutes = Number(matches[2]);
        if (matches[3]) seconds = Number(matches[3]);
        totalseconds = hours * 3600 + minutes * 60 + seconds;
        return totalseconds;
      }
    },
    getInfo(ID) {
      const request = window.gapi.client.youtube.videos.list({
        part: ["snippet,contentDetails,statistics"],
        id: ID,
      });
      const component = this;
      request.execute(function (response) {
        console.log(response);
        response.items.map((item) => {
          try {
            if (!item.id.playlistId) {
              component.music_data.youtube_id = item.id;
              component.music_data.origin_song = item.snippet.title;
              component.music_data.producer = item.snippet.channelTitle;
              component.music_data.duration = component.getDuration(
                item.contentDetails.duration
              );
              component.music_data.video_url =
                "https://www.youtube.com/embed/" + item.id;
              component.music_data.img_src =
                "http://img.youtube.com/vi/" + item.id + "/0.jpg";
            }
          } catch (error) {
            console.log(error);
          }
        });
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.next();
          console.log(this.music_data);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    next() {
      this.active++;
    },
    previous() {
      this.active--;
    },
  },
  mounted() {
    gapi.client.load("youtube", "v3");
    gapi.client.setApiKey(import.meta.env.VITE_YOUTUBE_API);
  },
};
</script>
<style lang="stylus" scoped>
#Form
  .image
    width:100%
    height:100%
    img
      height:100%
      width 100%
      object-fit cover
  .originSong
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2
  .marginTop
    margin-top 1rem
</style>
