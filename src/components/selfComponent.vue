<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: { type: String, default: "" },
});

const state = reactive({
  count: 0,
});
</script>

<script>
// Vue2的寫法也可以

// export default {
//   props:{
//     msg: {type:String,default:''}
//   },
//   data(){
//     return {
//       count:0
//     }
//   }
// }
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
