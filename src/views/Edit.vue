<template lang="pug">
#Edit
  el-header
  el-row(justify='center')
    el-col(:md='2')
      el-col(:md='12')
        el-slider.slider(v-model="viewDegree" vertical height="10vh" :max='80')
      el-col(:md='12')
        el-button(@click="start = true") start
        el-button(@click="aa()") aa
    el-col(:xl='16' :lg='20' :md='24')
      playboard(:start='start' :viewDegree='viewDegree')
  iframe(width='640' height='390' :src="'http://www.youtube.com/'+videoId")


    
</template>
<script>
export default {
  data() {
    return {
      start: false,
      viewDegree: 0,
      videoId: ["J2Zzu2C3C3E"],
    };
  },
  methods: {
    aa() {
      const request = window.gapi.client.youtube.videos.list({
        part: ["snippet,contentDetails,statistics"],
        id: this.videoId,
      });
      request.execute(function (response) {
        console.log(response);
        // response.items.map((item) => {
        //   try {
        //     if (!item.id.playlistId) {
        //       var card = {};
        //       card.id = item.id;
        //       card.title = item.snippet.title;
        //       card.url = "https://www.youtube.com/embed/" + card.id;
        //       card.description = item.snippet.description;
        //       card.channelTitle = item.snippet.channelTitle;
        //       card.src = "http://img.youtube.com/vi/" + card.id + "/0.jpg";
        //       card.viewCount = item.statistics.viewCount;
        //       cards.splice(Math.floor(Math.random() * cards.length), 0, card);
        //       console.log(cards);
        //     }
        //   } catch (error) {
        //     console.log(error);
        //   }
        // });
      });
    },
  },
  mounted() {
    gapi.client.load("youtube", "v3");
    gapi.client.setApiKey(import.meta.env.VITE_YOUTUBE_API);

    console.log(import.meta.env.VITE_YOUTUBE_API);
  },
};
</script>
<style lang="stylus" scoped>
.settingBar
  float right
</style>
