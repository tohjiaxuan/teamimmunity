<template>
  <div class="text">
    <img src="/assets/javascript.png">
    <span id='text1'>{{text1}}</span>
    <router-link to="/js" id='text2'>{{text2}}</router-link>
  </div>
</template>

<script>
export default {
  data() {
      return {
          text1: 'Javascript is the programming language of the web.',
          text2: "Let's Go"
      }
  }
}
</script>

<style scoped>
#text1 {
    position: absolute;
    width: 256px;
    height: 91px;
    left: 1118px;
    top: 757px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    text-align: right;

    color: #000000; 
}

#text2 {
    position: absolute;
    width: 125px;
    height: 30px;
    left: 1230px;
    top: 868px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;

    color: #000000;
}

img {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 1160px;
  top: 464px;
}

</style>
