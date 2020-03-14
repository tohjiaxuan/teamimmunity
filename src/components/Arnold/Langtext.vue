<template>
  <div>
    <!-- <img src="/assets/python.png">
    <h1 id='text1'>Python is a general-purpose, versatile and modern programming language.</h1>
    <router-link to="/python" id='text2'>
    <button>Let's Go</button>
    Let's Go
    </router-link> -->
    <b-container fluid class='pb-5 mb-2'>
      <b-row align='center'>
        <b-col>
          <b-img fluid src="/assets/python1.png" class='pt-5 mt-4'></b-img>
        </b-col>
        <b-col>
          <b-img fluid src="/assets/java_logo1.png" class='h-75'></b-img>
        </b-col>
        <b-col>
          <b-img fluid src="/assets/javascript.png" ></b-img>
        </b-col>
      </b-row>

      <b-row align='center'>
        <b-col>
          <h1 class='w-75'>Python is a general-purpose, versatile and modern programming language.</h1>
        </b-col>
        <b-col>
          <h1 class='w-75'>Java is used for software development, mobile applications, and large system development.</h1>
        </b-col>
        <b-col>
          <h1 class='w-75'>Javascript is the programming language of the web.</h1>
        </b-col>
      </b-row>

      <b-row align='center'>
        <b-col>
          <b-button to="/language/python" variant="info" class='mt-5'>Let's Go</b-button>
        </b-col>
        <b-col>
          <b-button to="/language/java" variant="info" class='mt-5'>Let's Go</b-button>
        </b-col>
        <b-col>
          <b-button to="/language/javascript" variant="info" class='mt-5'>Let's Go</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

h1 {
  font-family: Futura Hv BT;
  font-size: 20px;
}

.mt-5 {
  font-family: Futura Hv BT;
}


/* #text1 {
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
} */

</style>
