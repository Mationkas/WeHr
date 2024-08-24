<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'

const name = 'Home';

const components = {
  HelloWorld
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
