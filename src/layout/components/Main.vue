<template>
  <a-layout-content>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </a-layout-content>
</template>

<script>
export default {

}
</script>

<style>
  .ant-layout-content {
    margin: 24px;
  }
</style>