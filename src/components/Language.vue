<template>
  <div class='page'>
    <app-header></app-header>
    <Title></Title>
    <py></py>
    <jv></jv>
    <js></js>
    <app-footer id='footer'></app-footer>
  </div>
</template>

<script>
import Header from './About/Header.vue'
import Title from './Arnold/Title.vue'
import Pythontext from './Arnold/Pythontext.vue'
import Javatext from './Arnold/Javatext.vue'
import Javascripttext from './Arnold/Javascripttext.vue'
import Footer from './Arnold/Footer.vue'

export default {
  components: {
    'app-header': Header,
    Title,
    'py': Pythontext,
    'jv': Javatext,
    'js': Javascripttext,
    'app-footer': Footer,
  }
}
</script>

<style scoped>
.page {
  width:100%;
  height:auto;
}

#footer {
  position: absolute;
  width: 454px;
  height: 30px;
  left: 1219px;
  top: 1000px;

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