<template>
  <div>
    <!-- <b-container fluid> 
      <b-row class='pr-5'>
        <b-col align='right' class='p-5 mr-5'>
          <span>{{text1}}</span>
        </b-col>
      </b-row>
    </b-container> -->
    <b-container fluid style='background:#CBE7F8;'> 
      <b-row>
        <b-col align='center' class='p-5'>
          <span>{{text1}}</span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
          text1: 'Programming Languages',
      }
  }
}
</script>

<style scoped>
span {
  font-family: Futura Hv BT;
  font-size: 50px;
}

b-container {
  background:#CBE7F8;
}
</style>
