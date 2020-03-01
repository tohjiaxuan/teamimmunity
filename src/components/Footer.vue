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
            foot: 'Made with ❤️ ©️ Code.io 2020'
        }
    }
}
</script>

<style scoped>

#line {
  position: absolute;
  z-index: -1;
  width: 1270px;
  height: 45px;
  left: -250%;
  top: -10px;
  
  background: transparent;
  border: 2px solid #E5E5E5;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
} 


</style>