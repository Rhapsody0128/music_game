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
import { h } from "vue";
export default {
  data() {
    return {};
  },
  methods: {
    async login() {
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
            console.log(res.Ws);
            let email = res.Ws.Ht;
            console.log("Sign-in successful");
            this.checkUserExist(email);
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
            this.$store.commit("login", res[0]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createUser(email) {
      this.$prompt("請輸入名字", "提示", {
        confirmButtonText: "確認",
        cancelButtonText: "取消",
        // inputPattern: /{20}/,
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
    this.checkUserExist("aaa");
    // this.createUser("asd");
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
