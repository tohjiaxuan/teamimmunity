<template>
<div id="biggest">
  <Navbar></Navbar>
  <b-container fluid id="main" class='bg-overlay'>
      <section class="exercisepage py-5">
        <h1 class="text-center"> Choose Your Level </h1>
        <br>
        <br>
      <b-row>
          <!-- Python -->
          <b-col cols='12' md='4'>
              <b-card-group deck>
                  <b-card class='pb-3'>
                      <b-row class="text-center" align-content="center" no-gutters>
                        <b-col md="4">
                            <b-card-img alt src="/assets/python2.png" left id="pythonimg"></b-card-img>
                        </b-col>
                        <b-col align-self="center">
                            <h2 id="pythontitle"> Python Tutorial </h2>
                        </b-col>
                      </b-row>
                      <br>
                      <b-row class="text-center pb-4" align-content="center" no-gutters>
                          <b-col md="4"></b-col>
                          <b-col align-self="center">
                            <b-dropdown id="python-drop" text="Select Difficulty Level" block variant="info">
                                <b-dropdown-item to="/Py_easy_qn1"> Easy (1) </b-dropdown-item>
                                <b-dropdown-item to="/Py_med_qn1"> Medium (2) </b-dropdown-item>
                                <b-dropdown-item to="/Py_hard_qn1"> Hard (3) </b-dropdown-item>
                            </b-dropdown>
                          </b-col>
                      </b-row>
                      <br>
                      <hr>
                      <b-row>
                          <b-col><h6 class="number">Total No. Of Exercises</h6></b-col>
                          <b-col><h6 class="hours">Time Needed</h6></b-col>
                      </b-row>
                      <b-row>
                          <b-col><h6 class="exercise">15</h6></b-col>
                          <b-col><h6 class="time">2hr</h6></b-col>
                      </b-row>
                  </b-card>
              </b-card-group>
          </b-col>

          <!-- Java --> 
          <b-col cols='12' md='4'>
              <b-card-group deck>
                  <b-card class='pb-3'>
                      <b-row class="text-center" align-content="center" no-gutters>
                        <b-col md="4">
                            <b-card-img alt src="/assets/java2.png" left id="javaimg"></b-card-img>
                        </b-col>
                        <b-col align-self="center">
                            <h2 id="javatitle" class='mt-n2'> Java Tutorial </h2>
                        </b-col>
                      </b-row>
                      <br>
                      <b-row class="text-center pb-4" align-content="center" no-gutters>
                          <b-col md="4"></b-col>
                          <b-col align-self="center">
                            <b-dropdown id="javadrop" text="Select Difficulty Level" block variant="info" class='mt-n1'>
                                <b-dropdown-item to="/Java_easy_qn1"> Easy (1) </b-dropdown-item>
                                <b-dropdown-item to="/Java_med_qn1"> Medium (2) </b-dropdown-item>
                                <b-dropdown-item to="/Java_hard_qn1"> Hard (3) </b-dropdown-item>
                            </b-dropdown>
                          </b-col>
                      </b-row>
                      <br>
                      <hr>
                      <b-row>
                          <b-col><h6 class="number">Total No. Of Exercises</h6></b-col>
                          <b-col><h6 class="hours">Time Needed</h6></b-col>
                      </b-row>
                      <b-row>
                          <b-col><h6 class="exercise">15</h6></b-col>
                          <b-col><h6 class="time">2.5hr</h6></b-col>
                      </b-row>
                  </b-card>
              </b-card-group>
          </b-col>

          <!-- Javascript --> 
          <b-col cols='12' md='4'>
              <b-card-group deck>
                  <b-card class='pb-3'>
                      <b-row class="text-center" align-content="center" no-gutters>
                        <b-col md="3">
                            <b-card-img alt src="/assets/javascript.png" left id="javascriptimg"></b-card-img>
                        </b-col>
                        <b-col align-self="center">
                            <h2 id="javascripttitle" class='mt-n2'> Javascript Tutorial </h2>
                        </b-col>
                      </b-row>
                      <br>
                      <b-row class="text-center pb-1" align-content="center" no-gutters>
                          <b-col md="4"></b-col>
                          <b-col align-self="center">
                            <b-dropdown id="javascriptdrop" text="Select Difficulty Level" block variant="info" class=''>
                                <b-dropdown-item to="/Javascript_easy_qn1"> Easy (1) </b-dropdown-item>
                                <b-dropdown-item to="/Javascript_med_qn1"> Medium (2) </b-dropdown-item>
                                <b-dropdown-item to="/Javascript_hard_qn1"> Hard (3) </b-dropdown-item>
                            </b-dropdown>
                          </b-col>
                      </b-row>
                      <br class='mb-3'>
                      <hr>
                      <b-row>
                          <b-col><h6 class="number">Total No. Of Exercises</h6></b-col>
                          <b-col><h6 class="hours">Time Needed</h6></b-col>
                      </b-row>
                      <b-row>
                          <b-col><h6 class="exercise">15</h6></b-col>
                          <b-col><h6 class="time">3hr</h6></b-col>
                      </b-row>
                  </b-card>
              </b-card-group>
          </b-col>
      </b-row>
      </section>
  </b-container>
<Footer></Footer>

</div>
</template>

<script>
import Navbar from '../Common/Navbar.vue'
import Footer from '../Common/Footer.vue'
import clicks from "../Common/clicks.js"
export default {
    components: {
        Navbar,
        Footer,
    },
    mixins: [clicks]
}
</script>

<style scoped>
#main {
    height: 100%;
    padding-top: 6%;
    padding-bottom: 9%;
}
.bg-overlay {
    background: linear-gradient(180deg, #CBE7F8 0%, rgba(222, 248, 254, 0) 100%), url("/assets/start.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    /* background-color: #CBE7F8 */
    /* height: 100vh; */
}
#pythonimg{
    width: 50%;
}
#javaimg{
    width: 40%;
}
#javascriptimg{
    width: 70%;
}
.number {
    color: grey;
    font-weight: lighter;
}
.hours {
    color: grey;
    font-weight: lighter;
}
.exercise {
    color: #1ebba6;
    font-weight: bolder;
}
.time {
    color: #1ebba6;
    font-weight: bolder;
}
  
  /* Hover Effects on Card */
  
  @media (min-width: 992px) {
    .exercisepage .card:hover {
      box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.9);
    }
    .exercisepage .card:hover .btn {
      opacity: 1;
    }
  }
</style>