<template>
  <a-layout-sider class="slidebar" theme="light" :trigger="null" collapsible>
    <div class="slidebar-logo"></div>
    <div class="slidebar-menu">
      <a-menu mode="inline">
        <a-menu-item><a-icon type="dashboard" />首页</a-menu-item>
        <a-sub-menu>
          <span slot="title">
            <ant-font />
            <span>系统管理</span>
          </span>
          <a-menu-item>
            <router-link to="/SystemMangement/UserManagement">用户管理</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/SystemMangement/DepartmentManagement">部门管理</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/SystemMangement/RoleManagement">角色管理</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/SystemMangement/MenuManagement">菜单管理</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script>
import AntFont from '../../components/AntFont'
export default {
  components:{ 
    AntFont
  }
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