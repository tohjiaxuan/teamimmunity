<template>
  <div>
    <b-container fluid>
      <b-row class='pr-5'>
        <b-col align='right' class='p-5 mr-5'>
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
        text1: 'Arnold Ng',
      }
  }
}
</script>

<style scoped>
span {
  font-family: Futura Hv BT;
  font-size: 30px;
}
</style>
