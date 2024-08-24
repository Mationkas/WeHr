<script>
import {collapsed, toggleSidebar, sidebarWidth} from "./sidebar/state.ts";

export default {
  setup() {
    return {collapsed, toggleSidebar, sidebarWidth}
  }
}
</script>

<template>
    <div class="navbarOffset" :style="{ width: `calc(100% - ${sidebarWidth})`, 'padding-left': `${sidebarWidth}` }">
      <div class="navbarOuter">
        <div class="navbar">
          <div class="navbarLeftPart">
            <div class="navbarBurger"
                @click="toggleSidebar">
              <img src="../assets/images/ic_burgermenu.svg" alt="ic_burgermenu.svg"/>
            </div>
            <div class="navbarSearch">
              <input type="text" v-model="input" placeholder="Search"/>
              <div class="search-icon"></div>
            </div>
            <div class="navbarSmallSearch">
              <img src="../assets/images/ic_search.svg" alt="ic_burgermenu.svg"/>
            </div>
          </div>
          <div class="navbarSettings">
            <a href="/">
              <img src="src/assets/images/ic_round-notifications.svg" class="navbarMainMenuImage"
                   alt="ic_round-notifications.svg"/>
            </a>
            <a href="/">
              <img src="src/assets/images/bi_chat-left-dots-fill.svg" class="navbarMainMenuImage"
                   alt="bi_chat-left-dots-fill.svg"/>
            </a>
            <div class="navbarMainMenuUser">
              <img src="src/assets/images/pic_user.png" class="navbarMainMenuUserImage" alt="pic_user.png"/>
              <span>Admirra John</span>
              <img src="src/assets/images/ic_arrow.svg" class="navbarMainMenuUserArrow" alt="ic_arrow.svg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.navbarOffset{
  position: fixed;
}

.navbarOuter{
  margin-left: 50px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F1F1F1;
  padding: 23px 0;
  background-color: #FFFFFF;
}

.navbarLeftPart{
  display: flex;
  flex-direction: row;
  gap: 17px;
  align-items: center;
}

.navbarBurger,
.navbarSmallSearch{
  display: none;
}

.navbarSearch {
  position: relative;
  display: inline-block;
}

.navbarSearch input {
  padding: 9px 16px 9px 16px;
  border-radius: 4px;
  background: linear-gradient(0deg, #FAFAFA, #FAFAFA),
  linear-gradient(0deg, #E0E0E0, #E0E0E0);
  border: 1px solid #E0E0E0;
  color: #B3B3B3;
  font-family: 'poppins', serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 309px;
}

.navbarSearch .search-icon {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-image: url("../assets/images/ic_search.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.navbarSettings {
  display: inline-flex;
  align-items: center;
  max-height: 44px;
}

.navbarSettings a {
  height: 24px;
}

.navbarMainMenuImage {
  width: 24px;
  height: 24px;
  padding-right: 30px;
}

.navbarMainMenuUser {
  display: inline-flex;
  align-items: center;
  padding-right: 56.5px;
  color: var(--tertiary-color);
}

.navbarMainMenuUserImage {
  width: 42px;
  height: 42px;
  padding-right: 12px;
}

.navbarMainMenuUserArrow {
  padding-left: 4px;
  width: 24px;
  height: 24px;
}

@media (max-width: 991px) {
  .navbar {
    margin-left: 0;
    padding: 11.5px 0;
  }
  .navbarBurger{
    display: flex;
    margin-left: 13px;
    align-items: center;
  }
  .navbarSearch input {
    padding: 6px 16px 6px 16px;
    font-size: 14px;
    width: 245px;
  }
  .navbarMainMenuUser span{
    display: none;
  }
  .navbarMainMenuUserImage{
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 991px) {
  .navbarOuter{
    margin-left: 0;
  }
  .navbarMainMenuUserImage{
    padding-right: 8px;
  }
}

@media (max-width: 830px) {
  .navbarSearch{
    display: none;
  }
  .navbarSmallSearch{
    display: flex;
  }
}

@media (max-width: 767px) {
  .navbarLeftPart{
    gap: 19px;
  }
  .navbarBurger{
    margin-left: 20px;
  }
  .navbarMainMenuImage{
    padding-right: 16px;
  }
  .navbarMainMenuUser{
    padding-right: 20px;
  }
  .navbarMainMenuUserImage{
    padding-right: 6px;
  }
}

@media (max-width: 520px) {
  .navbarOffset{
    width: 100% !important;
    padding-left: 0 !important;
  }
}
</style>