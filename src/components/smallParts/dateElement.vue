<script setup lang="ts">
import { computed } from 'vue';

const formattedDate = computed(() => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  const todayString = today.toLocaleDateString('en-GB', options);
  return `Today, ${todayString}`;
});
</script>

<template>
  <div class="dateElementBox">
    <div class="dateElementTime">
      {{ formattedDate }}
    </div>
    <img src="src/assets/images/chevron.svg" alt="chevron.svg"/>
  </div>
</template>

<style>
  .dateElementBox{
    display: flex;
    flex-direction: row;
    gap: 6px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #EFEFEF;
    padding: 0 6px;
    border-radius: 4px;
  }
  .dateElementTime{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    color: #686868;
  }
</style>