<template>
    <div id="dashboard">
        <navbar></navbar>
        <div id="bkg" class="page-holder bg-overlay">
            <b-container fluid>
                <b-row class='mt-4'>
                    <b-col>
                        <rankEx></rankEx>
                    </b-col>
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
import rankEx from '../Dashboard/exercisesrank.js'
import rankLeadboard from '../Dashboard/leaderboardrank.js'
export default {
    components : {
        navbar,
        Footer,
        rankEx,
        rankLeadboard
    }
}
</script>

<style scoped>
.page-holder {
    min-height: 100vh;
    min-width: 100vw;
}
