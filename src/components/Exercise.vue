<template>
    <div>
      <div>
      <img id='back' src='/assets/track.jpg'/>
      </div>
      <div>
      <Menu></Menu>
      <Header></Header>
      <Login></Login>
      <Footer id='footer'></Footer>
      </div>
    </div>
</template>

<script>
import Menu from './About/Header.vue'
import Header from './Charlotte/Page1/Header.vue'
import Login from './Charlotte/Page1/Login.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Menu,
    Header,
    Login,
    Footer
  }
}
</script>

<style scoped>
div {
  height:auto;
  width:100%;
}

#back {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  opacity: 49%;
  z-index: -1;        
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