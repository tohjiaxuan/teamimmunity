<template>
    <div id="dashboard">
        <navbar></navbar>
        <div id="bkg" class="page-holder bg-overlay">
            <b-container fluid>
                <b-row class='mt-3 mb-4'>
                    <h1 class='pl-3'><b>Your progress on the Leaderboard Ranking</b></h1>
                    <b-col>
                        <rankLeadboard></rankLeadboard>
                    </b-col>
                </b-row>
                <b-row class='mb-4'>
                    <h1 class='pl-3'><b>Take a look at how our users value the languages!</b></h1>
                    <b-col>
                        <rankLang></rankLang>
                    </b-col>
                </b-row>
                <b-row class='mb-4'>
                    <h1 class='pl-3'><b>Take a look at the exercises our users have completed!</b></h1>
                    <b-col>
                        <rankPyEx></rankPyEx>
                    </b-col>
                    <b-col>
                        <rankJavaEx></rankJavaEx>
                    </b-col>
                    <b-col>
                        <rankJsEx></rankJsEx>
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
import rankPyEx from '../Dashboard/pythonexrank.js'
import rankJavaEx from '../Dashboard/javaexrank.js'
import rankJsEx from '../Dashboard/jsexrank.js'
import rankLeadboard from '../Dashboard/leaderboardrank.js'
import rankLang from '../Dashboard/languagerank.js'
export default {
    components : {
        navbar,
        Footer,
        rankPyEx,
        rankJavaEx,
        rankJsEx,
        rankLeadboard,
        rankLang,
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
