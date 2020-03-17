<template>
    <div>
      <navbar></navbar>
      <imgHeader></imgHeader>
      <Web2></Web2>
      <Page></Page>
      <py></py>
      <jv></jv>
      <next2></next2>
      <prev></prev>
      <Footer id='footer'></Footer>
      
    </div>
</template>

<script>
import navbar from '../About/Navbar.vue'
import imgHeader from './imgHeader.vue'
import Web2 from './Web2.vue'
import Page from './Page.vue'
import pythonPrinting from './pythonPrinting.vue'
import javaPrinting from './javaPrinting.vue'
import next2 from './next2.vue'
import prev from './prev.vue'
import Footer from '../Footer.vue'

export default {
  components: {
    'navbar': navbar,
    imgHeader,
    Web2,
    Page,
    'py': pythonPrinting,
    'jv': javaPrinting,
    next2,
    prev,
    Footer,    
  }
}
</script>

<style scoped>
div {
  width:100%;
  height:auto;
}

#footer {
  position: absolute;
  width: 454px;
  height: 30px;
  left: 1219px;
  top: 1200px;

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