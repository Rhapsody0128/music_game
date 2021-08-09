<template lang="pug">
img(src="./assets/logo.png")
selfComponent(msg='selfComponent')
p Store.Name = {{name}}
router-link(to='/') Home | 
router-link(to='/about')  About
router-view

</template>

<script setup>
import selfComponent from "./components/selfComponent.vue";

console.log("在script setup內的會在mounted之前被讀取");
</script>
<script>
export default {
  data() {
    return {
      name: "None",
    };
  },
  mounted() {
    console.log("在後面");
    this.name = this.$store.state.name;
  },
};
</script>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
</style>
