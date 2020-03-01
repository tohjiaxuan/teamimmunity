<template>
  <div class="text">
    <img src="/assets/python.png">
    <span id='text1'>Python is a general-purpose, versatile and modern programming language.</span>
    <router-link to="/python" id='text2'>
    <!-- <button>Let's Go</button> -->
    Let's Go
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#text1 {
    position: absolute;
    width: 346px;
    height: 96px;
    left: 132px;
    top: 757px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;

    color: #000000; 
}

#text2 {
    position: absolute;
    width: 125px;
    height: 30px;
    left: 242px;
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
  width: 460px;
  height: 153px;
  left: 5%;
  top: 528px;
}

button {
  background-color:#84CEEB; 
  width:100px; 
  height:40px;

  font-family:'Futura Hv BT';
  font-size:20px; 
  color:black;

  border-radius: 10px;
  border: none;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}

</style>
