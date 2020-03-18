<template>
<div id="biggest">
  <Navbar></Navbar>
  <b-container fluid id="main" class='bg-overlay'>
      <section class="pricing1 py-5">
        <h1 class="text-center"> Choose Your Level </h1>
        <br>
        <br>
      <b-row cols="3">
          <!-- Python -->
          <b-col>
              <b-card-group id="python" deck>
                  <b-card>
                      <b-row class="text-center" align-content="center" no-gutters="true">
                        <b-col md="4">
                            <b-card-img alt src="/assets/python2.png" left id="pythonimg" ></b-card-img>
                        </b-col>
                        <b-col align-self="center">
                            <h2 id="pythontitle"> Python Tutorial </h2>
                        </b-col>
                      </b-row>
                      <br>
                      <b-row lass="text-center" align-content="center" no-gutters="true">
                          <b-col md="4"></b-col>
                          <b-col align-self="center">
                            <b-dropdown id="python-drop" text="Select Difficulty Level" block variant="info">
                                <b-dropdown-item href="/qn1"> Easy (1) </b-dropdown-item>
                                <b-dropdown-item href="/qn1"> Medium (2) </b-dropdown-item>
                                <b-dropdown-item href="/qn1"> Hard (3) </b-dropdown-item>
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
          <b-col>
              <b-card-group deck>
                  <b-card>
                      <b-row class="text-center" align-content="center" no-gutters="true">
                        <b-col md="4">
                            <b-card-img alt src="/assets/java2.png" left id="javaimg" ></b-card-img>
                        </b-col>
                        <b-col align-self="center">
                            <h2 id="javatitle"> Java Tutorial </h2>
                        </b-col>
                      </b-row>
                      <br>
                      <b-row lass="text-center" align-content="center" no-gutters="true">
                          <b-col md="4"></b-col>
                          <b-col align-self="center">
                            <b-dropdown id="javadrop" text="Select Difficulty Level" block variant="info">
                                <b-dropdown-item href="/qn1"> Easy (1) </b-dropdown-item>
                                <b-dropdown-item href="/qn1"> Medium (2) </b-dropdown-item>
                                <b-dropdown-item href="/qn1"> Hard (3) </b-dropdown-item>
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
          <b-col>
              <b-card-group deck>
                  <b-card>
                      <b-row class="text-center" align-content="center" no-gutters="true">
                        <b-col md="3">
                            <b-card-img alt src="/assets/javascript.png" left id="javascriptimg" ></b-card-img>
                        </b-col>
                        <b-col align-self="center">
                            <h2 id="javascripttitle"> Javascript Tutorial </h2>
                        </b-col>
                      </b-row>
                      <br>
                      <b-row lass="text-center" align-content="center" no-gutters="true">
                          <b-col md="4"></b-col>
                          <b-col align-self="center">
                            <b-dropdown id="javascriptdrop" text="Select Difficulty Level" block variant="info">
                                <b-dropdown-item href="/qn1"> Easy (1) </b-dropdown-item>
                                <b-dropdown-item href="/qn1"> Medium (2) </b-dropdown-item>
                                <b-dropdown-item href="/qn1"> Hard (3) </b-dropdown-item>
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

export default {
    components: {
        Navbar,
        Footer,
    }
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
    .pricing1 .card:hover {
      box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
    }
    .pricing1 .card:hover .btn {
      opacity: 1;
    }
  }

</style>