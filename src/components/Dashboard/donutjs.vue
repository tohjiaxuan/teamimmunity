<template>
  <radial-progress-bar :diameter="200" :completed-steps="jsValue" :total-steps=100 :strokeWidth=16 startColor="#16A085" stopColor="#16A085" innerStrokeColor="#A6ACAF">
   <p class="header" style="font-family: Futura HV BT">JS: {{ Math.floor(jsValue) }}%</p>
   
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
            com:0,
            tot: 100
        
            
        }
    },
    components: {
        RadialProgressBar
       
    },
    methods: {
        reset() {
            db.collection('users').doc(this.currentUser.uid).set({
                
              
                jsValue: 0
                
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
        
        jsValue() {
            return this.$store.state.userProfile.jsValue
        }
    },
    
}
</script>
<style scoped>
.header {
    font-size: 1.4em;
}
</style>
