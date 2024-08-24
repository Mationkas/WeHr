<script setup lang="ts">
import DateElement from "../smallParts/dateElement.vue";
import UpcomingInformationElement from "../smallParts/upcomingInformationElement.vue";
</script>

<template>
  <div class="upcomingBoxTop">
    <div class="upcomingBoxTopHead">
      <div class="upcomingBoxTopHeadSchedule">Upcoming Schedule</div>
      <date-element></date-element>
    </div>
    <div class="upcomingBoxTopElements">
      <div class="upcomingBoxElementDividers">Priority</div>
      <upcoming-information-element title="Review candidate applications" date="Today - 11.30 AM"></upcoming-information-element>
      <div class="upcomingBoxElementDividers">Other</div>
      <upcoming-information-element title="Interview with candidates" date="Today - 10.30 AM"></upcoming-information-element>
      <upcoming-information-element title="Short meeting with product designer from IT Departement"
                           date="Today - 09.15 AM"></upcoming-information-element>
      <upcoming-information-element title="Sort Front-end developer candidates" date="Today - 10.30 AM"></upcoming-information-element>
    </div>
  </div>
  <div class="upcomingBoxBottom">
    <button>Creat a New Schedule</button>
  </div>
</template>

<style>
.upcomingBoxTop {
  border: 1px solid #E0E0E0;
  border-radius: 12px 12px 0 0;
  padding: 21px 19px 0;
  height: 363px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.upcomingBoxTop::-webkit-scrollbar {
  display: none;
}

.upcomingBoxTopHead {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-left: 2px;
}

.upcomingBoxTopHeadSchedule {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #161E54;
}

.upcomingBoxTopElements{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.upcomingBoxElementDividers {
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  color: #686868;
  margin-left: -1px;
}

.upcomingBoxBottom {
  border-right: 1px solid #E0E0E0;
  border-bottom: 1px solid #E0E0E0;
  border-left: 1px solid #E0E0E0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
}

.upcomingBoxBottom button {
  color: var(--main-color);
  border: none;
  padding: 8.5px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background: none;
}

@media (max-width: 1399px) {
  .upcomingBoxTop{
    padding: 17px 18px 0 16px;
    height: 262px;
  }
  .upcomingBoxTopHead {
    margin-right: 1px;
    margin-bottom: 21px;
  }
  .upcomingBoxTopHeadSchedule{
    font-size: 16px;
    line-height: 24px;
  }
  .upcomingBoxElementDividers{
    margin-bottom: -4px;
    margin-left: 0;
  }
  .upcomingBoxTopElements .upcomingBoxElementDividers:not(:first-of-type){
    margin-top: 4px;
  }
}

@media (max-width: 750px) {
  .upcomingBoxTop{
    height: 328px;
    padding: 17px 20px 0;
  }
  .upcomingBoxTopHead{
    margin-bottom: 9px;
  }
  .upcomingBoxElementDividers{
    margin-bottom: -8px;
  }
  .upcomingBoxTopElements .upcomingBoxElementDividers:not(:first-of-type){
    margin-top: 1px;
  }
}
</style>