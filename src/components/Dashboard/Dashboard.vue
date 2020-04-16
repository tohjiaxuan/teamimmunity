<template>
    <div id="dashboard">
        <navbar></navbar>
        <div id="bkg" class="page-holder bg-overlay">
            <b-container fluid>
                <b-row class='mt-3 mb-4'>
                    <b-col>
                        <b-row>
                            <donutJavaProgress></donutJavaProgress>
                            <donutPythonProgress></donutPythonProgress>                  
                            <donutJsProgress></donutJsProgress>    
                        </b-row>
                    </b-col>
                   <b-col>
                       <b-row>
                           <rankLeadboard></rankLeadboard>
                       </b-row>
                       <b-row>
                           <rankLang></rankLang>
                       </b-row>
                   </b-col>
                </b-row>
                
                <b-row>
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
        donutJsProgress
    }
}
</script>

<style scoped>
.page-holder {
    min-height: 100vh;
    min-width: 100vw;
}

#bkg {
    background: linear-gradient(180deg, #CBE7F8 15%, rgba(222, 248, 254, 0) 100%)
}

</style>
