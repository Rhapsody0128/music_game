<template lang="pug">
#Edit
  el-header
    el-button(@click='save()') save
    el-button(@click='get()') get
  el-row(justify='center')
    el-col(:xl='16' :lg='20' :md='24')
      editboard(:music_data="musicData")
    
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
            timeStamp: [
              0.3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
              18, 19,
            ],
          },
          {
            key: "s",
            color: "rgb(0,10,15)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "d",
            color: "rgba(0,0,0,0.5)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "f",
            color: "rgba(255,255,255,1)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "4",
            color: "rgba(200,10,10,0.5)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "5",
            color: "rgba(200,200,10,0.5)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45],
          },
          {
            key: "6",
            color: "rgba(200,200,200,0.5)",
            timeStamp: [0.3, 0.8, 0.9, 1.2, 1.45, 0.3, 0.8, 0.9, 1.2, 1.45],
          },
        ],
      },
    };
  },
  methods: {
    save() {
      this.axios
        .post("http://localhost:4000" + "/data", ["music_data", this.musicData])
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    get() {
      this.axios
        .get("http://localhost:4000" + "/get")
        .then((res) => {
          console.log(res);
          console.log(res.data[0]);
          JSON.parse(res.data[0].map_data);
          console.log(JSON.parse(res.data[0].map_data));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.settingBar
  float right
</style>
