<template>
  <div>
    <b-container fluid id='container' class='mt-n3'>
      <b-row>
        <b-col align='right' class='pb-3'>
          <hr>
          <span>{{foot}}</span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            foot: 'Made with ❤️ ©️ Code.io 2020'
        }
    }
}
</script>

<style scoped>

hr{
  border: 1px solid #E5E5E5;
}

span {
  font-family: Futura Hv Bt;
  font-size: 14px;
}

#container {
  background: transparent;
}

</style>