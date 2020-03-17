<template>
  <div>
    <Navbar></Navbar>
    <Title></Title>
    <Langtext></Langtext>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './Common/Navbar.vue'
import Title from './Arnold/Title.vue'
import Langtext from './Arnold/Langtext.vue'
import Footer from './Common/Footer.vue'

export default {
  components: {
    Navbar,
    Title,
    Langtext,
    Footer,
  }
}
</script>

<style scoped>

</style>