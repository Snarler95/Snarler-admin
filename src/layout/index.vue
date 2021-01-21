<template>
  <a-layout style="min-height: 100vh">
    <slide-bar />
    <a-layout>
      <nav-bar />
      <app-main />
    </a-layout>
  </a-layout>
</template>

<script>
import SlideBar from './components/SlideBar'
import NavBar from './components/NavBar'
import AppMain from './components/Main'
export default {
  components: {
    SlideBar,
    NavBar,
    AppMain
  }
}
</script>

<style>

</style>
