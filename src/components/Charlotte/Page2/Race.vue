<template>
  <div class="track">
     
      <div id="line"> </div>
      <div id="startrect"> </div>
      <div id="start"> {{start}} </div>
      <div id="endrect"> </div>
      <div id="endtext"> {{endtext}} </div>
      <img id="car" src='/assets/car.png'>
  
      <img id="flag1" src="/assets/race.png">
      <img id="flag2" src="/assets/race.png">
      <img id="flag3" src="/assets/race.png">
      <img id="flag4" src="/assets/race.png">
      <img id="flag5" src="/assets/race.png">
      <img id="end" src="/assets/end.png">
     
    
  </div>
</template>

<script>
export default {
  
  data(){
    return{
       start: 'Start', 
       endtext: 'End'
        }
    }
}
</script>

<style scoped>


#line {
  position: absolute;
  width: 896.72px;
  height:300px;
  left: 400px;
  /* left: calc(50% - 896.72px/2 + 58.63px); */
  top: 370px;

  border: 1px solid #000000;
  border-radius: 25px;
  border-left:0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  z-index: -1;
}

#car {
  position: absolute;
  width: 150px;
  height: 150px;
  left: 330px;
  top: 240px;
}

#flag1 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 570px;
  top: 320px;
}

#flag2 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1000px;
  top: 320px;
}

#flag3 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1330px;
  top: 460px;
}

#flag4 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1000px;
  top: 620px;
}

#flag5 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 570px;
  top: 620px;
}

#end {
  position: absolute;
  width: 70px;
  height: 70px;
  left: 370px;
  top: 570px;
}

#endtext {
  position: absolute;
    width: auto;
    height: auto;
    left: 380px;
    top: 645px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 80;
    font-size: 25px;
    line-height: 36px;
    display: flex;
    align-items: left;
    text-align: left;
}

#endrect {
 
  position: absolute;
  width: 100px;
  height: 50px;
  left: 350px;
  top: 640px;
  background: white;
  border: 1px solid #000000;
  

}

#start {
  position: absolute;
    width: auto;
    height: auto;
    left: 370px;
    top: 350px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 80;
    font-size: 25px;
    line-height: 36px;
    display: flex;
    align-items: left;
    text-align: left;
}

#startrect {
 
  position: absolute;
  width: 100px;
  height: 50px;
  left: 350px;
  top: 340px;
  background: white;
  border: 1px solid #000000;
}


</style>