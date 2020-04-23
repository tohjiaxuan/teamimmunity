<template>
  <div>
    <Navbar></Navbar>
    <div id="bkg" class="bg-overlay">
      <b-container fluid class='my-container text-dark'>
        <b-row>
        <b-col align='center' class='p-5'>
          <h1>{{intro}}</h1>
        </b-col>
      </b-row>

      <b-row class="pl-1">
        <b-col>
          <b-card id="content" class="page-holder bg-overlay">
            <h2>{{introtxt}}</h2>
            <b-row class="pt-5"></b-row>
            <h3 class="pl-2">{{text1}}</h3>
            <b-container fluid>
              <b-row class="pt-1">
                <b-col class="pl-1 pr-5 mr-5">
                  <span><router-link to="/Java_easy_qn1"><b-button id="ex-btn">{{lang1}}</b-button></router-link></span>
                  <span class="pl-2"><router-link to="/Java_med_qn1"><b-button id="ex-btn">{{lang2}}</b-button></router-link></span>
                  <span class="pl-2"><router-link to="/Java_hard_qn1"><b-button id="ex-btn">{{lang3}}</b-button></router-link></span>     
                </b-col>  
              </b-row>
            </b-container>
            <b-row class="pt-5"></b-row>
            <b-row class="pt-5"></b-row>
            <hr/>
            <b-row>
              <b-col class="pt-3">
                <h2>Want to find out more about the differences between  different  programming languages?</h2>
              </b-col>
            </b-row>
            <b-row>
              <b-col class='pl-3'>
                <b-button variant='info' class='mt-2' to='/btn' id='start-btn' v-on:click='incrementClick("language_differences")'>Let's Get Started</b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col>
          <b-row>
            <b-col class='pt-5'>
              <b-card id="card" class="page-holder bg-overlay shadow-lg p-3 mb-5 bg-grey rounded">
                <h4 class='p-2'>School of Computing:</h4>
                  <ul class='pl-5 ml-3'>
                    <li>CS1010J</li>
                    <li>CS1020E</li>
                    <li>CS2030</li>
                    <li>CS2040</li>
                    <li>CS2104</li>
                  </ul>
              </b-card>
              <b-row class="pt-2"></b-row>
              <b-card id="card" class="shadow-lg p-3 mb-5 bg-grey rounded">
                <h4 class='p-2'>School of Business:</h4>
                  <ul class='pl-5 ml-3'>
                    <li></li>
                  </ul>
              </b-card>
            </b-col>
            <b-col class="pt-5">
              <b-card id="card" class="shadow-lg p-3 mb-5 bg-grey rounded">
                <h4 class='p-2'>School of Arts and Social Sciences:</h4>
                  <ul class='pl-5 ml-3'>
                    <li></li>
                  </ul>
              </b-card>
              <b-row class="pt-2"></b-row>
              <b-card id="card" class="shadow-lg p-3 mb-5 bg-grey rounded">
                <h4 class='p-2'>School of Science:</h4>
                  <ul class='pl-5 ml-3'>
                    <li></li>
                  </ul>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        
      </b-row>
      <Footer></Footer>
      </b-container>
    </div>



  </div>
</template>

<script>
import Navbar from '../Common/Navbar.vue'
import Footer from '../Common/Footer.vue'
import clicks from "../Common/clicks.js"
export default {
  name: 'Python',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      text1: 'Exercises available:',
      btntxt: "Let's Get Started",
      intro: 'Introduction to Java',
      introtxt: '"   Java is among the most popular programming languages out there, thanks to its versatility and compatibility. Java is used for software development, mobile applications, and large systems development.   "',
      mod: 'Modules that require Java',
      lang1: 'Java 1',
      lang2: 'Java 2',
      lang3: 'Java 3'
    }
  },
  mixins: [clicks]  
}
</script>

<style scoped>
#bkg {
  background: linear-gradient(180deg, #CBE7F8 0%, rgba(222, 248, 254, 0) 100%), url("/assets/java-language-logo.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: center center; */
  color: #fff;
  height: 100vh;
  width: 100vw;
}
#content {
  background: transparent;
  border-color: transparent;
}

h1 {
  font-family: Futura Hv BT;
  font-size: 50px;
}

h2 {
  font-family: Futura Hv BT;
  font-size: 30px;
}

h3 {
  font-family: Futura Hv BT;
  font-size: 25px;
}

h4 {
  font-family: Futura Hv BT;
  font-size: 30px;
  color: rgb(12, 12, 12);
}

ul {
  color: rgb(12, 12, 12);
  font-size: 20px;
}

hr {
  width: 70%;
  border-top: 3px solid rgba(3, 3, 3, 0.1);
}

#img {
  height: 80%;
}

#ex-btn {
  background-color:rgba(235, 181, 4, 0.959);
  width:18%; 
  font-family:'Futura Hv BT'; 
  font-size:17px; 
  color:#ffffff;
}

#card {
  background: white;
  opacity: 0.75;
}

#start-btn {
  font-family:'Futura Hv BT'; 
}

</style>