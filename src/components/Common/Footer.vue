<template>
  <div>
    <!-- <div id='line'></div>
    <span id='foot'>{{foot}}</span> -->
    <b-container fluid id='container' class='mt-n3'>
      <b-row>
        <b-col align='right' class='pb-3'>
          <hr>
          <span>{{foot}}</span>
        </b-col>
      </b-row>
    </b-container>
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

hr{
  border: 1px solid #E5E5E5;
}

span {
  font-family: Futura Hv Bt;
  font-size: 14px;
}

#container {
  background: transparent;
}

/* #line {
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
}  */


</style>