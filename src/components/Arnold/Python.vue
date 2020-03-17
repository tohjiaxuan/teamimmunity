<template>
  <div>
    <Navbar></Navbar>
    <Title></Title>
    
    <b-container fluid>
      <b-row>
        <b-col align='center'>
          <b-img fluid src='/assets/python1.png' class='pt-4'></b-img>
          <h1 class='pt-5'>{{intro}}</h1>
          <h2 class='pl-5 pr-5'>{{introtxt}}</h2>

          <h3 class='pt-5 pb-4'>{{text1}}</h3>
          <b-container fluid>
            <b-row>
              <b-col><b-img fluid src="/assets/p1.jpg"></b-img></b-col>
              <b-col><b-img fluid src="/assets/p2.jpg"></b-img></b-col>
              <b-col><b-img fluid src="/assets/p3.jpg"></b-img></b-col>
            </b-row>
            <!-- <b-row>
              <b-col><b-img fluid src="/assets/p1.jpg" class='h-50'></b-img></b-col>
              <b-col><b-img fluid src="/assets/p1.jpg" class='h-50'></b-img></b-col>
              <b-col><b-img fluid src="/assets/p1.jpg" class='h-50'></b-img></b-col>
            </b-row> -->
          </b-container>

          <b-button variant='info' class='mt-5' to='/btn'>Let's Get Started</b-button>

        </b-col>

        <b-col style='background: #E2F7FF; border-left:5px solid black'>
          <h3 class='pl-4 pt-5'>{{mod}}</h3>

          <h2 class='pl-4 pt-4'>{{com}}</h2>
          <ul class='pl-5 ml-3'>
            <li>CS1010S</li>
            <li>CS1010X</li>
            <li>BT2101</li>
            <li>BT4222</li>
            <li>BT5151</li>
            <li>IT3010</li>
          </ul>

          <h2 class='pl-4 pt-4'>School of Business:</h2>
          <ul class='pl-5 ml-3'>
            <li>DAO2702</li>
          </ul>

          <h2 class='pl-4 pt-4'>School of Arts and Social Sciences:</h2>
          <ul class='pl-5 ml-3'>
            <li>PH2113</li>
            <li>GE5219</li>
          </ul>

          <h2 class='pl-4 pt-4'>School of Science:</h2>
          <ul class='pl-5 ml-3 pb-5'>
            <li>COS2000</li>
            <li>CM3267</li>
            <li>DSA4212</li>
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
  name: 'Python',
  components: {
    Navbar,
    Title,
    Footer,
  },
  data() {
    return {
      text1: 'Exercises available',
      btntxt: "Let's Get Started",
      intro: 'Introduction to Python',
      introtxt: 'Python is a general-purpose, versatile and modern programming language. It’s great as a first language because it is concise and easy to read. Use it for everything from web development to software development and scientific applications.',
      mod: 'Modules that require Python',
      com: 'School of Computing:'
    }
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
