<template>
  <div id='homepage'>
    <Header></Header>
    <Body></Body>
    <Bottom></Bottom>
    <home-footer id='footer'></home-footer>
  </div>
</template>

<script>
import Header from './Homepage/Header.vue'
import Body from './Homepage/Body.vue'
import Bottom from './Homepage/Bottom.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Body,
    Bottom,
    'home-footer': Footer
  }
}
</script>

<style scoped>
  #homepage{
    width: 100%;
    height: auto;
  }

  #footer {
    position: absolute;
    width: 454px;
    height: 30px;
    left: 1219px;
    top: 1400px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    z-index: 10;

    color: #000000;
  }

</style>