<template>
    <div>
      <Navbar></Navbar>
      <Login></Login>
      <Footer></Footer>
  
    </div>
</template>

<script>

import Login from './Page1/Login.vue'
import Navbar from '../Common/Navbar.vue'
import Footer from '../Common/Footer.vue'

export default {
  components: {
    Login,
    Navbar,
    Footer
  }
}
</script>

<style scoped>


</style>