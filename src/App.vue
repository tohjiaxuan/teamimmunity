<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  padding: 0px;
  margin: 0px;
  
  background-color: white;
}

html, body {
  width: 100%;
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;
  overflow-y:scroll;
  scrollbar-width: thin;
}  

</style>
