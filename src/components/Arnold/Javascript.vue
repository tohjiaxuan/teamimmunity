<template>
  <div>
    <Navbar></Navbar>
    <Title></Title>

    <b-container fluid>
      <b-row>
        <b-col align='center'>
          <b-img fluid src='/assets/javascript.png' class='mt-2'></b-img>
          <h1 class='pt-5'>Introduction to Javascript</h1>
          <h2 class='pl-5 pr-5'>JavaScript is the programming language of the web. You can use it to add dynamic behavior, store information, and handle requests and responses on a website.</h2>

          <h3 class='pt-5 pb-4'>Exercises Available</h3>
          <b-container fluid>
            <b-row>
              <b-col><router-link to='/Javascript_easy_qn1'><b-img fluid src="/assets/js1.jpg"></b-img></router-link></b-col>
              <b-col><router-link to='/Javascript_med_qn1'><b-img fluid src="/assets/js2.jpg"></b-img></router-link></b-col>
              <b-col><router-link to='/Javascript_hard_qn1'><b-img fluid src="/assets/js3.jpg"></b-img></router-link></b-col>
            </b-row>
          </b-container>

          <b-button variant='info' class='mt-5 mb-5' to='/btn' v-on:click='incrementClick("language_differences")'>Let's Get Started</b-button>

        </b-col>

        <b-col style='background: #E2F7FF;' class='pb-5'>
          <h3 class='pl-4 pt-5'>Modules that require Javascript</h3>

          <h2 class='pl-4 pt-4'>School of Computing:</h2>
          <ul class='pl-5 ml-3'>
            <li>CS1101S</li>
            <li>BT3103</li>
          </ul>

          <h2 class='pl-4 pt-4'>School of Business:</h2>
          <ul class='pl-5 ml-3'>
            <li></li>
          </ul>

          <h2 class='pl-4 pt-4'>School of Arts and Social Sciences:</h2>
          <ul class='pl-5 ml-3'>
            <li>NM2207</li>
            <!-- <li></li> -->
          </ul>

          <h2 class='pl-4 pt-4'>School of Science:</h2>
          <ul class='pl-5 ml-3 pb-5'>
            <li></li>
            <!-- <li></li>
            <li></li> -->
          </ul>
        </b-col>
      </b-row>

    </b-container>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../Common/Navbar.vue'
import Title from './Title.vue'
import Footer from '../Common/Footer.vue'
import clicks from "../Common/clicks.js"
export default {
  name: 'Javascript',
  components: {
    Navbar,
    Title,
    Footer,
  },
  mixins: [clicks]  
  
}
</script>

<style scoped>

h1 {
  font-family: Futura Hv Bt;
  font-size: 25px;
  text-decoration-line: underline;
}

h2 {
  font-family: Futura Hv Bt;
  font-size: 20px;
}

h3 {
  font-family: Futura Hv Bt;
  font-size: 25px;
}

ul {
  font-family: Futura Hv Bt;
  font-size: 20px;
}

img {
  height:146px;
}

</style>
