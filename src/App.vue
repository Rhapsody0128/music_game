<template lang="pug">
#App
  #Nav
    el-menu.el-menu-demo(mode='horizontal' :router='true')
      el-menu-item(index='/') Home
      el-menu-item(index='edit') Edit
      el-menu-item(index='play') Play
      el-menu-item(index='form') Form
      el-menu-item(index='user') User
  router-view
</template>
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
