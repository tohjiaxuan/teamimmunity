<template>
  <div>
    <b-container fluid class='pb-5' style='background:linear-gradient(180deg, #CBE7F8 40%, rgba(222, 248, 254, 0) 100%);'>
      <b-row align='center' class='pb-5'>
        <b-col cols='12' md='4'>
          <b-img fluid src="/assets/python.png" v-b-popover.hover.bottom.v-warning="'Python is a general-purpose, versatile and modern programming language.'" class='mt-5 pt-5 w-75'></b-img>
          <b-row class='pt-5 mt-4'>
            <b-col class='pt-2 mt-4'>
              <b-button to="/language/python" variant="info" class='mt-4' v-on:click='incrementClick("language_python"); incrementLangActivity("python clicks")'>Let's Go</b-button>
              <b-icon-info class='mr-n3' v-b-popover.hover.topright.v-secondary="'Hover out the picture to find out more'"></b-icon-info>
            </b-col>
          </b-row>        
        </b-col>

        <b-col cols='12' md='4'>
          <b-img fluid src="/assets/java.png" v-b-popover.hover.bottom.v-warning="'Java is used for software development, mobile applications, and large system development.'" class='w-75'></b-img>
          <b-row class='pt-5 mt-3'>
            <b-col>
              <b-button to="/language/java" variant="info" class='mt-4' v-on:click='incrementClick("language_java"); incrementLangActivity("java clicks")'>Let's Go</b-button>
              <b-icon-info class='mr-n3' v-b-popover.hover.topright.v-secondary="'Hover out the picture to find out more'"></b-icon-info>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols='12' md='4'>
          <b-img fluid src="/assets/javascript.png" v-b-popover.hover.bottom.v-warning="'Javascript is the programming language of the web.'"></b-img>
          <b-row class='pt-5 mt-3'>
            <b-col class='mt-4'>
              <b-button to="/language/javascript" variant="info" class='mt-4' v-on:click='incrementClick("language_javascript"); incrementLangActivity("javascript clicks")'>Let's Go</b-button>
              <b-icon-info class='mr-n3' v-b-popover.hover.topright.v-secondary="'Hover out the picture to find out more'"></b-icon-info>
            </b-col>
          </b-row>
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

      <!-- <b-row align='center' class='mb-5 pb-4'>
        <b-col>
          <b-button to="/language/python" variant="info" class='mt-4' v-on:click='incrementClick("language_python"); incrementLangActivity("python clicks")'>Let's Go</b-button>
          <b-icon-info class='mr-n3' v-b-popover.hover.topright.v-secondary="'Hover out the picture to find out more'"></b-icon-info>
        </b-col>
        <b-col>
          <b-button to="/language/java" variant="info" class='mt-4' v-on:click='incrementClick("language_java"); incrementLangActivity("java clicks")'>Let's Go</b-button>
          <b-icon-info class='mr-n3' v-b-popover.hover.topright.v-secondary="'Hover out the picture to find out more'"></b-icon-info>
        </b-col>
        <b-col>
          <b-button to="/language/javascript" variant="info" class='mt-4' v-on:click='incrementClick("language_javascript"); incrementLangActivity("javascript clicks")'>Let's Go</b-button>
          <b-icon-info class='mr-n3' v-b-popover.hover.topright.v-secondary="'Hover out the picture to find out more'"></b-icon-info>
        </b-col>
      </b-row> -->
    </b-container>
  </div>
</template>

<script>
// import database from "../../firebase.js";
import clicks from "../Common/clicks.js"
export default {
  mixins: [clicks]
  // data() {
  //   return {
      
  //   }
  // },
  // methods : {
  //   incrementClick(id) { // change document id
  //     database.collection('clicks').doc(id).get().then(doc => {
  //       this.setData(id, doc.data().clicks + 1)
  //     })
  //   },
  //   setData(id, number) {
  //     database.collection('clicks').doc(id).set({clicks: number})
  //   },
  //   getClicks(id) { // change document id
  //     database.collection('clicks').doc(id).get() 
  //     .then(doc => {
  //       console.log(id + ' ' + doc.data().clicks)
  //     })
  //   }
  // }
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
