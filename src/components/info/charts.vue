<script>
export default {
  props: {
    title: {type: String, required: true},
    number: {type: String, required: true},
    subtitle1: {type: String, required: true},
    subtitle2: {type: String, required: true},
    img: {type: String, required: true},
  },
  setup(props) {
  }
}
</script>

<template>
  <div class="chartBox">
    <div class="chartBoxSplit">
      <div class="chartTitle">
        {{ title }}
      </div>
      <div class="chartNumber">
        {{ number }}
      </div>
      <div class="chartSubtitle">
        {{ subtitle1 }}
      </div>
      <div class="chartSubtitle">
        {{ subtitle2 }}
      </div>
    </div>
    <div class="chartBoxSplitImages">
      <img class="chart" :src="img"/>
    </div>
  </div>
</template>

<style>

.chartBox{
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #E0E0E0;
  color: var(--tertiary-color);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  max-width: 312px;
}

.chartBoxSplitImages{
  display: flex;
  justify-content: center;
  align-items: center;
}

.chartBoxSplit img{
  height: 121px;
  width: 115px;
}

.chartTitle{
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  padding-bottom: 22px;
}

.chartNumber{
  font-weight: 500;
  font-size: 48px;
  line-height: 28px;
  padding-bottom: 32px;
}

.chartSubtitle{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--secondary-subtitle-color);
}

.chartBoxSplit div:nth-child(3) {
  margin-bottom: 2px;
}

@media (max-width: 1399px) {
  .chartBox{
    max-width: 100%;
    width: 100%;
  }
  .chartTitle{
    font-size: 16px;
    line-height: 24px;
  }
  .chartNumber{
    font-size: 42px;
  }
}

@media (max-width: 600px) {
  .chartBox{
    width: initial;
    padding: 22px 20px;
  }
}

</style>