<template>
  <div>
    <Navbar></Navbar>

    <b-container fluid>
      <b-row>
        <b-col class='first-section'>
          <b-row class='mt-5 pt-5'>
            <b-col align='center' class='pt-3'><span id='title'> Python: Hard </span>
            </b-col>
          </b-row>
          <br>

          <b-row>
            <b-col>
              <ul class="timeline">
                <li>
                  <p> 1. Function </p>
                  <br>
                  <br>
                </li>
              </ul>

              <ul class="timeline2">
                <li>
                  <p>2. Function </p>
                  <br> <br>
                </li>

                <li>
                  <p>3. Set </p>
                  <br> <br>
                </li>

                <li>
                  <p>4. Tuple </p>
                  <br> 
                  <br>
                </li>

                <li>
                  <p>5. String </p>
                  <br> <br>
                </li>
              </ul>
            </b-col>
          </b-row>   
        </b-col>

        <b-col cols='7' class='second-section p-5' >
          <b-row>
            <b-col align='center' class='pt-5 pb-5'>
              <span id='qn'> Question 1: Function </span>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <div id="grey1" class="shadow-lg p-3 mb-5 bg-grey rounded">
                <p id="description"> What is the output of the following code? </p>
                <pre> <code> <br> def factorial(n):
                <br>   res = 1
                <br>   for i in range(1, n + 1):
                <br>     res *= i
                <br>   return res
                <br> print(factorial(3))
                </code> </pre>

                <b-button v-b-toggle.collapse-1 variant="primary"> Hint </b-button>
                <b-collapse id="collapse-1" class="mt-2">
                  <b-card>
                    <p class="card-text"> Range is exclusive of n+1  </p>
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
                      <span id='text' v-if="status =='correct'"> Good job! </span>
                      <span id='text' v-else-if="selected ==''"> Please enter an answer! </span>
                      <span id='text' v-else > Please try again! </span>

    
                      </p>
                    </div>
                  </b-card>
                </b-collapse>
                </b-col>
            </b-row>

          <b-row>
            <b-col align='left' >
              <router-link to="/exercise" >
              <b-button variant="outline-dark" id = "next" > Back </b-button>
              </router-link>
              </b-col>

            
            <b-col align='right' >
              <router-link to="/Py_hard_qn2" >
              <b-button variant="outline-dark" id = "next" v-on:click='updateProgress()'> Next </b-button>
              </router-link>
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
import updateProgress from '../Common/updateProgress_python.js'
export default {
    data() {

        return {
          selected: ''
       
        }
    },
    components: {
        Navbar,
        Footer,
    },
    methods: {
    
      check: function(ans) {
     
            if(ans == '6'){
              this.status='correct'
       
            }
            else {
              this.status='wrong'
            }
      }



  },
  mixins: [clicks, updateProgress],
  created() {
    this.incrementClick("exercise_python_hard_1")
    this.updateCurrentlyOn('Python (Hard) Question 1')
    this.updateRecommended('Python (Hard) Question 2')
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

#options {
    width: 100%;
    margin-bottom: 2%;
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
    height: 440%;
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
    border: 3px solid #22c0e8;
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
    border: 3px solid black;
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