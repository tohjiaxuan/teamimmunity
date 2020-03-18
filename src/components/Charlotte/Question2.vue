<template>
  <div>
    <Navbar></Navbar>

    <b-container fluid>
      <b-row>
        <b-col class='first-section'>
          <b-row class='mt-5 pt-5'>
            <b-col align='center' class='pt-3'><span id='title'> Python: Easy </span>
            </b-col>
          </b-row>
          <br>

          <b-row>
            <ul class="timeline">
              <li>
                <p> 1. Variable Types </p>
                <br>
                <br>
              </li>
            </ul>

            <ul class="timeline2">
              <li>
                <p>2. Casting/Syntax </p>
                <br> <br>
              </li>
            </ul>

            <ul class="timeline3">
              
              <li>
                <p>3. Python Operators</p>
                <br> <br>
              </li>

              <li>
                <p>4. Strings </p>
                <br> 
                <br>
              </li>

              <li>
                <p>5. Lists </p>
                <br> <br>
              </li>
            </ul>
          </b-row>   
        </b-col>

        <b-col cols='7' class='second-section p-5' >
          <b-row>
            <b-col align='center' class='pt-5 pb-5'>
              <span id='qn'> Question 2: Syntax </span>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <div id="grey1" class="shadow-lg p-3 mb-5 bg-grey rounded">
                <p id="description"> What is the output of the following code? </p>
                <pre> <code> <br> x = int(2.876)
                
                <br> print(x)
                </code> </pre>

                <b-button v-b-toggle.collapse-1 variant="primary"> Hint </b-button>
                <b-collapse id="collapse-1" class="mt-2">
                  <b-card>
                    <p class="card-text"> Integer rounds down </p>
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
            <b-col align='right' ><b-button variant="outline-dark" v-on:click="check(selected)" data-dismiss="alert"> Submit </b-button></b-col>
          </b-row>

          <b-row>
            
            <b-col align='right' >
              <router-link to="/qn3" >
              <b-button variant="outline-dark" id = "next" > Next </b-button>
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
export default {
    data() {
        return {
        
          options: [
            { text: '3', value: 'wrong', name: 'answer'},
            { text: '2.9', value: 'wrong', name: 'answer'},
            { text: '2.8', value: 'wrong', name: 'answer' },
            { text: '2', value: 'correct',id: 'answer'}
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
            alert("Please try again");
            this.$("#alert").alert();
            }
            else {
              alert("Good job!");
            }
        
      }
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
    height: 450%;
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

ul.timeline3 {
    list-style-type: none;
    position: relative;
    width:100%;
 
}



/* words */
ul.timeline3 > li {
    padding-left: 20%;
    width: 100%;

}

ul.timeline3 > li:before {
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



</style>