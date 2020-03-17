<template>
  <div>
    <b-container fluid class='pb-5 mb-3'>
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
</style>
