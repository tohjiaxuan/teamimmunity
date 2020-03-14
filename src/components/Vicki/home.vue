<template>
    <div>
      <navbar></navbar>
      <imgHeader></imgHeader>
      <Web1></Web1>
      <select2></select2>
      <select3></select3>
      <!-- <subWeb></subWeb> -->
      <btn></btn>
      <Footer id='footer'></Footer>
    </div>
</template>
 
<script>
import navbar from '../About/Navbar.vue'
import imgHeader from './imgHeader.vue'
import Web1 from './Web1.vue'
import select2 from './select2.vue'
import select3 from './select3.vue'
// import subWeb from './subWeb.vue'
import btn from './btn.vue'
import Footer from '../Footer.vue' 
export default {
  components: {
    'navbar': navbar,
    imgHeader,
    Web1,
    select2,
    select3,
    // subWeb,
    btn,
    Footer,   
  }
}
</script>
 
<style scoped>
div {
  width:100%;
  height:auto
}

#footer {
  position: absolute;
  width: 454px;
  height: 30px;
  left: 1219px;
  top: 800px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #000000;
}
 
 
</style>
