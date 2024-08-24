<script>
import {sidebarWidth} from "./sidebar/state.ts";
import SmallBlock from "./info/smallBlock.vue";
import Charts from "./info/charts.vue";
import RecentActivity from "./info/recentActivity.vue";
import Upcoming from "./info/upcoming.vue";
import Announcement from "./info/announcement.vue";

export default {
  components: {Announcement, Upcoming, RecentActivity, Charts, SmallBlock},
  setup() {
    return {sidebarWidth}
  }
}
</script>

<template>
  <div class="contentOffset" :style="{ width: `calc(100% - ${sidebarWidth})`, 'padding-left': `${sidebarWidth}` }">
    <div class="contentPlacement">
      <h4>
        Dashboard
      </h4>
      <div class="mainContent">
        <section class="mainContentTopPart">
          <div class="smallBoxesSpace">
            <div class="smallBoxesSpaceBox">
              <small-block title="Available Position" number="24" subtitle="4 Urgently needed" box-color="#FFEFE7"
                           text-color="var(--main-color)"></small-block>
            </div>
            <div class="smallBoxesSpaceBox">
              <small-block title="Job Open" number="10" subtitle="4 Active hiring" box-color="#E8F0FB"
                           text-color="#3786F1"></small-block>
            </div>
            <div class="smallBoxesSpaceBox">
              <small-block title="New Employees" number="24" subtitle="4 Department" box-color="#FDEBF9"
                           text-color="#EE61CF"></small-block>
            </div>
          </div>

          <div class="chartsSpace">
            <charts title="Total Employees" number="216" subtitle1="120 Men" subtitle2="96 Women"
                    img="src/assets/images/chart_1.svg"></charts>
            <charts title="Talent Request" number="16" subtitle1="6 Men" subtitle2="10 Women"
                    img="src/assets/images/chart_2.svg"></charts>
          </div>

          <div class="announcement">
            <announcement></announcement>
          </div>

        </section>

        <section class="mainContentBottomPart">

          <div class="recentActivity">
            <recent-activity></recent-activity>
          </div>
          <div class="upcoming">
            <upcoming></upcoming>
          </div>

        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contentOffset {
  padding-top: var(--navbar-offset);
}

h4 {
  font-family: 'Poppins', serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 42px;
  height: 42px;
  padding: 10px 10px 10px 0;
  margin: 11px 0 0 0;
  color: var(--tertiary-color);
}

.contentPlacement {
  display: flex;
  flex-direction: column;
  padding: 0 50px 0 51px;
}

.mainContent {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.mainContentTopPart,
.mainContentBottomPart{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.announcement {
  grid-area: 4 / 1 / 6 / 4;
}

.recentActivity {
  max-width: 427px;
}

.upcoming {
  max-width: 427px;
}

.smallBoxesSpace {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.smallBoxesSpaceBox {
  width: 100%;
  max-width: 204px;
}

.chartsSpace {
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
}

@media (max-width: 1399px) {
  .mainContent{
    flex-direction: column;
    gap: 20px;
  }
  .mainContentBottomPart{
    flex-direction: row;
    gap: 16px;
  }
  .smallBoxesSpaceBox {
    max-width: initial;
  }
  .recentActivity{
    max-width: 250px;
  }
  .upcoming{
    max-width: 100%;
    width: 100%;
  }
}

@media (max-width: 991px) {
  .contentOffset{
    width: calc(100% - 90px) !important;
    padding-left: 90px !important;
  }
  .contentPlacement {
    padding: 0 52px;
  }
}

@media (max-width: 767px) {
  .contentOffset{
    width: 100% !important;
    padding-left: 0 !important;
  }
  .contentPlacement {
    padding: 0 20px;
  }
  h4 {
    font-size: 20px;
    margin: 10px 0 0 0;
  }
  .mainContentTopPart{
    gap: 16px;
  }
}

@media (max-width: 750px) {
  .mainContentBottomPart{
    flex-direction: column;
    gap: 20px;
  }
  .recentActivity{
    max-width: initial;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .smallBoxesSpace{
    flex-direction: column;
  }
  .chartsSpace{
    flex-direction: column;
  }
}

</style>