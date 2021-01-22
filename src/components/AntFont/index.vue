<template>
  <!-- <ant-font type="'icon-' + types" /> -->
  <icon-font type="icon-xitongguanli" />
</template>

<script>
import { Icon } from 'ant-design-vue'
const IconFont  = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2343214_ghibdigpz9.js',
})
export default {
  name: 'AntFont',
  props: {
    types: {
      type: String,
      default: ''
    }
  },
  components: {
    IconFont ,
  }
}
</script>
