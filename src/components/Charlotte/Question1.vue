<template>
<div>
    <Navbar></Navbar>
<b-container fluid id="main">
    <b-row id="rows" >
        <b-col>
            <div id="col1"  > </div>
            <div class="container mt-5 mb-5">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h4>Python: Easy</h4>
      <ul class="timeline">
        <li>
          <p> 1. Variable Types </p>
                    <br> <br>
        </li>
        
      </ul>
      <ul class="timeline2">
          <li>
          <p>2. Python Operators </p>
                    <br> <br>
        </li>
        <li>
          <p>3. </p>
                    <br> <br>
        </li>
                <li>
          <p>4. </p>
                    <br> <br>
        </li>
                <li>
          <p>5. </p>
                    <br> <br>
        </li>
      </ul>
    </div>
  </div>
</div>
                
              
        </b-col>
        <b-col cols = "6"> 
            <h2 id="title"> Question 1: Variable Types </h2> 
            <div id="qn"> </div>
                
                <div id="grey1" class="shadow-lg p-3 mb-5 bg-grey rounded">
                    <p id="description"> What is the output of the following code?
                         </p>

                        <pre> <code> <br> var1 = 1
                        <br> var2 = 2
                        <br> var3 = 'c'
                        <br> print(var1 + var2 + var3)
                        </code> </pre>

                </div>

                <div id = "options">  <b-form-group>
                    <b-form-radio-group size="lg"
                        v-model="selected"
                        :options="options"
                        name="radios-stacked"
                        stacked
                    ></b-form-radio-group>
                    </b-form-group> </div> 

                <div id = "hint"> 
                    <b-button v-b-toggle.collapse-1 variant="primary"> Hint </b-button>
                    <b-collapse id="collapse-1" class="mt-2">
                        <b-card>
                        <p class="card-text"> Consider the variable types</p>
                        </b-card>
                    </b-collapse>
                </div>

                <div id = "submit">
                    <button type="button" class="btn btn-outline-dark "> Submit </button>
                </div>

                 <div id = "progress">
                    <b-progress :value="value" class="mb-3"></b-progress>
                    </div>
         
        </b-col>

        <b-col>
            <div id="col3" class="bg-cover"> 
            </div>
           
           

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
        value: 0,
        selected: 'first',
        correctAnswer: document.getElementById("answer"),
        options: [
          { text: '12c', value: 'first', name: 'answer'},
          { text: '3c', value: 'second', name: 'answer'},
          { text: '3 + c', value: 'third', name: 'answer' },
          { text: 'TypeError: Unsupported operand type(s) for "int" and "str"', value: 'fourth',id: 'answer'}
        ]
      }
    },
    methods: {
        check: function() {
            document.getElementById("question_1a").onclick = function(){
        var correctAnswer = document.getElementById("answer");
        if (correctAnswer.checked){
            alert("CORRECT");
        }
     };


            
        }
    },
     components: {
        Navbar,
        Footer,
    }
  }


</script>

<style scoped>
#main {
    position: absolute;
    height: 100%;
    width: 100%;

}

#rows {
    height: 100%;
    width: 100%;
}


.bg-cover {
  background-size: cover !important;
}

#rectangle{
    position: absolute;
    background-color: grey;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    z-index: -1;
}

#grey {
    text-align: center;
    font-family: 'Futura Hv BT';
    background-color: rgba(196, 196, 196, 0.7);
    width: 68%;
    margin-left: 15%;
    margin-top: 10%;
    font-size: 120%;
    color: #000000;

}

#title {
    font-family: 'Futura Hv BT';
    font-size: 190%;
    margin-top: 10%;
    margin-left: 0%;
}

#col3{
    position: absolute;
    background-color: lightgray;
    left: 10%;
    height: 100%;
    width: 100%;
    z-index: -1;
}

#col1{
    position: absolute;
    background-color: lightgray;
    left: 00%;
    height: 100%;
    width: 100%;
    z-index: -1;
}

#submit {
    margin-left: 80%;
    margin-top: 2%;
}
#hint {
    margin-left: 80%;

}

#progress {
    margin-top: 24%;
}

ul.timeline {
    list-style-type: none;
    position: relative;
    
}
/* line */
ul.timeline:before {
    content: ' ';
    background: black;
    display: inline-block;
    position: absolute;
    left: 20%;
    width: 1%;
    height: 120%;
    z-index: 400;

}

ul.timeline > li {
    padding-left: 20%;
 
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #22c0e8;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}

ul.timeline2 {
    list-style-type: none;
    position: relative;
  
}
/* line */
ul.timeline2:before {
    content: ' ';
    background: black;
    display: inline-block;
    position: absolute;
    left: 20%;
    width: 1%;
    height: 100%;
    z-index: 400;
}

ul.timeline2 > li {
    padding-left: 20%;
 
}
ul.timeline2 > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid black;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
</style>