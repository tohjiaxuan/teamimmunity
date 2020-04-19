<template>
  <div>
    <Navbar></Navbar>

    <b-container fluid>
      <b-row>
        <b-col class='first-section'>
          <b-row class='mt-5 pt-5'>
            <b-col align='center' class='pt-3'><span id='title'> Javascript: Easy </span>
            </b-col>
          </b-row>
          <br>

          <b-row>
            <b-col>
              <ul class="timeline">
              <li>
                <p> 1. Variable Types </p>
                <br>
                <br>
              </li>

              <li>
                <p>2. Loop </p>
                <br> <br>
              </li>
              <li>
                <p>3. Array </p>
                <br> <br>
              </li>
               <li>
                <p>4. Functions </p>
                <br> 
                <br>
              </li>
            </ul>
            

            <ul class="timeline2">
                <li>
                <p>5. Functional Programming </p>
                <br> <br>
                </li>
              
            </ul>
            </b-col>
          </b-row>   
        </b-col>

        <b-col cols='7' class='second-section p-5' >
          <b-row>
            <b-col align='center' class='pt-5 pb-5'>
              <span id='qn'> Question 5: Functional Programming </span>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <div id="grey1" class="shadow-lg p-3 mb-5 bg-grey rounded">
                <p id="description"> What will be the output of the following code? </p>
                <pre> <code> <br> var string2Num=parseInt("123xyz");  
          
                </code> </pre>

                <b-button v-b-toggle.collapse-1 variant="primary"> Hint </b-button>
                <b-collapse id="collapse-1" class="mt-2">
                  <b-card>
                    <p class="card-text"> Function returns the first integer contained in a string. </p>
                  </b-card>
                </b-collapse>
              </div>
            </b-col> 
          </b-row>

          <b-row>
              <div id = "options">  
                <b-form-group>
                  <b-form-radio-group size="lg"
                  v-model="selected"
                  :options="options"
                  name="radios-stacked"
                  stacked>
                  </b-form-radio-group>
                </b-form-group> 
        
              </div> 
          </b-row>

          <b-row>
            <b-col align='right'>
                <b-button v-b-toggle.collapse-2 variant="outline-dark"  v-on:click="check(selected)"> Submit </b-button>
                <b-collapse id="collapse-2" class="mt-2" >
                  <b-card>
                    <div>
                      <p class="text-left">
                      <span id='text' v-if="selected =='correct'"> Good job! 
                          The parseInt() function parses a string and returns an integer. 
                          The function returns the first integer contained in the string or 0 if the string does not begin with an integer.
                          </span>
                      <span id='text' v-else-if="selected =='wrong'"> Please try again! </span>
                      <span id='text' v-else> Please enter an answer! </span>
                      </p>
                    </div>
                  </b-card>
                </b-collapse>
                </b-col>
            </b-row>

          <b-row>

             <b-col align='left' >
              <router-link to="/Javascript_easy_qn4" >
              <b-button variant="outline-dark" id = "next" > Back </b-button>
              </router-link>
              </b-col>
            
            
            <b-col align='right' >
              <b-button variant="outline-dark" id = "next" @click="$bvModal.show('complete')" v-on:click='addBadge(); updateProgress(selected, 45); incrementActivity("javascript easy")'> Complete </b-button>
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
          test: '',
    
          options: [
     
            { text: '123', value: 'correct'},
            { text: 'NaN', value: 'wrong'},
            { text: '123xyz', value: 'wrong'},
            { text: 'Exception', value: 'wrong'}
          ]
        }
    },
    components: {
        Navbar,
        Footer,
    },
    methods: {
      check: function(ans) {
     
            if(ans == 'wrong'){
              this.test='h'
       
            }
            else {
              this.test='h'
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
    this.incrementClick("exercise_javascript_easy_5")
    this.updateCurrentlyOn('Javascript (Easy) Question 5')
    this.updateRecommended('Javascript (Medium) Question 1')
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

</style>