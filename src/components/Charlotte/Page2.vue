<template>
    <div>
      <Navbar></Navbar>
      <Info></Info>
      <Race></Race>  
    </div>
</template>

<script>
import Navbar from '../About/Navbar.vue'
import Info from './Page2/Info.vue'
import Race from './Page2/Race.vue'

export default {
  components: {
    Navbar, 
    Info,
    Race,
  }
}
</script>

<style scoped>
div {
  height: auto;
  width: 100%;
}
</style>