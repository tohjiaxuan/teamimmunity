<template>
    <div id="cs1010-page">
        <navbar></navbar>

        <div id="bkg" class="page-holder bg-overlay">

            <b-container fluid class='pb-5 mb-3'>

                <b-row align-h="center">
                    <h1 class="pt-4 mt-4 display-4">{{text1}}</h1>
                    <form>
                        <div id="search-box" class="form-row">
                                <div id="search" class="pl-4 pt-5 form-group col-md-6 display-4">
                                    <!-- <label for="subjectarea">Subject Area</label> -->
                                    <input id="ip" type="text" class="form-control" placeholder="Subject Area" v-model="subject">
                                    <!-- <select id="font" class="custom-select" v-model="subject">
                                        <option disabled selected value="null">Select Subject Area</option>
                                        <option value="bt">BT</option>
                                        <option value="cs">CS</option>
                                    </select> -->
                                </div>
                                <div id="search" class="pl-2 form-group col-md-6 display-4 pl-2 pt-4 mt-4">
                                    <!-- <label for="catalognum">Catalogue Number</label> -->
                                    <input id="ip" type="text" class="form-control" placeholder="Catalogue Number" v-model="catnum">
                                    <!-- <select id="font" class="custom-select" v-model="catnum">
                                        <option disabled selected value="null">Select Catalogue Number</option>
                                        <option value="1010">1010</option>
                                        <option value="1010j">1010J</option>
                                        <option value="1010s">1010S</option>
                                        <option value="2030">2030</option>
                                        <option value="2040">2040</option>
                                        <option value="3103">3103</option>
                                    </select> -->
                                </div>
                            </div> 
                    </form>

                    <div class="pl-4 ml-4 pt-4 mt-4">
                        <b-button id="btn" type="submit" @click.stop.prevent="submit(subject,catnum)">Go</b-button>
                    </div>
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
            subject: null,
            catnum: null,

            text1: 'Search',
            text2: 'CS1010',
            text3: 'Programming Methodology',
            
            synopsis: 
            'This module introduces the fundamental concepts of problem solving by computing and programming using an imperative programming language. It is the first and foremost introductory course to computing. Topics covered include computational thinking and computational problem solving, designing and specifying an algorithm, basic problem formulation and problem solving approaches, program development, coding, testing and debugging, fundamental programming constructs (variables, types, expressions, assignments, functions, control structures, etc.), fundamental data structures (arrays, strings, composite data types), basic sorting, and recursion.',
            lang: 'Javascript',

            lang1: 'Javascript 1',
            lang2: 'Javascript 2',
            lang3: 'Javascript 3'
        }
    },
    components: {
        'navbar': navbar,
        Footer
    },
    methods: {
        submit(subject,catnum){ 
            if (subject=='BT' && catnum=='3103') {
                this.$router.push({path:'/bt3103'});
            } else if (subject=='bt' && catnum=='3103') {
                this.$router.push({path:'/bt3103'});
            } 
            
            else if (subject=='CS' && catnum=='1010') {
                this.$router.push({path:'/cs1010'});
            } else if (subject=='cs' && catnum=='1010') {
                this.$router.push({path:'/cs1010'});
            } 
            
            else if (subject=='CS' && catnum=='1010J') {
                this.$router.push({path:'/cs1010j'});
            } else if (subject=='cs' && catnum=='1010j') {
                this.$router.push({path:'/cs1010j'});
            } 
            
            else if (subject=='CS' && catnum=='1010S') {
                this.$router.push({path:'/cs1010s'});
            } else if (subject=='cs' && catnum=='1010s') {
                this.$router.push({path:'/cs1010s'});
            }
             
            else if (subject=='CS' && catnum=='2030') {
                this.$router.push({path:'/cs2030'});
            } else if (subject=='cs' && catnum=='2030') {
                this.$router.push({path:'/cs2030'});
            }
            
            else if (subject=='CS' && catnum=='2040') {
                this.$router.push({path:'/cs2040'});
            } else if (subject=='cs' && catnum=='2040') {
                this.$router.push({path:'/cs2040'});
            }
            
            else {
                alert("Please select a valid subject area and catalogue number")
            }
        }
    }
}
</script>

<style scoped>
#bkg {
    background: linear-gradient(180deg,  rgb(168, 212, 240) 0%, rgba(222, 248, 254, 0) 100%), url("/assets/cs1010s-bkg.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    height: 100vh;
    opacity: 0.65;
}

#ip {
    background: white;
    font-size: 18px;
    color: black;
}


h1 {
    font-family: 'Futura Hv BT';
    font-size: 28px;
    color: black;
}

#search-box {
    width: 110%;
}

#btn {
    height: 70%;
    width: 120%;
    font-family: 'Futura Hv BT';
    font-size: 20px;
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
    width: 70%;
    text-align: center;
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
    background-color:rgb(36, 70, 182); 
    width:15%; 
    font-family:'Futura Hv BT'; 
    font-size:17px; 
    color:#ffffff;
}
</style>