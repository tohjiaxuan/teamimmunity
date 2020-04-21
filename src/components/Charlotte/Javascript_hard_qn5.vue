<template>
  <div>
    <Navbar></Navbar>

    <b-container fluid>
      <b-row>
        <b-col class='first-section'>
          <b-row class='mt-5 pt-5'>
            <b-col align='center' class='pt-3'><span id='title'> Java: Hard </span>
            </b-col>
          </b-row>
          <br>

          <b-row>
            <b-col>
              <ul class="timeline">
              <li>
                <p> 1. Shorthand Functions </p>
                <br>
                <br>
              </li>

              <li>
                <p>2. Pattern Matching </p>
                <br> <br>
              </li>
              <li>
                <p>3. Javascript Promises </p>
                <br> <br>
              </li>
               <li>
                <p>4. Function Overloading </p>
                <br> 
                <br>
              </li>
            </ul>
            

            <ul class="timeline2">
                <li>
                <p>5. Change Nodes </p>
                <br> <br>
                </li>
              
            </ul>
            </b-col>
          </b-row>   
        </b-col>

        <b-col cols='7' class='second-section p-5' >
          <b-row>
            <b-col align='center' class='pt-5 pb-5'>
              <span id='qn'> Question 5: Change Nodes </span>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <div id="grey1" class="shadow-lg p-3 mb-5 bg-grey rounded">
                <p id="description"> What is the output of the following code? </p>
                <pre> <b-img src="/assets/js_hard.png" fluid alt="Responsive image"></b-img> </pre>

                <b-button v-b-toggle.collapse-1 variant="primary" v-on:click='incrementHint("hard exercises hint", "js hard hint")'> Hint </b-button>
                <b-collapse id="collapse-1" class="mt-2">
                  <b-card>
                    <p class="card-text"> Recall the function of 'replaceChild()' and add commas to separate the output! </p>
                  </b-card>
                </b-collapse>
              </div>
            </b-col> 
          </b-row>

          <b-row>
              <div id = "options">  
                  <b-form-textarea
                  id="textarea"
                  v-model="selected" ></b-form-textarea>
        
              </div> 
          </b-row>

          <b-row>
            <b-col align='right'>
                <b-button v-b-toggle.collapse-2 variant="outline-dark"  v-on:click="check(selected)"> Submit </b-button>
                <b-collapse id="collapse-2" class="mt-2" >
                  <b-card>
                    <div>
                      <p class="text-left">
                      <span id='correct' v-if="status == 'correct'"> Good job!
                          Initially, the unordered list consists of elements Boost, Horlicks, and Maltova. 
                          After replacing the first element with Bournavita using replaceChild(), 
                          the output we get is Bournavita, Horlicks, and Maltova as shown in the output </span>
                      <span id='empty' v-else-if="selected ==''"> Please enter an answer! </span>
                      <span id='wrong' v-else> Please try again! </span>
                      </p>
                    </div>
                  </b-card>
                </b-collapse>
                </b-col>
            </b-row>

          <b-row>

            <b-col align='left' >
            <router-link to="/Javascript_hard_qn4" >
            <b-button variant="outline-dark" id = "next" > Back </b-button>
            </router-link>
            </b-col>

            
            <b-col align='right' >
              <b-button variant="outline-dark" id = "next" @click="$bvModal.show('complete')" v-on:click='addBadge(); updateProgress(status, 65); incrementActivity("javascript hard")'> Complete </b-button>
              <b-modal ref="my-modal" hide-footer id="complete">
                <div class="d-block text-center">
                  <h3>Congrats! You have completed the exercise!</h3>
                </div>
                <b-button class="mt-3" variant="outline-danger" block to='/exercise'>Try New Exercise</b-button>
                <b-button class="mt-2" variant="outline-secondary" block to='/account'>Bring Me Back</b-button>
                </b-modal>
              </b-col>
          </b-row>
        </b-col>

        <b-col class='third-section'>
                
        </b-col>
      </b-row>        
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../Common/Navbar.vue'
import Footer from '../Common/Footer.vue'
import clicks from "../Common/clicks.js"
import { mapState } from 'vuex'
import db from "../../firebase.js";
import updateProgress from '../Common/updateProgress_javascript.js'
export default {
    data() {

        return {
          selected: '',
          status: ''

        }
    },
    components: {
        Navbar,
        Footer,
    },
    methods: {
      check: function(ans) {
     
            if(ans == 'Bournavita, Horlicks, Maltova'){
              this.status='correct'
       
            }
            else {
              this.status='wrong'
            }
      },
      addBadge() {
        db.collection('users').doc(this.currentUser.uid).set({
          badges: this.userProfile.badges + 1
        }, {merge: true})
      }

  },
  computed: {
    ...mapState(['userProfile', 'currentUser']),
  },
  mixins: [clicks, updateProgress],
  created() {
    this.incrementClick("exercise_javascript_hard_5")
    this.updateCurrentlyOn('Javascript (Hard) Question 5')
    this.updateRecommended('None')
  }
}

      
        

</script>

<style scoped>

.first-section {
    background-color:aliceblue;
}

#title {

    font-size: 25px;
}

#qn {
    font-size: 35px;
}

button {
    font-family: Futura Hv BT;
}

span {
    font-family: Futura Hv BT;
    font-size: 25px;
}


.second-section {
    background-color: white;
}

.third-section {
    background-color: aliceblue
}

ul.timeline {
    list-style-type: none;
    position: relative;
    width:100%;
 
}


/* line */
ul.timeline:before {
    content: ' ';
    background: black;
    display: inline-block;
    position: absolute;
    left: 20%;
    width: 1%;
    height: 110%;
    z-index: 400;
 
}

/* words */
ul.timeline > li {
    padding-left: 20%;
    width: 100%;

}

ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid black;
    left: 17%;
    width: 20px;
    height: 20px;
    z-index: 400;

}

ul.timeline2 {
    list-style-type: none;
    position: relative;
    width:100%;
 
}




/* words */
ul.timeline2 > li {
    padding-left: 20%;
    width: 100%;
}

ul.timeline2 > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #22c0e8;
    left: 17%;
    width: 20px;
    height: 20px;
    z-index: 400;

}

#next {
  margin-top:2%;
}

#text {
  font-family: Futura Hv BT;
  font-size: 16px;

}

#options {
    width: 100%;
    margin-bottom: 2%;
}

</style>