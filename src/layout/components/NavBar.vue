<template>
  <a-layout-header>
    <div class="a-layout-content">
      <div>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </div>
      <div>
        <a-dropdown placement="bottomCenter" :trigger="['click', 'hover']">
          <span class="ant-dropdown-link" @click="e => e.preventDefault()">
            <a-avatar :size="30">
              <a-icon slot="icon" type="user" />
            </a-avatar>
            <span style="margin-left:10px;font-size:14px;">用户名</span>
          </span>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;"><a-icon type="user" />个人中心</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;"><a-icon type="setting" />个人设置</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
              <a href="javascript:;"><a-icon type="login" />退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  }
}
</script>

<style scoped>
  .ant-layout-header {
    padding: 0 24px;
    background-color: #fff;
  }
  .a-layout-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .ant-dropdown-link {
    display: inline-block;
    cursor: pointer;
  }
  /* .ant-dropdown-link :hover {
    background-color: #333;
  } */
</style>
