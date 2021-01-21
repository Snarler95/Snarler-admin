<template>
  <a-layout-sider class="slidebar" theme="light" :trigger="null" collapsible>
    <div class="slidebar-logo"></div>
    <div class="slidebar-menu">
      <a-menu mode="inline">
        <a-menu-item><a-icon type="appstore" />菜单项</a-menu-item>
        <a-sub-menu>
          <span slot="title"><a-icon type="appstore" /><span>子菜单</span></span>
          <a-menu-item>子菜单项</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script>
export default {

}
</script>

<style scoped>
  .slidebar .slidebar-logo {
    height: 64px;
  }
  .slidebar .slidebar-menu {
    flex: 1 1 0%;
    overflow: hidden auto;
  }
  .slidebar .ant-menu-inline {
    border-right: transparent;
  }
</style>