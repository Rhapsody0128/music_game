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
      .iframe
        iframe(type="text/html" width="100%" height="100%" :src="music_data.video_url" frameborder="0")
      el-form-item.marginTop(label='標題' prop='title' )
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
      el-form-item(label='鍵位數量' prop='key_count')
        el-slider(v-model="music_data.key_count" height="300" :min='1' :max='7')
      el-form-item
        el-button(type='primary' @click="submitForm('map_data')") 確認
        el-button(@click="resetForm('map_data')") 重寫
        el-button(type='danger' @click="previous()") 上一步
    .thirdStep(v-if='active==2')
      .row
        .col(v-for="(data,index) in music_data.map_data" :key='index')
          h1 {{index}}號位
          el-button.button.shadow( :style="getButtonStyle(data.color)" size="medium" ) {{data.key}}
          .setting
            el-input(maxlength='1' @input="edit($event,index)" placeholder='英文/數字')
              template(#append)
                el-color-picker(v-model='data.color' size="mini")
            .audio
              el-select.select(v-model='data.audio')
                el-option(v-for='item in audio' :key='item' :label='item' :value='item')
              .word
                el-button(@click="playAudio(data.audio)" icon='el-icon-video-play' )
      .row.marginTop
        el-button(@click='drawer = true' type='primary' style='margin-left: 16px;')
          | DEMO
        el-drawer(title='DEMO' v-model='drawer' size='60%')
          demoboard(v-if='drawer ' :music_data='music_data')

      .row.marginTop
        el-button(type='primary' @click="confirm()") 確認
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
      drawer: false,
      active: 0,
      searchValue: "",
      audio: [
        "pianoC",
        "pianoD",
        "pianoE",
        "pianoF",
        "pianoG",
        "pianoA",
        "pianoB",
      ],
      music_data: {
        title: null,
        mapper: null,
        mapper_id: null,
        bpm: 1,
        duration: 0,
        key_count: 7,
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
      },
    };
  },
  computed: {
    getMapSetting() {
      return this.$store.getters.getMapSetting[this.music_data.key_count - 1];
    },
    getTimeString() {
      let min = parseInt(this.music_data.duration / 60);
      let sec = parseInt(this.music_data.duration % 60);
      if (sec < 10) {
        sec = "0" + sec;
      }
      return min + "分" + sec + "秒";
    },
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    edit(key, index) {
      const rules = /[a-z]|[A-Z]|[0-9]/;
      let repeat = false;
      this.music_data.map_data.map((data) => {
        if (data.key == key) {
          repeat = true;
        }
      });
      if (rules.test(key) && !repeat) {
        this.music_data.map_data[index].key = key;
      }
    },
    getButtonStyle(color) {
      return {
        background: color,
      };
    },
    search(searchValue) {
      this.getInfo(this.getYoutubeID(searchValue));
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
          this.applySetting();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    applySetting() {
      this.music_data.map_data = this.getMapSetting;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    playAudio(audioName) {
      let audio = new Audio();
      audio.src = "./audio/" + audioName + ".mp3";
      audio.play();
    },
    next() {
      this.active++;
    },
    previous() {
      this.active--;
    },
    confirm() {
      console.log(this.music_data);
    },
  },
  mounted() {
    gapi.client.load("youtube", "v3");
    gapi.client.setApiKey(import.meta.env.VITE_YOUTUBE_API);
    this.music_data.mapper = this.getUser.name;
    this.music_data.mapper.id = this.getUser.id;
  },
};
</script>
<style lang="stylus" scoped>
#Form
  .row
    flex-wrap nowrap
    width 100%
    display flex
    height 100%
    text-align center
    .col
      width 100%
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
  .iframe
    margin auto
    max-width 40rem
    height 20rem
  .button
    position relative
    width 100%
    height 6rem
    text-align center
    border-width 0rem
    box-shadow 0px 0px 2px rgba(0,0,0,1)
    text-align center
    border-style solid
    border-radius 0rem 0rem 0.5rem 0.5rem
    font-size 2rem
    font-family '標楷體'
    padding 0
    color white
    text-shadow 0px 0px 5px black
    transition 0.1s
  .audio
    display flex
    flex-wrap nowrap
    .select
      width 100%
</style>
