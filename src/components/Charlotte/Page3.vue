<template>
    <div>
      <Navbar></Navbar>
      <Question></Question>
    </div>
</template>

<script>
import Navbar from '../About/Navbar.vue'
import Question from './Page3/Question.vue'

export default {
  components: {
    Navbar,
    Question,
  }
}
</script>

<style scoped>
div {
  height:auto;
  width:100%;
}

</style>