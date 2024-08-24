<script>
import SidebarLink from "./SidebarLink.vue";
import {collapsed, toggleSidebar, sidebarWidth} from "./state.ts";

export default {
  props: {},
  components: {SidebarLink},
  setup() {
    return {collapsed, toggleSidebar, sidebarWidth}
  }
}
</script>

<template>
  <div class="sidebar" :class="`${collapsed && 'collapsed'}`">
    <div class="sidebarBurger"
         @click="toggleSidebar">
      <img src="/src/assets/images/ic_burgermenu.svg" alt="ic_burgermenu.svg"/>
    </div>
    <div class="sidebarLogo">
      <h1>
        WeHR
      </h1>
    </div>
    <div class="sidebarMainMenu">
      <h4>MAIN MENU</h4>
      <div class="sidebarMenuElements">
        <SidebarLink icon="src/assets/images/ic_dashboard.svg" to="/">Dashboard</SidebarLink>
        <SidebarLink icon="src/assets/images/ic_recruitment.svg" to="/Recruitment">Recruitment</SidebarLink>
        <SidebarLink icon="src/assets/images/ic_calendar.svg" to="/Schedule">Schedule</SidebarLink>
        <SidebarLink icon="src/assets/images/ic_employee.svg" to="/Employee">Employee</SidebarLink>
        <SidebarLink icon="src/assets/images/ic_department.svg" to="/Department">Department</SidebarLink>
      </div>
    </div>
    <div class="sidebarOther">
      <h4>OTHER</h4>
      <div class="sidebarMenuElements">
        <SidebarLink icon="src/assets/images/ic_support.svg" to="/Support">Support</SidebarLink>
        <SidebarLink icon="src/assets/images/ic_settings.svg" to="/Settings">Settings</SidebarLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  color: var(--secondary-subtitle-color);
  background-color: var(--background-color);
  width: 242px;
  height: 100%;

  position: fixed;
  float: left;

  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  /*padding: 20px 0 272px 0;*/

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebarBurger{
  display: none;
}

.sidebarLogo {
  font-family: 'Poppins', serif;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 39px;
}

.sidebarLogo h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  padding: 10px;
  gap: 10px;
}

h1 {
  font-size: 36px;
  line-height: 42px;
  font-weight: 600;
  margin: 0;
  color: #000000;
}

.sidebarMainMenu {
  display: flex;
  flex-direction: column;
  padding-bottom: 39px;
}

.active {
  color: var(--main-color);
}

h4 {
  font-family: "Roboto", sans-serif;
  color: var(--secondary-subtitle-color);
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  padding: 10px 0 10px 30px;
  text-align: left;
  margin: 0;
}

.sidebarMainMenu ul,
.sidebarOther ul {
  margin: 0;
  padding: 0;
}

.sidebar li {
  padding: 0;
  gap: 24px;
  text-align: left;
}

.sidebar li a {
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 16px 0 16px 30px;
}

.sidebar li a:hover {
  color: var(--main-color);
}

.sidebarMainMenuImage {
  width: 24px;
  height: 24px;
  padding-right: 24px;
}

a {
  color: var(--secondary-subtitle-color);
}

@media (max-width: 991px) {
  .sidebar.collapsed{
    width: 90px;
  }
  .sidebarLogo {
    padding: 40px 0 20px;
  }
  .sidebarLogo h1 {
    font-size: 20px;
    line-height: 42px;
    padding: 1px;
  }
  h4 {
    font-size: 10px;
    line-height: 18px;
    padding: 10px 0 20px;
    text-align: center;
  }
  .sidebarMenuElements{
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
}

@media (max-width: 767px) {
  .sidebar.collapsed{
    display: none;
  }
}

@media (max-width: 520px) {
  .sidebarBurger{
    display: flex;
    margin-top: 17px;
    margin-left: 20px;
  }
}

</style>