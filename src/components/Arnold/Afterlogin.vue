<template>
  <div>
    <Navbar></Navbar>

    <b-container fluid>
        <b-row>
            <b-col class='first-section'>
                <b-row class='mt-5 pt-5'>
                    <b-col align='center'>
                        <b-img fluid src="http://nicesnippets.com/demo/1499344631_malecostume.png"></b-img>
                    </b-col>
                </b-row>

                <b-row><b-col align='center' class='pt-3'><span id='font40'>ARNOLD NG</span></b-col></b-row>

                <b-row>
                    <b-col align='center' class='pt-4 pb-2'>
                        <b-button to='/after/account' variant='info'>Edit Profile</b-button>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75' ></b-col>
                </b-row>

                <b-row>
                    <b-col align='left' class='offset-1 pl-4'>
                        <span id='number'>10</span>
                        <br>
                        <span>BADGES</span>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75' ></b-col>
                </b-row>

                <b-row>
                    <b-col align='left' class='offset-1 pl-4'>
                        <span id='number'>1</span>
                        <br>
                        <span>RANK</span>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75' ></b-col>
                </b-row>
            </b-col>

            <b-col cols='7' class='second-section'>
                <b-row>
                    <b-col align='center' class='pt-5 pb-5'>
                        <span id='font50'>PROFILE PAGE</span>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <span id='font20'>Overall Progress</span>
                        <b-progress :value="oValue" :max="max" show-progress animated height='30px' variant="danger" class='mb-4'></b-progress>

                        <span id='font20'>Python</span>
                        <b-col align='right' class='mt-n4'><span id='font20'>Completed!!</span></b-col>
                        <b-progress :value="pValue" :max="max" show-progress animated height='20px' variant="success" class='mb-4'></b-progress>

                        <span id='font20'>Java</span>
                        <b-progress :value="jValue" :max="max" show-progress animated height='20px' variant="info" class='mb-4'></b-progress>

                        <span id='font20'>Javascript</span>
                        <b-progress :value="jsValue" :max="max" show-progress animated height='20px' variant="warning" class='mb-4'></b-progress>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols='auto' class='mt-5'><span id='font25'>Currently On:</span></b-col>
                    <b-col class='mt-5'><span id='font25'>Java Exercise 5</span></b-col>
                </b-row>
                <b-row>
                    <b-col class='mt-4'><b-button variant='info'>Continue</b-button></b-col>
                </b-row>

                <b-row>
                    <b-col cols='auto' class='mt-5'><span id='font25'>Recommended Exercise:</span></b-col>
                    <b-col class='mt-5'><span id='font25'>Python Final Exercise</span></b-col>

                </b-row>
                <b-row>
                    <b-col class='mt-4'><b-button variant='info'>Start</b-button></b-col>
                </b-row>

                <hr>
            </b-col>

            <b-col class='third-section'>
                <b-row>
                    <b-col align='center' class='pt-4'>
                        <span id='font35'>Leaderboard</span>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75 ' ></b-col>
                </b-row>

                <b-row>
                    <b-col align='right' class='mt-1 mb-4'><span id='badges'>Badges</span></b-col>
                </b-row>

                <b-row class='mb-3'>
                    <b-col cols='2'><span id='font20'>1</span></b-col>
                    <b-col><span id='font20'>Arnold</span></b-col>
                    <b-col cols='4' align='center'><span id='font20'>10</span></b-col>
                </b-row>
                <b-row class='mb-3'>
                    <b-col cols='2'><span id='font20'>2</span></b-col>
                    <b-col><span id='font20'>Charlotte</span></b-col>
                    <b-col cols='4' align='center'><span id='font20'>7</span></b-col>
                </b-row>
                <b-row class='mb-3'>
                    <b-col cols='2'><span id='font20'>3</span></b-col>
                    <b-col><span id='font20'>Nicole</span></b-col>
                    <b-col cols='4' align='center'><span id='font20'>5</span></b-col>
                </b-row>    


            </b-col>
        </b-row>        
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../Common/Navbar.vue'
import Footer from '../Common/Footer.vue'
export default {
    data() {
        return {
            oValue: 23,
            pValue: 100,
            jValue: 19,
            jsValue: 82,
            max: 100,
        }
    },
    components: {
        Navbar,
        Footer,
    }
}
</script>

<style scoped>
.b-col {
    border:1px solid red;
}

.first-section {
    background-color:aliceblue;
}

#font20 {
    font-size: 20px;
}

#font25 {
    font-size: 25px;;
}

#font35 {
    font-size: 35px;
}

#font40 {
    font-size: 40px;
}

#font50 {
    font-size: 50px;
}

hr{
  border: 2px solid #E5E5E5;
}

button {
    font-family: Futura Hv BT;
}

span {
    font-family: Futura Hv BT;
    font-size: 25px;
}

#number {
    font-size: 40px;
    color: #7CBBC3;
}

.second-section {
    background-color: white;
}

.third-section {
    background-color: aliceblue
}

#badges {
    font-size: 20px;
    text-decoration: underline;
}

</style>