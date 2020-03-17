<template>
    <div id="proglang-page">
        <navbar></navbar>
        <div id="bkg" class="page-holder bg-overlay">
            <b-container fluid class='pb-5 mb-3'>

                <b-row align-h="center">
                    <div id="title-box" class="p-4 mb-5 mt-5 pt-5">
                    <h1 class="pt-2 display-4">{{text1}}</h1>
                    <h1>{{text2}}</h1>
                    </div>
                </b-row>        

                <b-row align-h="center">
                    <div id="search-box">
                        <form>
                            <div class="form-row">
                                <div id="search" class="form-group col-md-6 display-4">
                                    <!-- <label for="subjectarea">Subject Area</label> -->
                                    <input id="ip" type="text" class="form-control" placeholder="Subject Area">
                                </div>
                                <div id="search" class="w-75 form-group col-md-6 display-4">
                                    <!-- <label for="catalognum">Catalogue Number</label> -->
                                    <input id="ip" type="text" class="form-control" placeholder="Catalogue Number">
                                </div>
                            </div> 
                        </form>      
                    </div>

                    <router-link class="pl-4" to="/cs">
                        <b-button id="btn" type="button">Go</b-button>
                    </router-link>
                </b-row>

                <b-row align-h="center">
                    
                </b-row>

                <b-row align-h="center" class="mt-3 pt-3 display-4">
                    <div class="mt-5 pt-4 display-4">
                    <h2 id="word-box">{{text3}}</h2>
                    </div>
                </b-row>

                <b-row align-h="center">
                        <router-link to="/python">
                            <b-button id="logo-btn" type="button"><b-img src="/assets/icons8-python-144.png" alt="python"></b-img></b-button>
                        </router-link>
                        <router-link to="/java">
                            <b-button id="logo-btn" type="button"><b-img src="/assets/icons8-java-144.png" alt="java"></b-img></b-button>
                        </router-link>
                        <router-link to="/js">
                            <b-button id="logo-btn" type="button"><b-img src="/assets/icons8-javascript-144.png" alt="js"></b-img></b-button>
                        </router-link> 
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
            text1: 'Feeling stressed over coding?',
            text2: 'Start searching for a module to have a headstart!',
            text3: 'Start by exploring the languages!'
        }
    },
    components: {
        'navbar': navbar,
        Footer
    }
}
</script>

<style scoped>
.page-holder {
    min-height: 100vh;
    min-width: 100vw;
}

/* .bg-overlay {
    background-image: url("/assets/proglangbkg.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    height: 100vh;
    opacity: 1.0;
} */

#bkg {
    background: linear-gradient(180deg, #CBE7F8 0%, rgba(222, 248, 254, 0) 100%), url("/assets/proglangbkg.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    height: 100vh;
    opacity: 0.65;
}

#title-box {
    background:none;
    height: 10%;
    width: 80%;
}

#search-box {
    background:none;
    height: 10%;
    width: 60%;
}

#search {
    background: none;
}

#ip {
    background: white;

    font-size: 24px;
    color: black;
}


h1 {
    font-family: 'Futura Hv BT';
    font-size: 46px;
    color: black;
    text-align: center;
}

/* #word-box {
    background-color: rgb(37, 37, 37);
    width: 100%;
    height: 100%;
} */

#btn {
    height: 72%;
    width: 120%;
    font-family: 'Futura Hv BT';
    font-size: 25px;
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
    font-size: 34px;
    color:black;
}

#logo-btn {
    font-family: 'Futura Hv BT';
    background-color: transparent;
    border: transparent;
}
</style>