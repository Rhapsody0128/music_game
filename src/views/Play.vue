<template lang="pug">
#Play
  el-row(justify='center')
    el-col(:xl='16' :lg='20' :md='24')
      playboard(:music_data="musicData")


    
</template>
<script>
export default {
  data() {
    return {
      musicData: {
        title: "a",
        mapper: "z",
        bpm: 1,
        duration: 200,
        difficulty: 1.5,
        origin_song: "f",
        youtube_id: "VyvhvlYvRnc",
        video_url: "a",
        img_src: "c",
        producer: "d",
        love_count: 0,
        play_count: 0,
        view_count: 0,
        map_data: [
          {
            key: "A",
            color: "rgb(200,10,15)",
            audio: "pianoA",
            timeStamp: [
              0.3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
              18, 19,
            ],
          },
          {
            key: "s",
            color: "rgb(0,10,15)",
            audio: "pianoB",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "d",
            color: "rgba(0,0,0,0.5)",
            audio: "pianoC",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "f",
            color: "rgba(255,255,255,1)",
            audio: "pianoD",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "4",
            color: "rgba(200,10,10,0.5)",
            audio: "pianoE",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "5",
            color: "rgba(200,200,10,0.5)",
            audio: "pianoF",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "6",
            color: "rgba(200,200,200,0.5)",
            audio: "pianoG",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45, 0.3, 0.8, 0.9, 1.2, 1.45],
          },
        ],
      },
    };
  },
  methods: {
    getInfo() {
      const request = window.gapi.client.youtube.videos.list({
        part: ["snippet,contentDetails,statistics"],
        id: this.id,
      });
      const component = this;
      request.execute(function (response) {
        console.log(response);
        response.items.map((item) => {
          try {
            if (!item.id.playlistId) {
              component.musicData.id = item.id;
              component.musicData.originSong = item.snippet.title;
              component.musicData.url =
                "https://www.youtube.com/embed/" + item.id;
              component.musicData.producer = item.snippet.channelTitle;
              component.musicData.src =
                "http://img.youtube.com/vi/" + item.id + "/0.jpg";
            }
          } catch (error) {
            console.log(error);
          }
        });
      });
    },
  },
  computed: {
    duration() {
      var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
      var hours = 0,
        minutes = 0,
        seconds = 0,
        totalseconds;
      if (reptms.exec("PT15M33S")) {
        var matches = reptms.exec("PT15M33S");
        if (matches[1]) hours = Number(matches[1]);
        if (matches[2]) minutes = Number(matches[2]);
        if (matches[3]) seconds = Number(matches[3]);
        totalseconds = hours * 3600 + minutes * 60 + seconds;
        return totalseconds;
      }
    },
  },
  mounted() {
    gapi.client.load("youtube", "v3");
    gapi.client.setApiKey(import.meta.env.VITE_YOUTUBE_API);
  },
};
</script>
<style lang="stylus" scoped>
.settingBar
  float right
</style>
