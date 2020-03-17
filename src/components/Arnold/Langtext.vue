<template>
  <div>
    <b-container fluid class='pb-5' style='background:linear-gradient(180deg, #CBE7F8 40%, rgba(222, 248, 254, 0) 100%);'>
      <b-row align='center' class='pb-5'>
        <b-col>
          <b-img fluid src="/assets/python.png" v-b-popover.hover.bottom.v-info="'Python is a general-purpose, versatile and modern programming language.'" class='mt-5 pt-5 w-75'></b-img>
        </b-col>
        <b-col>
          <b-img fluid src="/assets/java.png" v-b-popover.hover.bottom.v-info="'Java is used for software development, mobile applications, and large system development.'" class='w-75'></b-img>
        </b-col>
        <b-col>
          <b-img fluid src="/assets/javascript.png" v-b-popover.hover.bottom.v-info="'Javascript is the programming language of the web.'"></b-img>
        </b-col>
      </b-row>

      <!-- <b-row align='center'>
        <b-col>
          <h1 class='w-75'>Python is a general-purpose, versatile and modern programming language.</h1>
        </b-col>
        <b-col>
          <h1 class='w-75'>Java is used for software development, mobile applications, and large system development.</h1>
        </b-col>
        <b-col>
          <h1 class='w-75'>Javascript is the programming language of the web.</h1>
        </b-col>
      </b-row> -->

      <b-row align='center' class='mb-5 pb-4'>
        <b-col>
          <b-button to="/language/python" variant="info" class='mt-4'>Let's Go</b-button>
          <b-icon-info class='mr-n3' v-b-popover.hover.topright.v-secondary="'Hover out the picture to find out more'"></b-icon-info>
        </b-col>
        <b-col>
          <b-button to="/language/java" variant="info" class='mt-4'>Let's Go</b-button>
          <b-icon-info class='mr-n3' v-b-popover.hover.topright.v-secondary="'Hover out the picture to find out more'"></b-icon-info>
        </b-col>
        <b-col>
          <b-button to="/language/javascript" variant="info" class='mt-4'>Let's Go</b-button>
          <b-icon-info class='mr-n3' v-b-popover.hover.topright.v-secondary="'Hover out the picture to find out more'"></b-icon-info>
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

span {
  font-family: Futura Hv BT;
  font-size: 10px;
}

</style>
