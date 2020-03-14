<template>
  <div>
    <Navbar></Navbar>
    <Title></Title>

    <b-container fluid>
      <b-row>
        <b-col align='center'>
          <b-img fluid src='/assets/javascript.png' class='mt-2'></b-img>
          <h1 class='pt-5'>Introduction to Java</h1>
          <h2 class='pl-5 pr-5'>Java is among the most popular programming languages out there, thanks to its versatility and compatibility. Java is used for software development, mobile applications, and large systems development.</h2>

          <h3 class='pt-5 pb-4'>Exercises Available</h3>
          <b-container fluid>
            <b-row>
              <b-col><b-img fluid src="/assets/j1.jpg"></b-img></b-col>
              <b-col><b-img fluid src="/assets/j2.jpg"></b-img></b-col>
              <b-col><b-img fluid src="/assets/j3.jpg"></b-img></b-col>
            </b-row>
            <!-- <b-row>
              <b-col><b-img fluid src="/assets/p1.jpg" class='h-50'></b-img></b-col>
              <b-col><b-img fluid src="/assets/p1.jpg" class='h-50'></b-img></b-col>
              <b-col><b-img fluid src="/assets/p1.jpg" class='h-50'></b-img></b-col>
            </b-row> -->
          </b-container>

          <b-button variant='info' class='mt-5' href='/newlang'>Let's Get Started</b-button>

        </b-col>

        <b-col style='background: #E2F7FF; border-left:5px solid black'>
          <h3 class='pl-4 pt-5'>Modules that require Java</h3>

          <h2 class='pl-4 pt-4'>School of Computing:</h2>
          <ul class='pl-5 ml-3'>
            <li>CS1101S</li>
            <li>BT3103</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <h2 class='pl-4 pt-4'>School of Business:</h2>
          <ul class='pl-5 ml-3'>
            <li></li>
          </ul>

          <h2 class='pl-4 pt-4'>School of Arts and Social Sciences:</h2>
          <ul class='pl-5 ml-3'>
            <li>NM2207</li>
            <li></li>
          </ul>

          <h2 class='pl-4 pt-4'>School of Science:</h2>
          <ul class='pl-5 ml-3 pb-5'>
            <li></li>
            <li></li>
            <li></li>
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

export default {
  name: 'Javascript',
  components: {
    Navbar,
    Title,
    Footer,
  }
  
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
