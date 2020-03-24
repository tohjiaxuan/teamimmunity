<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="light" class='navbar fixed-top'>
        <b-navbar-brand to="/" id="nav">
        <b-img src='assets/code2.png' class='h-50 w-50 '></b-img>
        </b-navbar-brand>
          
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class='pr-2'>Home</b-nav-item>
          <b-nav-item to="/about" class='pr-2'>About</b-nav-item>
          <b-nav-item to="/language" class='pr-2' >Language</b-nav-item>
          <b-nav-item to="/proglang" class='pr-2'>Module</b-nav-item>
          <b-nav-item to="/page1" class='pr-2'>Exercise</b-nav-item>
          <b-nav-item to="/after" class='pr-2'>Account</b-nav-item>
          <b-nav-item to="/" class='pr-2'>Logout</b-nav-item>
          <b-nav-item to="/contact" class='pr-2'>?</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      
    </b-navbar>
  </div>
</template>

<script>
export default {
  
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
