<template>
  <a-layout-header>
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="() => (collapsed = !collapsed)"
    />
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

<style>
  .ant-layout-header {
    background-color: #fff;
  }
</style>
