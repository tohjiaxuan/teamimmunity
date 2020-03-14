<template>
    <div id="page">
        <navbar></navbar>
        <app-header></app-header>

        <div class="container">
            <section id="proglang">
                <span id='search'> SEARCH MODULES </span>
                <p></p>
                <div id="searchmodules">
                    <b>Module Subject Area: </b> 
                    <input type="text" name="subjectarea" v-model="subjectarea" placeholder="  e.g. BT, CS" 
                    style="height:40px; width:300px; font-family: 'Futura Hv BT'; font-size: 20px"/>
                    <a href="#Search">&#x1f50d;</a>
                    <p></p>

                    <b>Module Catalog No. : </b>
                    <input type="text" name="catalognumber" v-model="catalognumber" placeholder="  e.g. 1010, 1101" 
                    style="height:40px; width:300px; font-family: 'Futura Hv BT'; font-size: 20px"/>
                    <a href="#Search">&#x1f50d;</a>
                </div>
                <p> </p>
                    
                <router-link id="link" to="/cs" tag="btn">
                <button type="button" id="btn"
                style="background-color:#84CEEB; width:240px; height:50px
                font-family:'Futura Hv BT'; font-size:25px; color:#FFFFFF">Go</button>
                </router-link>  
            </section>
        </div>

        <Footer id='footer'></Footer>

    </div>
</template>

<script>
import navbar from '../About/Navbar.vue'
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

    /* #proglang {
        width: 860px;
        height: 100%;
    } */

    #search {
        position: absolute;
        width: 454px;
        height: auto;
        left: 530px;
        top: 320px;

        font-family: 'Futura Hv BT';
        font-size: 40px;
        color: #000000;
        background-color: #84CEEB;
    }

    #searchmodules {
        position: absolute;
        width: auto;
        height: auto;
        left: 450px;
        top: 430px;

        font-size: 30px;
    }

    #btn {
        position: absolute;
        width: auto;
        height: auto;
        left: 640px;
        top: 600px;

        font-family: 'Futura Hv BT';
        border: none;
        cursor: pointer;
    }
    #btn:hover {
        opacity: 0.8;
    }

    .container {
        width:100%;
        height:100%;
        font-family: 'Futura Hv BT';
        text-align: center;
        color: rgb(63, 55, 55);
        padding-left: 300px;
        padding-right: 300px;
        padding-top: 200px;
    }

    p {
        margin: 40px;
    }

    a {
        margin: 20px;
        font-size: 34px;
    }
    
    #footer {
        position: absolute;
        width: 454px;
        height: 30px;
        left: 1219px;
        top: 800px;

        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 900;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;

        color: #000000;
    }

</style> 