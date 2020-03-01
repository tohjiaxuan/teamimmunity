<template>
    <div id="page">
        <navbar></navbar>
        <app-header id="blueheader"></app-header>

        <div class="container">
            <div id="cs1010s">
                    <h1 id="cs"><u>CS1010S</u></h1>

                    <section id = "searchmodules">
                        <b>Module Subject Area: </b> 
                        <input type="text" name="subjectarea" v-model="subjectarea" placeholder="   Module Code" 
                        style="height:30px; width:300px; font-family: 'Futura Hv BT'; font-size: 17px; margin-left:7px"/>
                        <a href="#Search">&#x1f50d;</a>
                        <p></p>
                        <b>Module Catalog No.: </b>
                        <input type="text" name="catalognumber" v-model="catalognumber" placeholder="   Catalog Number" 
                        style="height:30px; width:300px; font-family: 'Futura Hv BT'; font-size: 17px; margin-left:10px;"/>
                        <a href="#Search">&#x1f50d;</a>
                    </section>

                    <p></p>
                    <button type="button" id="gobtn"
                    style="background-color:#84CEEB; width:100px; height:40px; border-radius:20px;
                    font-family:'Futura Hv BT'; font-size:18px; color:#FFFFFF"> Go </button>

                    <section id="modsynopsis1">
                        <b>Module Synopsis: </b>
                        <div id = "modsynopsis2">
                            This module introduces the fundamental concepts of problem solving by computing and programming using an 
                            imperative programming language. Topics covered include problem solving by computing, writing pseudo-codes, 
                            basic problem formulation and problem solving, program development, coding, testing and debugging, fundamental 
                            programming constructs (variables, types, expressions, assignments, functions, control structures, etc.), 
                            fundamental data structures: arrays, strings and structures, simple file processing, and basic recursion.
                        </div>
                    </section>

                    <section id="relevlang1">
                        <b>Relevant Languages: </b>
                        <section id = "relevlang2">
                            Python
                        </section>
                    </section>

                    <section id="recomex1">
                        <b>Recommended Ex. : </b>
                        <section id="recomex2">
                            <button type="py1" id="btn" name="langbutton" style="background-color:rgb(0, 128, 128); width:120px; height:40px
                            font-family:'Futura Hv BT'; font-size:15px; color:#ffffff">Python 1</button>
                            <button type="py2" id="btn" name="langbutton" style="background-color:rgb(0, 128, 128); width:120px; height:40px
                            font-family:'Futura Hv BT'; font-size:15px; color:#ffffff">Python 2</button>
                            <button type="py3" id="btn" name="langbutton" style="background-color:rgb(0, 128, 128); width:120px; height:40px
                            font-family:'Futura Hv BT'; font-size:15px; color:#ffffff">Python 3</button>
                        </section>
                    </section>
                    
            </div>
        </div>
        <Footer id='footer'></Footer>

    </div>
</template>

<script>
import navbar from '../About/Header.vue'
import Header from './Header.vue'
import Footer from '../Footer.vue'
export default {
    components: {
        'navbar': navbar,
        'app-header': Header,
        Footer,
    }
}
</script>

<style scoped>
#page {
    width: 100%;
    height: auto;
}

.container {
    width:100%;
    height:100%;
    font-family: 'Futura Hv BT';
    text-align: center;
    color: #2c3e50;
    padding-left: 250px;
    padding-right: 250px;
}

#cs1010s {
    position: absolute;
    width: auto;
    height: auto;
    left: 350px;
    top: 400px;
}

#cs {
    position: absolute;
    width: auto;
    height: auto;
    left: 85px;
    top: -100px;
}

a {
    margin: 20px;
    font-size: 25px;
}

#btn {
    font-family: 'Futura Hv BT';
    background-color: rgb(0, 128, 128);
}

#gobtn {
    position: absolute;
    width: auto;
    height: auto;
    left: 680px;
    top: 20px;
}

#langbutton {
    padding-right: 10px;
}

#searchmodules {
    margin-left: 85px;
    text-align: left;
}

#modsynopsis1 {
    padding-top: 50px;
    margin-left: 85px;
    text-align: left;
    
}

#modsynopsis2 {
    width: 600px;
    margin-left: 179px;
    text-align: left;
    margin-top: -18px;
}

#relevlang1 {
    padding-top: 30px;
    margin-left: 85px;
    text-align: left;
}

#relevlang2 {
    margin-left: 180px;
    text-align: left;
    margin-top:-18px;
}

#recomex1 {
    padding-top: 50px;
    margin-left: 85px;
    text-align: left;
}

#recomex2 {
    margin-left: 180px;
    text-align: left;
    margin-top:-29px;
}

#footer {
  position: absolute;
  width: 454px;
  height: 30px;
  left: 1219px;
  top: 1000px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #000000;
}

button {
    border: none;
    cursor: pointer;
}
button:hover {
    opacity: 0.8;
}

</style>
