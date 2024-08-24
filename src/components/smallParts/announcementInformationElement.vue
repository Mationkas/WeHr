<script>
export default {
  props: {
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required: true},
  },
  setup(props) {
  }
}
</script>

<template>
  <div class="announcementInformationElement">
    <div class="announcementInformationElementWrap">
      <div class="announcementInformationElementWrapText">
        <div class="announcementInformationElementWrapTextTitle">
          <b>{{ title }}</b> : {{ description }}
        </div>
        <div class="announcementInformationElementWrapTextDate">
          {{ price }} $, {{ rating }} ★
        </div>
      </div>
      <div class="announcementInformationElementWrapImg">
        <img src="src/assets/images/ic_pin-angle-active.svg">
        <img src="src/assets/images/ic_horizontal-menu.svg">
      </div>
    </div>
  </div>
</template>

<style>
.announcementBoxElements{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.announcementInformationElement{
  background-color: #FAFAFA;
  border-radius: 6px;
  border: 0.5px solid #E0E0E0;
  padding: 12px 16px;
}
.announcementInformationElementWrap{
  display: flex;
  gap: 29px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.announcementInformationElementWrapText{
  display: flex;
  gap: 6px;
  flex-direction: column;
  max-width: 405px;
}
.announcementInformationElementWrapTextTitle{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #303030;
}
.announcementInformationElementWrapTextDate{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #686868;
}
.announcementInformationElementWrapImg{
  display: flex;
  align-items: center;
  gap: 20px;
}
@media (max-width: 1399px) {
  .announcementInformationElementWrapTextTitle{
    font-size: 15px;
  }
  .announcementInformationElement{
    padding: 8px 16px;
  }
}

@media (max-width: 750px) {
  .announcementInformationElement{
    padding: 8px 9px 6px 14px;
  }
  .announcementInformationElementWrap{
    gap: 0;
    flex-direction: column;
    align-items: stretch;
  }
  .announcementInformationElementWrapText{
    gap: 9px;
  }
  .announcementInformationElementWrapTextTitle{
    font-size: 14px;
    line-height: 21px;
  }
  .announcementInformationElementWrapImg{
    margin-left: auto;
    margin-top: -19px;
  }
}

</style>