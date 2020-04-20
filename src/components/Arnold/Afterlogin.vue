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

                <b-row><b-col align='center' class='pt-3'><span id='font40'>{{userProfile.name}}</span></b-col></b-row>

                <b-row>
                    <b-col align='center' class='pt-4 pb-2'>
                        <b-button to='/account/edit' variant='info' style='font-family:Futura Hv BT'>Edit Profile</b-button>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75' ></b-col>
                </b-row>

                <b-row>
                    <b-col align='left' class='offset-1 pl-4'>
                        <span id='number'>{{userProfile.badges}}</span>
                        <br>
                        <span>BADGES</span>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75' ></b-col>
                </b-row>

                <b-row>
                    <b-col align='left' class='offset-1 pl-4'>
                        <span id='number'>{{userProfile.rank}}</span>
                        <br>
                        <span>RANK</span>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75' ></b-col>
                </b-row>
                <b-button v-on:click='reset'>Reset</b-button>
            </b-col>

            <b-col cols='12' md='7' class='second-section'>
                <b-row>
                    <b-col align='center' class='pt-5 pb-5'>
                        <span id='font50'>PROFILE PAGE</span>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <span id='font20'>Overall Progress</span>
                        <b-col align='right' class='mt-n4' v-if='oValue>=max'><span id='font20'>Completed!!</span></b-col>
                        <b-progress :value="oValue" :max="max" show-progress animated height='30px' variant="danger" class='mb-4'></b-progress>

                        <span id='font20'>Python</span>
                        <b-col align='right' class='mt-n4' v-if='pValue>=max'><span id='font20'>Completed!!</span></b-col>
                        <b-progress :value="pValue" :max="max" show-progress animated height='20px' variant="success" class='mb-4'></b-progress>

                        <span id='font20'>Java</span>
                        <b-col align='right' class='mt-n4' v-if='jValue>=max'><span id='font20'>Completed!!</span></b-col>
                        <b-progress :value="jValue" :max="max" show-progress animated height='20px' variant="info" class='mb-4'></b-progress>

                        <span id='font20'>Javascript</span>
                        <b-col align='right' class='mt-n4' v-if='jsValue>=max'><span id='font20'>Completed!!</span></b-col>
                        <b-progress :value="jsValue" :max="max" show-progress animated height='20px' variant="warning" class='mb-4'></b-progress>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols='auto' class='mt-5'><span id='font25'>Currently On:</span></b-col>
                    <b-col class='mt-5'><span id='font25'>{{userProfile.current}}</span></b-col>
                </b-row>
                <b-row>
                    <b-col class='mt-4'><b-button variant='info' v-on:click='continueButton()'>Continue</b-button></b-col>
                </b-row>

                <b-row>
                    <b-col cols='auto' class='mt-5'><span id='font25'>Recommended Exercise:</span></b-col>
                    <b-col class='mt-5'><span id='font25'>{{userProfile.recommended}}</span></b-col>

                </b-row>
                <b-row>
                    <b-col class='mt-4'><b-button variant='info' v-on:click='startButton()'>Start</b-button></b-col>
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

                <ol>
                    <li v-for="person in leaderboardTop15" v-bind:key="person.name" class='mb-3 ml-n2 pl-2'>
                        <b-container>
                            <b-row>
                                <b-col>
                                    <span id='font20'>{{person.name}}</span>
                                </b-col>
                                <b-col cols='3' align='center'>
                                    <span id='font20'>{{person.badges}}</span>
                                </b-col>
                            </b-row>
                        </b-container>
                    </li>
                </ol>
            </b-col>
        </b-row>        
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../Common/Navbar.vue'
import Footer from '../Common/Footer.vue'
import { mapState } from 'vuex'
import db from "../../firebase.js";
import firebase from "firebase"
import moment from "moment"
export default {
    data() {
        return {
            // oValue: 23,
            // pValue: 100,
            // jValue: 19,
            // jsValue: 82,
            max: 100,
            leaderboard: [],
            arr:[],
            badges: 0,
        }
    },
    components: {
        Navbar,
        Footer,
    },
    methods: {
        reset() {
            db.collection('users').doc(this.currentUser.uid).set({
                badges: 0,
                rank: 0,
                oValue: 0,
                pValue: 0,
                jValue: 0,
                jsValue: 0,
                current: 'None',
                recommended: 'None',
                prevRank: [],
                pythonEasy:0, 
                pythonMed:0, 
                pythonHard:0, 
                javaEasy:0, 
                javaMed:0, 
                javaHard:0,
                jsEasy:0, 
                jsMed:0, 
                jsHard:0
            },  {merge: true})
            // db.collection('users').doc(this.currentUser.uid).collection('easy exercises hint').doc('java easy hint').set({
            //     color: '#E9C1B9',
            //     hint: 0,
            //     language: 'Java'
            // }, {merge: true})
            // db.collection('users').doc(this.currentUser.uid).collection('easy exercises hint').doc('js easy hint').set({
            //     color: '#B6AACD',
            //     hint: 0,
            //     language: 'Javascript'
            // }, {merge: true})
            // db.collection('users').doc(this.currentUser.uid).collection('easy exercises hint').doc('python easy hint').set({
            //     color: '#AAC9AF',
            //     hint: 0,
            //     language: 'Python'
            // }, {merge: true})
            // db.collection('users').doc(this.currentUser.uid).collection('medium exercises hint').doc('java medium hint').set({
            //     color: '#DD8C7C',
            //     hint: 0,
            //     language: 'Java'
            // }, {merge: true})
            // db.collection('users').doc(this.currentUser.uid).collection('medium exercises hint').doc('js medium hint').set({
            //     color: '#9A82C4',
            //     hint: 0,
            //     language: 'Javascript'
            // }, {merge: true})
            // db.collection('users').doc(this.currentUser.uid).collection('medium exercises hint').doc('python medium hint').set({
            //     color: '#7ECA8A',
            //     hint: 0,
            //     language: 'Python'
            // }, {merge: true})
            // db.collection('users').doc(this.currentUser.uid).collection('hard exercises hint').doc('java hard hint').set({
            //     color: '#BF3E24',
            //     hint: 0,
            //     language: 'Java'
            // }, {merge: true})
            // db.collection('users').doc(this.currentUser.uid).collection('hard exercises hint').doc('js hard hint').set({
            //     color: '#5429A0',
            //     hint: 0,
            //     language: 'Javascript'
            // }, {merge: true})
            // db.collection('users').doc(this.currentUser.uid).collection('hard exercises hint').doc('python hard hint').set({
            //     color: '#378C43',
            //     hint: 0,
            //     language: 'Python'
            // }, {merge: true})
        },
        fetchLeaderboard() {
            db.collection('users').where('badges', '>=', 0).orderBy('badges', 'desc').get().then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    this.leaderboard.push({name: doc.data().name, badges: doc.data().badges})
                })
            })
        },
        fetchRankArr() {
            db.collection('users').where('badges', '>=', 0).orderBy('badges', 'desc').get().then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    // if (doc.data().name != this.userProfile.name) {
                    //     this.rank = this.rank + 1;
                    // }
                    this.arr.push(doc.data().name)
                    // console.log(this.arr)
                })
            })
        },
        getRank() {
            return this.arr.findIndex(x=>x==this.userProfile.name)+1
        },
        updateRank() {
            if (this.getRank() != this.userProfile.rank) {
                let date = Date(Date.now())
                let today = moment(date).format('DD/MM/YYYY');
                db.collection('users').doc(this.currentUser.uid).set({
                    rank: this.getRank(),
                    prevRank: firebase.firestore.FieldValue.arrayUnion({rank: this.userProfile.rank, date: today})
                }, {merge: true})
            }
        },
        continueButton() {
            if (this.userProfile.current == 'Python (Easy) Question 1') {
                this.$router.push('/Py_easy_qn1')
            }
            else if (this.userProfile.current == 'Python (Easy) Question 2') {
                this.$router.push('/Py_easy_qn2')
            }
            else if (this.userProfile.current == 'Python (Easy) Question 3') {
                this.$router.push('/Py_easy_qn3')
            }
            else if (this.userProfile.current == 'Python (Easy) Question 4') {
                this.$router.push('/Py_easy_qn4')
            }
            else if (this.userProfile.current == 'Python (Easy) Question 5') {
                this.$router.push('/Py_easy_qn5')
            } 
            else if (this.userProfile.current == 'Python (Medium) Question 1') {
                this.$router.push('/Py_med_qn1')
            }
            else if (this.userProfile.current == 'Python (Medium) Question 2') {
                this.$router.push('/Py_med_qn2')
            }
            else if (this.userProfile.current == 'Python (Medium) Question 3') {
                this.$router.push('/Py_med_qn3')
            }
            else if (this.userProfile.current == 'Python (Medium) Question 4') {
                this.$router.push('/Py_med_qn4')
            }
            else if (this.userProfile.current == 'Python (Medium) Question 5') {
                this.$router.push('/Py_med_qn5')
            }
            else if (this.userProfile.current == 'Python (Hard) Question 1') {
                this.$router.push('/Py_hard_qn1')
            }
            else if (this.userProfile.current == 'Python (Hard) Question 2') {
                this.$router.push('/Py_hard_qn2')
            }
            else if (this.userProfile.current == 'Python (Hard) Question 3') {
                this.$router.push('/Py_hard_qn3')
            }
            else if (this.userProfile.current == 'Python (Hard) Question 4') {
                this.$router.push('/Py_hard_qn4')
            }
            else if (this.userProfile.current == 'Python (Hard) Question 5') {
                this.$router.push('/Py_hard_qn5')
            }
            else if (this.userProfile.current == 'Java (Easy) Question 1') {
                this.$router.push('/Java_easy_qn1')
            }
            else if (this.userProfile.current == 'Java (Easy) Question 2') {
                this.$router.push('/Java_easy_qn2')
            }
            else if (this.userProfile.current == 'Java (Easy) Question 3') {
                this.$router.push('/Java_easy_qn3')
            }
            else if (this.userProfile.current == 'Java (Easy) Question 4') {
                this.$router.push('/Java_easy_qn4')
            }
            else if (this.userProfile.current == 'Java (Easy) Question 5') {
                this.$router.push('/Java_easy_qn5')
            }
            else if (this.userProfile.current == 'Java (Medium) Question 1') {
                this.$router.push('/Java_med_qn1')
            }
            else if (this.userProfile.current == 'Java (Medium) Question 2') {
                this.$router.push('/Java_med_qn2')
            }
            else if (this.userProfile.current == 'Java (Medium) Question 3') {
                this.$router.push('/Java_med_qn3')
            }
            else if (this.userProfile.current == 'Java (Medium) Question 4') {
                this.$router.push('/Java_med_qn4')
            }
            else if (this.userProfile.current == 'Java (Medium) Question 5') {
                this.$router.push('/Java_med_qn5')
            }
            else if (this.userProfile.current == 'Java (Hard) Question 1') {
                this.$router.push('/Java_hard_qn1')
            }
            else if (this.userProfile.current == 'Java (Hard) Question 2') {
                this.$router.push('/Java_hard_qn2')
            }
            else if (this.userProfile.current == 'Java (Hard) Question 3') {
                this.$router.push('/Java_hard_qn3')
            }
            else if (this.userProfile.current == 'Java (Hard) Question 4') {
                this.$router.push('/Java_hard_qn4')
            }
            else if (this.userProfile.current == 'Java (Hard) Question 5') {
                this.$router.push('/Java_hard_qn5')
            }
            else if (this.userProfile.current == 'Javascript (Easy) Question 1') {
                this.$router.push('/Javascript_easy_qn1')
            }
            else if (this.userProfile.current == 'Javascript (Easy) Question 2') {
                this.$router.push('/Javascript_easy_qn2')
            }
            else if (this.userProfile.current == 'Javascript (Easy) Question 3') {
                this.$router.push('/Javascript_easy_qn3')
            }
            else if (this.userProfile.current == 'Javascript (Easy) Question 4') {
                this.$router.push('/Javascript_easy_qn4')
            }
            else if (this.userProfile.current == 'Javascript (Easy) Question 5') {
                this.$router.push('/Javascript_easy_qn5')
            }
            else if (this.userProfile.current == 'Javascript (Medium) Question 1') {
                this.$router.push('/Javascript_med_qn1')
            }
            else if (this.userProfile.current == 'Javascript (Medium) Question 2') {
                this.$router.push('/Javascript_med_qn2')
            }
            else if (this.userProfile.current == 'Javascript (Medium) Question 3') {
                this.$router.push('/Javascript_med_qn3')
            }
            else if (this.userProfile.current == 'Javascript (Medium) Question 4') {
                this.$router.push('/Javascript_med_qn4')
            }
            else if (this.userProfile.current == 'Javascript (Medium) Question 5') {
                this.$router.push('/Javascript_med_qn5')
            }
            else if (this.userProfile.current == 'Javascript (Hard) Question 1') {
                this.$router.push('/Javascript_hard_qn1')
            }
            else if (this.userProfile.current == 'Javascript (Hard) Question 2') {
                this.$router.push('/Javascript_hard_qn2')
            }
            else if (this.userProfile.current == 'Javascript (Hard) Question 3') {
                this.$router.push('/Javascript_hard_qn3')
            }
            else if (this.userProfile.current == 'Javascript (Hard) Question 4') {
                this.$router.push('/Javascript_hard_qn4')
            }
            else if (this.userProfile.current == 'Javascript (Hard) Question 5') {
                this.$router.push('/Javascript_hard_qn5')
            }
            else {
                alert("Try out the other languages!")
            }
        },
        startButton() {
            if (this.userProfile.recommended == 'Python (Easy) Question 1') {
                this.$router.push('/Py_easy_qn1')
            }
            else if (this.userProfile.recommended == 'Python (Easy) Question 2') {
                this.$router.push('/Py_easy_qn2')
            }
            else if (this.userProfile.recommended == 'Python (Easy) Question 3') {
                this.$router.push('/Py_easy_qn3')
            }
            else if (this.userProfile.recommended == 'Python (Easy) Question 4') {
                this.$router.push('/Py_easy_qn4')
            }
            else if (this.userProfile.recommended == 'Python (Easy) Question 5') {
                this.$router.push('/Py_easy_qn5')
            } 
            else if (this.userProfile.recommended == 'Python (Medium) Question 1') {
                this.$router.push('/Py_med_qn1')
            }
            else if (this.userProfile.recommended == 'Python (Medium) Question 2') {
                this.$router.push('/Py_med_qn2')
            }
            else if (this.userProfile.recommended == 'Python (Medium) Question 3') {
                this.$router.push('/Py_med_qn3')
            }
            else if (this.userProfile.recommended == 'Python (Medium) Question 4') {
                this.$router.push('/Py_med_qn4')
            }
            else if (this.userProfile.recommended == 'Python (Medium) Question 5') {
                this.$router.push('/Py_med_qn5')
            }
            else if (this.userProfile.recommended == 'Python (Hard) Question 1') {
                this.$router.push('/Py_hard_qn1')
            }
            else if (this.userProfile.recommended == 'Python (Hard) Question 2') {
                this.$router.push('/Py_hard_qn2')
            }
            else if (this.userProfile.recommended == 'Python (Hard) Question 3') {
                this.$router.push('/Py_hard_qn3')
            }
            else if (this.userProfile.recommended == 'Python (Hard) Question 4') {
                this.$router.push('/Py_hard_qn4')
            }
            else if (this.userProfile.recommended == 'Python (Hard) Question 5') {
                this.$router.push('/Py_hard_qn5')
            }
            else if (this.userProfile.recommended == 'Java (Easy) Question 1') {
                this.$router.push('/Java_easy_qn1')
            }
            else if (this.userProfile.recommended == 'Java (Easy) Question 2') {
                this.$router.push('/Java_easy_qn2')
            }
            else if (this.userProfile.recommended == 'Java (Easy) Question 3') {
                this.$router.push('/Java_easy_qn3')
            }
            else if (this.userProfile.recommended == 'Java (Easy) Question 4') {
                this.$router.push('/Java_easy_qn4')
            }
            else if (this.userProfile.recommended == 'Java (Easy) Question 5') {
                this.$router.push('/Java_easy_qn5')
            }
            else if (this.userProfile.recommended == 'Java (Medium) Question 1') {
                this.$router.push('/Java_med_qn1')
            }
            else if (this.userProfile.recommended == 'Java (Medium) Question 2') {
                this.$router.push('/Java_med_qn2')
            }
            else if (this.userProfile.recommended == 'Java (Medium) Question 3') {
                this.$router.push('/Java_med_qn3')
            }
            else if (this.userProfile.recommended == 'Java (Medium) Question 4') {
                this.$router.push('/Java_med_qn4')
            }
            else if (this.userProfile.recommended == 'Java (Medium) Question 5') {
                this.$router.push('/Java_med_qn5')
            }
            else if (this.userProfile.recommended == 'Java (Hard) Question 1') {
                this.$router.push('/Java_hard_qn1')
            }
            else if (this.userProfile.recommended == 'Java (Hard) Question 2') {
                this.$router.push('/Java_hard_qn2')
            }
            else if (this.userProfile.recommended == 'Java (Hard) Question 3') {
                this.$router.push('/Java_hard_qn3')
            }
            else if (this.userProfile.recommended == 'Java (Hard) Question 4') {
                this.$router.push('/Java_hard_qn4')
            }
            else if (this.userProfile.recommended == 'Java (Hard) Question 5') {
                this.$router.push('/Java_hard_qn5')
            }
            else if (this.userProfile.recommended == 'Javascript (Easy) Question 1') {
                this.$router.push('/Javascript_easy_qn1')
            }
            else if (this.userProfile.recommended == 'Javascript (Easy) Question 2') {
                this.$router.push('/Javascript_easy_qn2')
            }
            else if (this.userProfile.recommended == 'Javascript (Easy) Question 3') {
                this.$router.push('/Javascript_easy_qn3')
            }
            else if (this.userProfile.recommended == 'Javascript (Easy) Question 4') {
                this.$router.push('/Javascript_easy_qn4')
            }
            else if (this.userProfile.recommended == 'Javascript (Easy) Question 5') {
                this.$router.push('/Javascript_easy_qn5')
            }
            else if (this.userProfile.recommended == 'Javascript (Medium) Question 1') {
                this.$router.push('/Javascript_med_qn1')
            }
            else if (this.userProfile.recommended == 'Javascript (Medium) Question 2') {
                this.$router.push('/Javascript_med_qn2')
            }
            else if (this.userProfile.recommended == 'Javascript (Medium) Question 3') {
                this.$router.push('/Javascript_med_qn3')
            }
            else if (this.userProfile.recommended == 'Javascript (Medium) Question 4') {
                this.$router.push('/Javascript_med_qn4')
            }
            else if (this.userProfile.recommended == 'Javascript (Medium) Question 5') {
                this.$router.push('/Javascript_med_qn5')
            }
            else if (this.userProfile.recommended == 'Javascript (Hard) Question 1') {
                this.$router.push('/Javascript_hard_qn1')
            }
            else if (this.userProfile.recommended == 'Javascript (Hard) Question 2') {
                this.$router.push('/Javascript_hard_qn2')
            }
            else if (this.userProfile.recommended == 'Javascript (Hard) Question 3') {
                this.$router.push('/Javascript_hard_qn3')
            }
            else if (this.userProfile.recommended == 'Javascript (Hard) Question 4') {
                this.$router.push('/Javascript_hard_qn4')
            }
            else if (this.userProfile.recommended == 'Javascript (Hard) Question 5') {
                this.$router.push('/Javascript_hard_qn5')
            }
            else {
                alert("Try out the other languages!")
            }
        },
        
    },
    computed: {
        ...mapState(['userProfile', 'currentUser']),
        oValue() {
            return this.$store.state.userProfile.oValue
        },
        pValue() {
            return this.$store.state.userProfile.pValue
        },
        jValue() {
            return this.$store.state.userProfile.jValue
        },
        jsValue() {
            return this.$store.state.userProfile.jsValue
        },
        leaderboardTop15() {
            return this.leaderboard.slice(0, 15)
        }
    },
    async created() {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        this.fetchLeaderboard()
        await sleep(2000)
        this.fetchRankArr()
        await sleep(2000)
        this.updateRank()
        await sleep(2000)
        db.collection('users').where('badges', '>', 0).orderBy('badges', 'desc').get().then((querySnapshot)=>{
            querySnapshot.forEach(doc=>{
                this.badges += doc.data().badges
            })
        })
        await sleep(2000)
        db.collection('total exercises activity').doc('total exercises completed').set({
            clicks: this.badges
        }, {merge: true})
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

ol {
    font-family: 'Futura Hv BT';
    font-size: 20px;
}

</style>