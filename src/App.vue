<template lang="pug">
#App
  #Nav
    el-menu.el-menu-demo(mode='horizontal' :router='true')
      el-menu-item(index='/') Home
      el-menu-item(index='edit') Edit
      el-menu-item(index='play') Play
      el-menu-item(index='form') Form
      el-menu-item(index='user') User
      el-menu-item(@click="login()") Login
  router-view
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async login() {
      var component = this;
      window.gapi.load("auth2");
      await window.gapi.auth2.init({
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      });
      await window.gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(
          async function (res) {
            console.log(res);
            component.name = res.Ts.Me;
            console.log("Sign-in successful");
          },
          function (err) {
            console.log("Error signing in", err);
          }
        );
      this.$store.commit("login", component.name);
      window.gapi.auth2.getAuthInstance().disconnect();
    },
    logout() {
      this.confirmLogout = false;
      this.$store.commit("logout");
    },
  },
};
</script>

<style lang="stylus">
*,html
  box-sizing border-box;
  margin 0
  padding 0
  font-family 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
#App
  position relative
  #Nav
    position fixed
    z-index 2
</style>
