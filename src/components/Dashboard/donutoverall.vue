<template>
 <radial-progress-bar :diameter="200" :completed-steps="oValue" :total-steps=100 :strokeWidth=16 startColor="#3498DB" stopColor="#3498DB " innerStrokeColor="#A6ACAF">
   <p class="header" style="font-family: Futura HV BT">Overall: {{ Math.floor(oValue) }}%</p>
   
  </radial-progress-bar>
</template>

<script>
import { mapState } from 'vuex'
import db from "../../firebase.js";
import firebase from "firebase"
import RadialProgressBar from 'vue-radial-progress'
export default {

    data() {
        return {
           
        }
    },
    components: {
        RadialProgressBar
       
    },
    methods: {
        reset() {
            db.collection('users').doc(this.currentUser.uid).set({
                
              
                oValue: 0
                
            }, {merge: true})
        },
        
        
        updateRank() {
            if (this.getRank() != this.userProfile.rank) {
                db.collection('users').doc(this.currentUser.uid).set({
                    rank: this.getRank(),
                    prevRank: firebase.firestore.FieldValue.arrayUnion(this.userProfile.rank)
                }, {merge: true})
            }
        },
        
    },
    computed: {
        ...mapState(['userProfile', 'currentUser']),
        
        oValue() {
            return this.$store.state.userProfile.oValue
        }
    },
    
}
</script>

<style scoped>
.header {
    font-size: 1.4em;
}
</style>