<template>
  <div class="text">
    <div id='img'></div>
    <span id='text1'>{{text1}}</span>
  </div>
</template>

<script>
export default {
  data() {
      return {
          text1: 'Learning New Languages',
          image: '/assets/title1.jpg'
      }
  }
}
</script>

<style scoped>
#text1 {
    position: absolute;
    width: 609px;
    height: 87px;
    left: 920px;
    top: 120px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 3;

    color: #000000;
}

#img {
    position: absolute;
    width: 100%;
    height: 215px;
    left: 0px;
    top: 87px;
    background: url('/assets/title1.jpg');
    background-size: cover;
    z-index:3;
}

</style>