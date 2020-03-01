<template>
  <div class="headerStyle">
    <header>
      <h1>{{ msg }}</h1>
    </header>
    
  </div>
</template>

<script>
export default {
  
  data(){
    return{
      msg: 'Let the Game Begin!'
    }
  }
}
</script>

<style scoped>
header{
  font-family: Futura Hv BT;
  font-style: italic;
  font-weight: 800;
  font-size: 50px;
  line-height: 73px;

  position: absolute;
  width: 1000px;
  height: 73px;
  left: 280px;
  top: 75px;
}

h1{
  color:#F33232;
}
</style>