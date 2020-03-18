<template>
    <div id="cs1010s-page">
        <navbar></navbar>

        <div id="bkg" class="page-holder bg-overlay">

            <b-container fluid class='pb-5 mb-3'>

                <b-row align-h="center">
                    <h1 class="pl-5 pt-4 mt-4 display-4">{{text1}}</h1>
                    <form>
                        <div class="form-row">
                            <div id="search" class="pl-5 pt-4 mt-3 form-group col-md-6 display-4">
                                <!-- <label for="subjectarea">Subject Area</label> -->
                                <input id="ip" type="text" class="form-control" placeholder="Subject Area">
                            </div>
                            <div id="search" class="pl-1 pt-4 mt-3 form-group col-md-6 display-4">
                                <!-- <label for="catalognum">Catalogue Number</label> -->
                                <input id="ip" type="text" class="form-control" placeholder="Catalogue Number">
                            </div>
                        </div> 
                    </form>
                    <router-link class="pl-4 pt-4 mt-3" to="/cs">
                        <b-button id="btn" type="button">Go</b-button>
                    </router-link>
                </b-row>

                <b-row align-h="center" class="pt-5">
                    <h2>{{text2}}</h2>
                </b-row>
                <b-row align-h="center" class="pb-5">
                    <h2>{{text3}}</h2>
                </b-row>

                <b-row class='mb-4'>
                    <b-col cols="3" class="pl-5 ml-5"><span id='title'>Module Synopsis: </span></b-col>
                    <b-col class="pl-1 pr-5 mr-5"><span id='content'>{{synopsis}}</span></b-col>
                </b-row>

                <b-row class='mb-4'>
                    <b-col cols="3" class="pl-5 ml-5"><span id='title'>Relevant Languages: </span></b-col>
                    <b-col class="pl-1 pr-5 mr-5"><span id='content'>{{lang}}</span></b-col>
                </b-row>

                <b-row class='mb-4'>
                    <b-col cols="3" class="pl-5 ml-5"><span id='title'>Recommended Ex. : </span></b-col>
                    <b-col class="pl-1 pr-5 mr-5">
                        <span><b-button id="ex-btn">{{lang1}}</b-button></span>
                        <span class="pl-2"><b-button id="ex-btn">{{lang2}}</b-button></span>
                        <span class="pl-2"><b-button id="ex-btn">{{lang3}}</b-button></span>     
                    </b-col>
                </b-row>



            </b-container>

        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import navbar from '../Common/Navbar.vue'
import Footer from '../Common/Footer.vue'
export default {
    data() {
        return {
            text1: 'Search',
            text2: 'CS1010J',
            text3: 'Programming Methodology',
            
            synopsis: 
            'This module introduces the fundamental concepts of problem solving by computing and programming using an imperative programming language. It is the first and foremost introductory course to computing. Topics covered include computational thinking and computational problem solving, designing and specifying an algorithm, basic problem formulation and problem solving approaches, program development, coding, testing and debugging, fundamental programming constructs (variables, types, expressions, assignments, functions, control structures, etc.), fundamental data structures (arrays, strings, composite data types), basic sorting, and recursion.',
            lang: 'Java',

            lang1: 'Java 1',
            lang2: 'Java 2',
            lang3: 'Java 3'
        }
    },
    components: {
        'navbar': navbar,
        Footer
    }
}
</script>

<style scoped>
#bkg {
    background: linear-gradient(180deg, rgb(168, 212, 240) 0%, rgba(222, 248, 254, 0) 100%), url("/assets/cs1010s-bkg.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    height: 100vh;
    opacity: 0.65;
}

#ip {
    background: white;
    font-size: 20px;
    color: black;
}


h1 {
    font-family: 'Futura Hv BT';
    font-size: 28px;
    color: black;
}

#btn {
    height: 70%;
    width: 120%;
    font-family: 'Futura Hv BT';
    font-size: 24px;
    cursor: pointer;    
    background-color: white; 
    border-color: #2196F3;
    color: dodgerblue;
}
#btn:hover {
    background: #2196F3;
    color: white;
}

h2 {
    font-family: 'Futura Hv BT';
    font-size: 50px;
    color: black;
}

#title {
    font-family: 'Futura Hv BT';
    font-size: 22px;
    color: black;
}

#content {
    font-family: 'Futura Hv BT';
    font-size: 20px;
    color: black;
}

#ex-btn {
    background-color:rgba(224, 222, 63, 0.856); 
    width:13%; 
    font-family:'Futura Hv BT'; 
    font-size:17px; 
    color:#ffffff;
}
</style>