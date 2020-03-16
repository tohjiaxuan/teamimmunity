<template>
<div id="proglang-page">
    <navbar></navbar>
    <Footer id="footer"></Footer>

    <div id="background" class="page-holder bg-cover"/>
    <div id="overlay" class="shadow-lg p-3 mb-5 bg-grey rounded">

     <div id="content">
        <b-container id="searchmodules">
            <div id="title-box" class="shadow-lg p-3 mb-5 bg-grey rounded"/>
            <div id="title-box" class="shadow-lg p-3 mb-5 bg-grey rounded">
            <p id="main-header" class="h4 text-center mb-4">Feeling Stressed Over Coding?</p>
            <p id="sub-header" class="h4 text-center mb-4">Start searching for your module to have a headstart in Coding!</p>
            </div>
            
            <div id="search-row" class="shadow-lg p-3 mb-5 bg-grey rounded"/>
            <div id="search-row" class="shadow-lg p-3 mb-5 bg-grey rounded">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <!-- <label for="subjectarea">Subject Area</label> -->
                            <input id="search" type="text" class="form-control" placeholder="Subject Area">
                        </div>
                        <div class="form-group col-md-6">
                            <!-- <label for="catalognum">Catalogue Number</label> -->
                            <input id="search" type="text" class="form-control" placeholder="Catalogue Number">
                        </div>
                    </div>
                </form>
            </div>   
            <router-link to="/cs">
                <b-button id="btn" type="button">Go</b-button>
            </router-link> 

            <div id="message-row">
                <p id="message" class="h4 text-center mb-4">Lost? Start by exploring the languages!</p>
            </div>

            <div id="logo-row">
                <div id="logos" class="form-row">
                        <div class="col-md-3">
                        <router-link to="/python">
                        <b-button id="py-btn" type="button"><img id="python" src="/assets/py-code.jpg" alt="python"></b-button>
                        </router-link> 
                        </div>
                        <div class="col-md-3">
                        <router-link to="/java">
                        <b-button id="jv-btn" type="button"><img id="java" src="/assets/java.svg" alt="java"></b-button>
                        </router-link> 
                        </div>
                        <div class="col-md-3">
                        <router-link to="/js">
                        <b-button id="js-btn" type="button"><img id="js" src="/assets/javascript.png" alt="javascript"></b-button>
                        </router-link> 
                        </div>
                </div>
            </div>
            
        </b-container>        
    </div>  

    </div> 
    
</div>
</template>

<script>
import navbar from '../About/Header.vue'
import Footer from '../Footer.vue'
export default {
    components: {
        'navbar': navbar,
        Footer
    }
}
</script>

<style scoped>
#background {
    position: absolute;
    background-image: url(/assets/proglangbkg.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    z-index: -2;
}

#overlay {
    position: absolute;
    background: rgba(235, 231, 231, 0.65);
    height: 100%;
    width: 100%;
    z-index: -1;
}

/*Title Section*/

#title-box {
    position: absolute;
    background:rgba(240, 236, 236, 0.85);
    top: 28%;
    left: 10%;
    height: 20%;
    width: 80%;
}

#main-header {
    font-family: "Futura Hv BT";
    font-size: 50px;
}

#sub-header {
    font-family: "Futura Hv BT";
    font-size: 30px;
}

/*Search Section*/

#search-row {
    position: absolute;
    background: rgba(240, 236, 236, 0.85);
    top: 54%;
    left: 10%;
    width: 70%;
    height: 8%;
}

#search {
    background: none;
    border: none;
}

#btn {
    position: absolute;
    top: 55%;
    left: 82%;
    width: 8%;
    font-family: 'Futura Hv BT';
    font-size: 25px;
    cursor: pointer;    
    background-color: white; 
    border-color: #2196F3;
    color: dodgerblue
}
#btn:hover {
    background: #2196F3;
    color: white;
}

/*Message*/
#message-row {
    position: absolute;
    background: none;
    border: none;
    top: 67%;
    left: 10%;
    width: 80%;
    height: 4%;
}

/*Logo Section*/

#logo-row {
    position: absolute;
    background: none;
    border: none;
    top: 75%;
    left: 25%;
    width: 70%;
    height: 20%;
}

#message {
    font-family: "Futura Hv BT";
    font-size: 23px;
}

#py-btn {
    background-color: Transparent;
    border: none;
    
}
#python {
    width: 60%;
}

#jv-btn {
    background-color: Transparent;
    border: none;
}
#java {
    width: 30%;
}

#js-btn {
    background-color: Transparent;
    border: none;
}
#js {
    width: 45%;
}

#footer {
    z-index: 5;
}

</style>