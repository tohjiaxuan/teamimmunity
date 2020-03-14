 <template>
<div>
  <b-navbar toggleable="md" type="light" variant="outline-danger" fixed="top" class='bg-overlay pb-1'>
    <b-navbar-brand to='/' id="nav">Code.io</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="☰" right id="menu" toggle-class="text-dark" no-caret class="drop">
          <b-dropdown-item to="/about" id="menu">About</b-dropdown-item>
          <b-dropdown-item to="/exercise" id="menu">Exercise</b-dropdown-item>
          <b-dropdown-item to="/language" id="menu">Language</b-dropdown-item>
          <b-dropdown-item to="/after" id="menu">Account</b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- <b-nav-item-dropdown right text="User" id="menu" toggle-class="text-dark">
          <b-dropdown-item href="#" id="menu">Sign In</b-dropdown-item>
          <b-dropdown-item href="#" id="menu">Register</b-dropdown-item>
        </b-nav-item-dropdown> -->
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
    /* background: linear-gradient(180deg, #a3f1ff 0%, rgba(222, 248, 254, 0) 100%); */
    background-repeat: no-repeat;
    background-size: cover;
    background-color:#CBE7F8;
    /* height: 100vh; */
}
</style>