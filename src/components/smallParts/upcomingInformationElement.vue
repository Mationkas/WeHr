<script>
export default {
  props: {
    title: {type: String, required: true},
    date: {type: String, required: true}
  },
  setup(props) {
  }
}
</script>

<template>
  <div class="upcomingInformationElement">
      <div class="upcomingInformationElementWrap">
        <div class="upcomingInformationElementWrapText">
          <div class="upcomingInformationElementWrapTextTitle">
            {{ title }}
          </div>
          <div class="upcomingInformationElementWrapTextDate">
            {{ date }}
          </div>
        </div>
        <div class="upcomingInformationElementWrapImg">
          <img src="src/assets/images/ic_horizontal-menu.svg" >
        </div>
      </div>
  </div>
</template>

<style>
  .upcomingInformationElement{
    background-color: #FAFAFA;
    border-radius: 6px;
    border: 0.5px solid #E0E0E0;
    padding: 10px 16px;
  }
  .upcomingInformationElementWrap{
    display: flex;
    gap: 29px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  .upcomingInformationElementWrapText{
    display: flex;
    gap: 6px;
    flex-direction: column;
    max-width: 283px;
  }
  .upcomingInformationElementWrapTextTitle{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #303030;
  }
  .upcomingInformationElementWrapTextDate{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #686868;
  }
  .upcomingInformationElementWrapImg{
    display: flex;
    align-items: center;
  }
  @media (max-width: 1399px) {
    .upcomingInformationElementWrapTextTitle{
      font-size: 14px;
    }
  }
  @media (max-width: 750px) {
    .upcomingInformationElement{
      padding: 8px 9px 6px 14px;
    }
    .upcomingInformationElementWrap{
      gap: 0;
      flex-direction: column;
      align-items: stretch;
    }
    .upcomingInformationElementWrapText{
      gap: 9px;
    }
    .upcomingInformationElementWrapTextTitle{
      font-size: 14px;
      line-height: 21px;
    }
    .upcomingInformationElementWrapImg{
      margin-left: auto;
      margin-top: -19px;
    }
  }

</style>