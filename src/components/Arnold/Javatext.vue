<template>
  <div class="text">
    <img src="/assets/java.svg">
    <span id='text1'>{{text1}}</span>
    <router-link to="/java" id='text2'>{{text2}}</router-link>
  </div>
</template>

<script>
export default {
  data() {
      return {
          text1: 'Java is used for software development, mobile applications, and large system development.',
          text2: "Let's Go"
      }
  }
}
</script>

<style scoped>
#text1 {
    position: absolute;
    width: 249px;
    height: 111px;
    left: 645px; 
    top: 757px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #000000; 
}

#text2 {
    position: absolute;
    width: 125px;
    height: 30px;
    left: 731px;
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
  width: 185px;
  height: 340px;
  left: 675px;
  top: 384px;
}


</style>
