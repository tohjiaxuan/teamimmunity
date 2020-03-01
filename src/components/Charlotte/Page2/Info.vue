<template>
  <div id="head">
    
    <span id="langu"> {{lang}} </span>
    <span id="diff"> {{diff}} </span>
    
    <router-link to="/Page3" id="ex1">  Exercise 1 </router-link>
    <router-link to="/Page3" id="ex2">  Exercise 2 </router-link>
    <router-link to="/Page3" id="ex3">  Exercise 3 </router-link>
    <router-link to="/Page3" id="ex4">  Exercise 4 </router-link>
    <router-link to="/Page3" id="ex5">  Exercise 5 </router-link>

 
  </div>
</template>


<script>
export default {

  data() {
    return {
      lang: 'Language: Python',
      diff: 'Difficulty: Easy (1)',
      ex1: 'Exercise 1',
      ex2: 'Exercise 2',
      ex3: 'Exercise 3',
      ex4: 'Exercise 4',
      ex5: 'Exercise 5'
    }
  }
}
</script>


<style scoped>

#head {
  width: 100%;
  height: auto;
}

#langu {
  position: absolute;
  width: auto;
  height: 115px;
  left: 400px;
  top: 100px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 80;
  font-size: 25px;
  line-height: 36px;
  display: flex;
  align-items: left;
  text-align: left; 
} 

#diff{
  position: absolute;
  width: auto;
  height: 115px;
  left: 900px;
  top: 100px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 80;
  font-size: 25px;
  line-height: 36px;
  display: flex;
  align-items: left;
  text-align: left;
}


#ex1 {
    position: absolute;
    width: 146px;
    height: 50px;
    left: 520px;
    top: 370px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 36px;
}

#ex2 {
    position: absolute;
    width: 146px;
    height: 50px;
    left: 950px;
    top: 370px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 36px;

}

#ex3 {
  position: absolute;
    width: 146px;
    height: 50px;
    left: 1300px;
    top: 500px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 36px;
}

#ex4 {
    position: absolute;
    width: 146px;
    height: 50px;
    left: 950px;
    top: 670px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 36px;

}

#ex5 {
    position: absolute;
    width: 146px;
    height: 50px;
    left: 520px;
    top: 670px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 36px;

}

</style>