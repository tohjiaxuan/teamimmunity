<template>
    <div id="dashboard">
        <navbar></navbar>
        <div id="bkg" class="page-holder bg-overlay">
            <b-container fluid>
                <b-row class='mt-4'>
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
                <b-row>
                    <b-col>
                        <rankLeadboard></rankLeadboard>
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
export default {
    components : {
        navbar,
        Footer,
        rankPyEx,
        rankJavaEx,
        rankJsEx,
        rankLeadboard
    }
}
</script>

<style scoped>
.page-holder {
    min-height: 100vh;
    min-width: 100vw;
}
