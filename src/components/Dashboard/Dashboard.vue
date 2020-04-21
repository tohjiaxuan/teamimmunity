<template>
    <div id="dashboard">
        <navbar></navbar>
        <div id="bkg" class="page-holder bg-overlay">
            <b-container fluid>
                <b-row class='mt-3 pt-4 mb-4 pb-4'>
                    <b-col>
                        <h2 class='pl-5'> Let us track your progress! </h2>
                        <b-row>
                            <b-col><donutJavaProgress></donutJavaProgress></b-col>
                            <b-col><donutPythonProgress></donutPythonProgress></b-col>     
                        </b-row>
                        <b-row>
                            <b-col><donutJsProgress></donutJsProgress></b-col> 
                            <b-col><donutOverall></donutOverall></b-col>    
                        </b-row>
                    </b-col>
                    <b-col class='ml-5'>
                        <rankLang></rankLang>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <!-- <h2> Take a look at your Rank! </h2> -->
                        <rankLeadboard></rankLeadboard>
                    </b-col> 
                </b-row>
                
                <b-row class='pb-4'>
                    <b-col>
                        <rankEasy></rankEasy>
                    </b-col>
                    <b-col>
                        <rankMed></rankMed>
                    </b-col>
                    <b-col>
                        <rankHard></rankHard>
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
import rankEasy from '../Dashboard/easyrank.js'
import rankMed from '../Dashboard/medrank.js'
import rankHard from '../Dashboard/hardrank.js'
import rankLeadboard from '../Dashboard/leaderboardrank.js'
import rankLang from '../Dashboard/languagerank.js'
import donutJavaProgress from '../Dashboard/donutjava.vue'
import donutPythonProgress from '../Dashboard/donutpython.vue'
import donutJsProgress from '../Dashboard/donutjs.vue'
import donutOverall from '../Dashboard/donutoverall.vue'
export default {
    components : {
        navbar,
        Footer,
        rankEasy,
        rankMed,
        rankHard,
        rankLeadboard,
        rankLang,
        donutJavaProgress,
        donutPythonProgress,
        donutJsProgress,
        donutOverall
    }
}
</script>

<style scoped>
.page-holder {
    min-height: 100vh;
    min-width: 100vw;
}

#bkg {
    background: linear-gradient(180deg, #CBE7F8 25%, rgba(222, 248, 254, 0) 100%)
}

.h1 {
    font-family: Futura Hv BT;
}
</style>
