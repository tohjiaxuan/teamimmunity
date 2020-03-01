<template>
    <div>
      <Header></Header>
      <Info></Info>
      <Race></Race>  
    </div>
</template>

<script>
import Header from '../About/Header.vue'
import Info from './Page2/Info.vue'
import Race from './Page2/Race.vue'

export default {
  components: {
    Header, 
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