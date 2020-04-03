<template>
  <div>
    <Navbar></Navbar>
    <Title></Title>

    <b-container fluid>
      <b-row>
        <b-col align='center'>
          <b-img fluid src='/assets/java.png' class='mt-3'></b-img>
          <h1 class='pt-5'>Introduction to Java</h1>
          <h2 class='pl-5 pr-5'>Java is among the most popular programming languages out there, thanks to its versatility and compatibility. Java is used for software development, mobile applications, and large systems development.</h2>

          <h3 class='pt-5 pb-4'>Exercises Available</h3>
          <b-container fluid>
            <b-row>
              <b-col><router-link to='/Java_easy_qn1'><b-img fluid src="/assets/j1.jpg"></b-img></router-link></b-col>
              <b-col><router-link to='/Java_med_qn1'><b-img fluid src="/assets/j2.jpg"></b-img></router-link></b-col>
              <b-col><router-link to='/Java_hard_qn1'><b-img fluid src="/assets/j3.jpg"></b-img></router-link></b-col>
            </b-row>
          </b-container>

          <b-button variant='info' class='mt-5' to='/btn' v-on:click='incrementClick("language_differences")'>Let's Get Started</b-button>

        </b-col>

        <b-col style='background: #E2F7FF;' class='pb-5'>
          <h3 class='pl-4 pt-5'>Modules that require Java</h3>

          <h2 class='pl-4 pt-4'>School of Computing:</h2>
          <ul class='pl-5 ml-3'>
            <li>CS1010J</li>
            <li>CS1020E</li>
            <li>CS2030</li>
            <li>CS2040</li>
            <li>CS2104</li>
            <li></li>
          </ul>

          <h2 class='pl-4 pt-4'>School of Business:</h2>
          <ul class='pl-5 ml-3'>
            <li></li>
          </ul>

          <h2 class='pl-4 pt-4'>School of Arts and Social Sciences:</h2>
          <ul class='pl-5 ml-3'>
            <li></li>
            <!-- <li></li> -->
          </ul>

          <h2 class='pl-4 pt-4'>School of Science:</h2>
          <ul class='pl-5 ml-3 pb-5 mb-5'>
            <li class='pb-4'></li>
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
  name: 'Java',
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
