<template>
  <div class="recentActivityHead">
    Recently Activity
  </div>
  <div class="recentActivityBox">
    <div class="recentActivityBoxTop">
      <div class="recentActivityBoxTopDate" >10.40 AM, Fri 10 Sept 2021</div>
      <div class="recentActivityBoxTopTitle">You Posted a New Job</div>
      <div class="recentActivityBoxTopText">Kindly check the requirements and terms of work and make sure everything is right.</div>
    </div>
    <div class="recentActivityBoxBottom">
      <div class="recentActivityBoxTopBtnText">Today you makes 12 Activity</div>
      <a class="recentActivityBoxTopBtn" href="#">See All Activity</a>
    </div>
  </div>
</template>

<style>
.recentActivityHead{
  background-color: #1B204A;
  border-radius: 10px 10px 0 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;
  padding: 10px 10px 10px 24px;
}

.recentActivityBox{
  padding: 26px 34px 26px 24px;
  border-radius: 0 0 10px 10px ;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
  linear-gradient(0deg, #161E54, #161E54);


  color: #FFFFFF;
}

.recentActivityBoxBottom{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.recentActivityBoxTop{
  padding-bottom: 28px;
}

.recentActivityBoxTopDate{
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 0.6);
}

.recentActivityBoxTopTitle{
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 6px;
}

.recentActivityBoxTopText{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.8);
}

.recentActivityBoxTopBtnText{
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}

.recentActivityBoxTopBtn{
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  text-align: center;
  padding: 10px 16px;
  background-color: var(--main-color);
  border-radius: 4px;
  color: #FFFFFF;
}

.recentActivityBoxTopBtn:hover{
  color: #FFFFFF;
}

@media (max-width: 1399px) {
  .recentActivityHead{
    font-size: 16px;
    line-height: 24px;
    padding: 16px 10px 16px 20px;
  }
  .recentActivityBox{
    padding: 21px 27px 24px 20px;
  }
  .recentActivityBoxTop{
    padding-bottom: 31px;
  }
  .recentActivityBoxTopDate{
    margin-bottom: 7px;
  }
  .recentActivityBoxTopTitle{
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 7px;
  }
  .recentActivityBoxTopText{
    letter-spacing: -0.3px;
  }
  .recentActivityBoxBottom{
    flex-direction: column;
    gap: 18px;
    align-items: initial;
  }
  .recentActivityBoxTopBtn{
    max-width: 114px;
  }
}

@media (max-width: 750px) {
  .recentActivityBox{
    padding: 24px 42px 31px 20px;
  }
  .recentActivityBoxTop{
    padding-bottom: 28px;
  }
}


</style>