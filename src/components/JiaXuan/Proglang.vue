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
                                    <input id="ip" type="text" class="form-control" placeholder="Subject Area" v-model="subject">
                                    <!-- <select id="font" class="custom-select" v-model="subject">
                                        <option disabled selected value="null"> Select Subject Area</option>
                                        <option value="bt">BT</option>
                                        <option value="cs">CS</option>
                                    </select> -->
                                </div>
                                <div id="search" class="w-75 form-group col-md-6 display-4">
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
                    </div>
                    <!-- <div class="pl-4 pt-2 mt-2">
                        <b-button id="btn" type="submit" @click.stop.prevent="submit(subject,catnum)">Go</b-button>
                    </div> -->
                    <div class='mt-n1'>
                        <b-button id='btn' type="submit" size='sm' class='ml-3' @click.stop.prevent="submit(subject,catnum)">Go</b-button>
                    </div>
                </b-row>

                <b-row align-h="center">
                    
                </b-row>

                <b-row align-h="center" class="mt-3 pt-3 display-4">
                    <div class="mt-5 pt-4 display-4">
                    <h2 id="word-box">{{text3}}</h2>
                    </div>
                </b-row>

                <b-row align-h="center">
                        <router-link to="/language/python">
                            <b-button id="logo-btn" type="button"><b-img fluid src="/assets/icons8-python-144.png" alt="python" v-b-popover.hover.bottom.v-warning="'Did you know? Many big companies such as Google, Netflix and Spotify use Python for their products and/or services. Click to learn more!'"></b-img></b-button>
                        </router-link>
                        <router-link to="/language/java">
                            <b-button id="logo-btn" type="button"><b-img fluid src="/assets/icons8-java-144.png" alt="java" v-b-popover.hover.bottom.v-warning="'Did you know? Minecraft, one of the most popular video games of all time, was first written in Java. Click to learn more!'"></b-img></b-button>
                        </router-link>
                        <router-link to="/language/javascript">
                            <b-button id="logo-btn" type="button"><b-img fluid src="/assets/icons8-javascript-144.png" alt="js" v-b-popover.hover.bottom.v-warning="'Did you know? In Javascript, equal is not always equal. For e.g. 1==1 may be true, but [1,2,3]==[1,2,3] would be false as the array [1,2,3] is simply a reference type. Click to learn more!'"></b-img></b-button>
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
            subject: null,
            catnum: null,

            text1: 'Feeling stressed over coding?',
            text2: 'Start searching for a module to have a headstart!',
            text3: 'Start by exploring the languages!'
        }
    },
    components: {
        'navbar': navbar,
        Footer
    },
    methods: {
        submit(subject,catnum){ 
            if (subject=='bt' && catnum=='3103') {
                this.$router.push({path:'/bt3103'});
            } else if (subject=='cs' && catnum=='1010') {
                this.$router.push({path:'/cs1010'});
            } else if (subject=='cs' && catnum=='1010j') {
                this.$router.push({path:'/cs1010j'});
            } else if (subject=='cs' && catnum=='1010s') {
                this.$router.push({path:'/cs1010s'});
            } else if (subject=='cs' && catnum=='2030') {
                this.$router.push({path:'/cs2030'});
            } else if (subject=='cs' && catnum=='2040') {
                this.$router.push({path:'/cs2040'});
            } else {
                alert("Please select a valid subject area and catalogue number")
            }
        }
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
    background: linear-gradient(180deg, rgb(168, 212, 240) 0%, rgba(222, 248, 254, 0) 100%), url("/assets/proglangbkg.jpeg");
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

#font {
    font-size: 19px;
}

/* #ip {
    background: white;
    font-size: 24px;
    color: black;
} */


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
    width: 100%;
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