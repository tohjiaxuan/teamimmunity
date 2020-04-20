<template>
  <radial-progress-bar :diameter="200" :completed-steps="pValue" :total-steps=100 :strokeWidth=16 startColor="#229954" stopColor="#229954" innerStrokeColor="#A6ACAF">
   <p class="header" style="font-family: Futura HV BT">Python: {{ Math.floor(pValue) }}%</p>
   
  </radial-progress-bar>
 
</template>

<script>
import { mapState } from 'vuex'
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
      
    },
    computed: {
        ...mapState(['userProfile', 'currentUser']),
        
        pValue() {
            return this.$store.state.userProfile.pValue
        }
    },
    
}
</script>

<style scoped>
.header {
    font-size: 1.4em;
}

</style>