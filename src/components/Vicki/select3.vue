<template>
  <div class="dropdown2">
    <label for="lang1" class="dropbtn2">Select Language  &#x25BC;</label>
    
    <div>
      <select id="lang1" class="dd2">
        <option value="python" class="dropdown-content2" >Python</option>
        <option value="java" class="dropdown-content2" selected>Java</option>
        <option value="js" class="dropdown-content2">JavaScript</option>
      </select>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>


<style scoped>


  /* Style The Dropdown Button */
  .dropbtn2 {
    background-color: #E5E5E5;
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    font-family: Futura HV BT;
    font-style: normal;
    font-weight: 900px;
    font-size: 25px;
  
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown2{
    position: absolute;
    width: auto;
    height: 53px;
    right: 270px;
    top:470px;
    display: inline-block;
  }

  .dd2 {
    font-family: Futura HV BT;
    font-size: 20px;
    position: absolute;
    width: 130px;
    height: 53px;
    left: 130px;
    top: 50px;
    display: inline-block;
    text-align: center;
    -webkit-appearance: none;
    padding: 10px 20px 0px 10px;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content2 {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 300px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    font-family: Futura HV BT;
    font-size: 20px;

  }

  /* Links inside the dropdown */
  .dropdown-content2 option {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content2 option:hover {background-color: #E5E5E5}
  .dd2 option:hover {background-color: #E5E5E5}

  /* Show the dropdown menu on hover */
  .dropdown2:hover .dropdown-content2 {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown2:hover .dropbtn2 {
    background-color: #E5E5E5;
  }

  #lang1 {
    width: 256.5px;
    left:2.5px;
    background-color:#CBE7F8;
  }

    

</style>