<template>
    <div>
      <navbar></navbar>
      <imgHeader></imgHeader>
      <Web></Web>
      <Page></Page>
      <ps></ps>
      <js></js>
      <next></next>
      <Footer id='footer'></Footer>
    </div>
</template>

<script>
import navbar from '../About/Header.vue'
import imgHeader from './imgHeader.vue'
import Web from './Web.vue'
import Page from './Page.vue'
import pythonSyntax from './pythonSyntax.vue'
import javaSyntax from './javaSyntax.vue'
import next from './next.vue'
import Footer from '../Footer.vue'
export default {
  components: {
    'navbar': navbar,
    imgHeader,
    Web,
    Page,
    'ps': pythonSyntax,
    'js': javaSyntax,
    next,
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