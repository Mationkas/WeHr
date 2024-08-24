<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/sidebar/Sidebar.vue'
import MainContent from './components/MainContent.vue'
import {sidebarWidth} from "./components/sidebar/state.ts";
import Navbar from "./components/Navbar.vue";

const components = { Sidebar }

const setup = () => {
  return { sidebarWidth }
}

</script>

<template>
  <div class="row">
    <sidebar></sidebar>
    <navbar>
    </navbar>
  </div>
  <div>
    <main-content></main-content>
  </div>

</template>

<style scoped>
.row{
  display: flex;
  flex-wrap: wrap;
}
</style>
