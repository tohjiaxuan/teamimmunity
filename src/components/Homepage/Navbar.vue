<template>
<div>
  <b-navbar toggleable="md" type="light" variant="outline-danger" fixed="top" class='bg-overlay'>
    <b-navbar-brand to="/" id="nav" v-on:click='incrementClick("home")'>
      <b-img src='assets/homecode.png' class='h-50 w-50 '></b-img>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">

        <b-button variant="outline-secondary" class="mr-2 h-50 w-75 mt-3" size="sm" to="/contact" pill>?</b-button> 

        <b-nav-item-dropdown text="☰" right id="menu" toggle-class="text-dark" no-caret class="drop">
          <b-dropdown-item to="/about" id="menu" v-on:change='incrementClick("about")'>About</b-dropdown-item>
          <b-dropdown-item to="/language" id="menu" v-on:change='incrementClick("language")'>Language</b-dropdown-item>
          <b-dropdown-item to="/module" id="menu" v-on:change='incrementClick("module")'>Module</b-dropdown-item>
          <b-dropdown-item to="/exercise" id="menu" v-on:change='incrementClick("exercise")'>Exercise</b-dropdown-item>
          <b-dropdown-item to="/account" id="menu" v-on:change='incrementClick("account")'>Account</b-dropdown-item>
        </b-nav-item-dropdown>

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