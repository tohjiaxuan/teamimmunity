<template>
    <div>
      <Header></Header>
      <Question></Question>
    </div>
</template>

<script>
import Header from '../About/Header.vue'
import Question from './Page3/Question.vue'

export default {
  components: {
    Header,
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