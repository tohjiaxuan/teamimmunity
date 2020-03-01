<template>
  <div class="container">

    <div id="box">
      <div class="dropdown">
        <label for="main1">Language</label>
        <select id="main1">
          <option value="top1" disabled>Please select a language:</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javascript">Javascript</option>
        </select>
          
      </div>
    </div>
      
    <p></p>

    <div id="box2">
      <div class="dropdown">
        <label for="main2">Difficulty</label>
        <select id="main2">
          <option value="top2" disabled>Please select difficulty level:</option>
          <option value="1">Easy (1)</option>
          <option value="2">Medium (2)</option>
          <option value="3">Hard (3)</option>
        </select>

        
      </div>
    </div>

    <router-link to="/Page2" tag="race">
      <button id = "race"> 
        Go
      </button>
    </router-link>

  
  </div>
 
</template>

<script>
export default {
  data () {
    return {
      user: {
        language: "",
        difficulty: ""
      }
    }
  }
  
}
</script>


<style scoped>

  #box {
    font-family:'Futura Hv BT';
    font-size: 30px;
    position: absolute;
    width: 500px;
    height: 150px;
    left: 500px;
    top: 330px;
  }

  #box2 {
    font-family:'Futura Hv BT';
    font-size: 30px;
    position: absolute;
    width: 500px;
    height: 150px;
    left: 500px;
    top: 430px;
  }

  select {
    width: 456px;
    height: 40px;
    font-size: 15px;
    font-family:'Futura Hv BT';
  }

  #race {
    position: absolute;
    width: 150px;
    height: 69px;
    left: 995px;
    top: 600px;
    background-color:#84CEEB;
    color: #ffffff;
    font-family:'Futura Hv BT'; 
    font-size:25px;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    box-sizing: border-box;
    border-radius:20px;
    cursor: pointer;
    
  }
  #race:hover {
    opacity: 0.8;
  }

  b {
    font-family: 'Futura Hv BT'
  }

  .txtbox {
    height:50px; 
    width:300px; 
    font-family: 'Futura Hv BT'; 
    font-size: 25px
  }



</style>