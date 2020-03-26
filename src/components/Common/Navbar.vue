<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="light" class='navbar fixed-top'>
        <b-navbar-brand to="/" id="nav">
        <b-img src='assets/code2.png' class='h-50 w-50 '></b-img>
        </b-navbar-brand>
          
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class='pr-2' v-on:click='incrementClick("home")'>Home</b-nav-item>
          <b-nav-item to="/about" class='pr-2' v-on:click='incrementClick("about")'>About</b-nav-item>
          <b-nav-item to="/language" class='pr-2' v-on:click='incrementClick("language")'>Language</b-nav-item>
          <b-nav-item to="/module" class='pr-2' v-on:click='incrementClick("module")'>Module</b-nav-item>
          <b-nav-item to="/exercise" class='pr-2' v-on:click='incrementClick("exercise")'>Exercise</b-nav-item>
          <b-nav-item to="/account" class='pr-2' v-on:click='incrementClick("account")'>Account</b-nav-item>
          <b-nav-item to="/" class='pr-2' v-on:click='incrementClick("logout")'>Logout</b-nav-item>
          <b-nav-item to="/contact" class='pr-2' v-on:click='incrementClick("contact")'>?</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      
    </b-navbar>
  </div>
</template>

<script>
import clicks from "../Common/clicks.js"
export default {
  mixins: [clicks]
}
</script>

<style scoped>

.navbar {
  font-family: Futura Hv Bt;
  color: black;
  /* font-size: 16px;; */
}

.nav-item {
  text-align: right;
}

</style>
