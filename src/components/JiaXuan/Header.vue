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
      text1: 'Progr. Languages Relevant to Module',
    }
  }
}
</script>

<style scoped>
#text1 {
    position: absolute;
    width: 609px;
    height: 87px;
    left: 854px;
    top: 110px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;

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
}

</style>