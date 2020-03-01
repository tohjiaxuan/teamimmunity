<template>
  <div>
    <div id='line'></div>
    <span id='foot'>{{foot}}</span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            foot: 'Made with ❤️ ©️ (Website) 2020'
        }
    }
}
</script>

<style scoped>
#line {
    position: absolute;
    z-index: -1;
    width: 1350px;
    height: 45px;
    left: -250%;
    top: -10px;
    
    background: transparent;
    border: 2px solid #E5E5E5;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
}
/* #foot {
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
} */
</style>