<template>
  <radial-progress-bar :diameter="205">
   <p style="font-family: Futura HV BT">JS Completed: {{ Math.floor(jValue) }}</p>
   
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
        
        jValue() {
            return this.$store.state.userProfile.jValue
        }
    },
    
}
</script>

