<template>
  <div class="dropdown">
    <label for="lang" class="dropbtn">Select Language &#x25BC;</label>
    
    <div>
      <select id="lang" class="dd">
        <option value="python" selected class="dropdown-content" >Python</option>
        <option value="java" class="dropdown-content" >Java</option>
        <option value="js" class="dropdown-content" >JavaScript</option>
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
  .dropbtn {
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
  .dropdown {
    position: absolute;
    width: auto;
    height: 53px;
    left: 300px;
    top: 470px;
    display: inline-block;
  }

  .dd {
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
  .dropdown-content {
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
  .dropdown-content option {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content option:hover {background-color: #E5E5E5}
  .dd option:hover {background-color: #E5E5E5}

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #E5E5E5;
  }


  #lang {
    width: 256.5px;
    left:2.5px;
    background-color:#CBE7F8;
  }
    

</style>