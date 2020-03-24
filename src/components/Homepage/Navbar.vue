<template>
<div>
  <b-navbar toggleable="md" type="light" variant="outline-danger" fixed="top" class='bg-overlay'>
    <b-navbar-brand to="/" id="nav">
      <b-img src='assets/homecode.png' class='h-50 w-50 '></b-img>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">

        <b-button variant="outline-secondary" class="mr-2 h-50 w-75 mt-3" size="sm" to="/contact" pill>?</b-button> 

        <b-nav-item-dropdown text="☰" right id="menu" toggle-class="text-dark" no-caret class="drop">
          <b-dropdown-item to="/about" id="menu">About</b-dropdown-item>
           <b-dropdown-item to="/language" id="menu">Language</b-dropdown-item>
          <b-dropdown-item to="/proglang" id="menu">Module</b-dropdown-item>
          <b-dropdown-item to="/page1" id="menu">Exercise</b-dropdown-item>
          <b-dropdown-item to="/after" id="menu">Account</b-dropdown-item>
        </b-nav-item-dropdown>

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
}

.drop.dropdown{
  font-size: 30px;
  color: black;
}

.bg-overlay {
    /* background: linear-gradient(180deg, #CBE7F8 50%, rgba(222, 248, 254, 0) 100%); */
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #CBE7F8 ;
    /* height: 100vh; */
}

.b-img{
  height:1%
}
</style>