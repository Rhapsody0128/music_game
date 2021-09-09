<template lang="pug">
#App
  #Nav
    el-menu(mode='horizontal' :router='true')
      el-menu-item(index='/') Home
      el-menu-item(index='user' v-if="isLogging") User
      el-menu-item(index='user' disabled v-else) User
      el-avatar.avastr(v-if="isLogging" @click="logout()") {{getUser.name}}
      el-avatar.avastr(v-else icon='el-icon-user-solid' @click="login()")
  router-view
</template>
<script>
import { h } from "vue";
export default {
  data() {
    return {
      isLogging: false,
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    async login() {
      let email = "";
      window.gapi.load("auth2");
      await window.gapi.auth2.init({
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      });
      await window.gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(
          async function (res) {
            email = res.Ws.Ht;
            console.log("Sign-in successful");
          },
          function (err) {
            console.log("Error signing in", err);
          }
        );
      window.gapi.auth2.getAuthInstance().disconnect();
      this.checkUserExist(email);
    },
    logout() {
      this.isLogging = false;
      this.$store.commit("logout");
    },
    checkUserExist(email) {
      this.axios
        .get(import.meta.env.VITE_BACK_URL + "/users", {
          params: {
            email: email,
          },
        })
        .then((res) => {
          if (res.data.length == 0) {
            this.createUser(email);
          } else {
            this.$store.commit("login", res.data[0]);
            this.isLogging = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createUser(email) {
      this.$prompt("新增帳號", "請輸入暱稱", {
        confirmButtonText: "確認",
        cancelButtonText: "取消",
        inputErrorMessage: "名字請控制在20字內",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你好啊" + value,
          });
          this.axios
            .post(import.meta.env.VITE_BACK_URL + "/users", {
              name: value,
              email: email,
            })
            .then((res) => {
              this.$notify({
                title: "成功",
                message: h("i", { style: "color: teal" }, "成功創建帳號"),
              });
              this.checkUserExist(email);
            })
            .catch((error) => {
              this.$notify({
                title: "失敗",
                message: h("i", { style: "color: teal" }, "帳號創建失敗"),
              });
              console.log(error);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
  },
  mounted() {
    if (this.getUser.id !== null) {
      this.isLogging = true;
    }
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
    width 100%
    opacity 0.3
    transition 1s
    .avastr
      float right
      cursor pointer
      position absolute
      right  0
      transform translate(-30%,30%)
    &:hover
      opacity 1
</style>
