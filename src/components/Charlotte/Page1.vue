<template>
<div>
  <Navbar></Navbar>
  <b-container fluid id="main">
    <div id="background" class="page-holder bg-cover">
    <div id="box" class="shadow-lg mx-auto p-3 mb-5 pb-5 bg-grey rounded">

    <h4 id="welcome"> Hello There! </h4>
  
    <h4 id="lang"> Language </h4>
    <b-form-select id = "dropdown1" v-model="selected" :options="options"></b-form-select> 

    <h4 id="diff"> Difficulty </h4>
    <b-form-select id = "dropdown2" v-model="selected" :options="options1"></b-form-select>

    <router-link to="/qn1" >
       <b-button id="btn" > Go </b-button>
    </router-link>
     
    </div>
    </div>
  </b-container>
  <Footer></Footer>

</div>

</template>

<script>
import Navbar from '../Common/Navbar.vue'
import Footer from '../Common/Footer.vue'

export default {
    name: 'Login',
    data() {
        return {
            selected: null,
            options: [
                { value: null, text: 'Please select a Language' },
                { text: 'Python' },
                { text: 'Java' },
                { text: 'Javascript'}
            ],

            selected1: null,
            options1: [
                { value: null, text: 'Please select a Difficulty' },
                { text: 'Easy (1)' },
                { text: 'Medium (2)' },
                { text: 'Hard (3)'}
            ]
        }
    },
    methods: {
    }, 
    components: {
        Navbar,
        Footer,
    }
}
</script>

<style scoped>

#background {
    position: absolute;
    background-image:url('/assets/trackbg.jpg');
    left:0%;
}


.page-holder {
    min-height: 100vh;
    min-width: 100vw;
}

.bg-cover {
  background-size: cover !important;
  opacity: 0.7;
  z-index: -1;
}

#box{
    text-align: center;
    font-family: 'Futura Hv BT';
    background-color: rgba(196, 196, 196, 0.7);
    width: 30%;
    margin-left: 15%;
    margin-top: 15%;
    font-size: 120%;
    color: #000000;

}

#lang {
    font-family: 'Futura Hv BT';
    font-size: 100%;
    text-align: left;
    margin-top: 10%;
}

#diff {
    font-family: 'Futura Hv BT';
    font-size: 100%;
    text-align: left;
    margin-top: 1%;
}

#btn {
    background-color:#84CEEB; 
    width:20%; 
    height:5%;
    font-family:'Futura Hv BT'; 
    color:#FFFFFF;
    position: center;
    font-size: 120%;
    position: relative;
    border:none;
    cursor: pointer;
    margin-left:70%;
    margin-top: 10%;
}


</style>