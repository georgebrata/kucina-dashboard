<template>
  <div class="wrapper">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/dishes">
        <md-icon>fastfood</md-icon>
        <p>Mancare</p>
      </sidebar-link>
      <sidebar-link to="/menu">
        <md-icon>restaurant</md-icon>
        <p>Meniuri</p>
      </sidebar-link>
      <sidebar-link to="/drink">
        <md-icon>local_bar</md-icon>
        <p>Racoritoare</p>
      </sidebar-link>
      <sidebar-link to="/orders">
        <md-icon>place</md-icon>
        <p>Comenzi</p>
      </sidebar-link>
      <sidebar-link to="/settings">
        <md-icon>settings</md-icon>
        <p>Setari</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}
</script>
