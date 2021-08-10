<template lang="pug">
#App
  #Nav
    el-menu.el-menu-demo(:default-active='activeIndex' mode='horizontal' @select='handleSelect' router='True')
      el-menu-item(index='/') Home
      el-menu-item(index='edit') Edit
  router-view
</template>
<style lang="stylus">
*,html
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
