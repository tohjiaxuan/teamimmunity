<template>
<div id="cs1010s-page">
    <navbar></navbar>
    <Footer id="footer"></Footer>

    <div id="background" class="page-holder bg-cover"/>
    <div id="overlay" class="shadow-lg p-3 mb-5 bg-grey rounded"/>

        <div id="content">
            <b-container id="cs1010s">
                <div id="word">
                    <p id="word1" class="h4 text-center mb-4">Search</p>   
                </div>
        
                <!-- entire blue search bar -->
                <div id="search-row">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label id="word2" for="subjectarea">Subject Area</label>
                            <input id="search" type="text" class="form-control" placeholder="Subject Area">
                        </div>
                        <div class="form-group col-md-6">
                            <label id="word2" for="catalognum">Catalogue Number</label>
                            <input id="search" type="text" class="form-control" placeholder="Catalogue Number">
                        </div>
                    </div>
                </form>
                </div>
                <b-button id="btn" type="button">Go</b-button>
                <!-- end -->

                <div id="mod-box">
                    <div><p id="h1">CS1010S - Programming Methodology</p></div>

                    <br>

                    <div id="mod-synopsis">
                        <div id="mod-synopsis-1"><p id="name"><b>Module Synopsis:</b></p></div>
                        <div id = "mod-synopsis-2">
                            This module introduces the fundamental concepts of problem solving by computing and programming using an 
                            imperative programming language. Topics covered include problem solving by computing, writing pseudo-codes, 
                            basic problem formulation and problem solving, program development, coding, testing and debugging, fundamental 
                            programming constructs (variables, types, expressions, assignments, functions, control structures, etc.), 
                            fundamental data structures: arrays, strings and structures, simple file processing, and basic recursion.
                        </div>
                    </div>

                    <br>

                    <div id="relev-lang">
                        <div id="relev-lang-1"><p id="name"><b>Relevant Languages:</b></p></div>
                        <div id="relev-lang-2">
                            Python
                        </div>
                    </div>

                    <br>

                    <div id="recom-ex">
                        <div id="recom-ex-1"><p id="name"><b>Recommended Ex. :</b></p></div>
                        <div id="recom-ex-2">
                            <button type="button" id="ex-btn" name="langbutton">Python 1</button>
                            <button type="button" id="ex-btn" name="langbutton">Python 2</button>
                            <button type="button" id="ex-btn" name="langbutton">Python 3</button>
                        </div>
                    </div>   
                    
                </div>

            </b-container>
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
    top: 36%;
    background-image: url(/assets/cs1010s-bkg.jpeg);
    background-repeat: repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    z-index: -2;
    opacity: 0.6;
}

#overlay {
    position: absolute;
    top: 36%;
    background: rgba(226, 222, 222, 0.65);
    height: 100%;
    width: 100%;
    z-index: -1;
}

/*Search Section*/

#word {
    position: absolute;
    background: rgb(152, 208, 240);
    top: 13%;
    left: 10%;
    width: 80%;
    height: 19%;
}

#word1 {
    font-family: "Futura Hv BT";
    font-size: 40px;
}

#word2 {
    font-family: "Futura Hv BT";
    font-size: 18px;
}

#search-row {
    position: absolute;
    background: rgb(152, 208, 240);
    border: none;
    top: 21%;
    left: 11%;
    width: 70%;
    height: 10%;
}

#search {
    background: white;
    border: 1px;
}

#btn {
    position: absolute;
    top: 24%;
    left: 82%;
    width: 6%;
    height: 6%;
    font-family: 'Futura Hv BT';
    font-size: 22px;
    cursor: pointer;    
    background-color: white; 
    border-color: #2196F3;
    color: dodgerblue
}
#btn:hover {
    background: #2196F3;
    color: white;
}

/*Name of Module*/

#mod-box {
    position: absolute;
    background: none;
    top: 50%;
    left: 10%;
    height: 100%;
    width: 80%;
}

#h1 {
    font-family: "Futura Hv BT";
    font-size: 40px;
}

/*Details*/

#name {
    font-size: 20px;
}

#ex-btn {
    background-color:rgb(0, 128, 128); 
    width:10%; 
    font-family:'Futura Hv BT'; 
    font-size:17px; 
    color:#ffffff;
}
</style>