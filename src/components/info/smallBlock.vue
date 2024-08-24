<script>
export default {
  props: {
    title: {type: String, required: true},
    number: {type: String, required: true},
    subtitle: {type: String, required: true},
    boxColor: {type: String, required: true},
    textColor: {type: String, required: true},
  },
  setup(props) {
  }
}
</script>

<template>
  <div class="smallBlockBox" :style="{ backgroundColor: boxColor }">
    <div class="smallBlockTitle">
      {{ title }}
    </div>
    <div class="smallBlockNumber">
      {{ number }}
    </div>
    <div class="smallBlockSubtitle" :style="{ color: textColor }">
      {{ subtitle }}
    </div>
  </div>
</template>

<style>

.smallBlockBox{
  padding: 12px 12px 12px 20px;
  border-radius: 10px;
  color: var(--tertiary-color);
  max-height: 136px;
}

.smallBlockTitle{
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  padding-bottom: 16px;
}

.smallBlockNumber{
  font-weight: 500;
  font-size: 36px;
  line-height: 28px;
  padding-bottom: 16px;
}

.smallBlockSubtitle{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

@media (max-width: 1399px) {
  .smallBlockBox{
    padding: 14px 12px 14px 20px;
    border-radius: 10px;
    color: var(--tertiary-color);
    max-height: 136px;
  }
  .smallBlockTitle{
    font-size: 16px;
    line-height: 24px;
  }
  .smallBlockNumber{
    font-size: 32px;
  }
  .smallBlockSubtitle{
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .smallBlockBox{
    padding: 16px 12px 16px 20px;
    border-radius: 10px;
    color: var(--tertiary-color);
    max-height: 140px;
  }
}

</style>