<template>
 <radial-progress-bar :diameter="200" :completed-steps="oValue" :total-steps=100 :strokeWidth=16 startColor="#3498DB" stopColor="#3498DB" innerStrokeColor="#A6ACAF">
   <p class="header" style="font-family: Futura HV BT">Overall: {{ Math.floor(oValue) }}%</p>
   
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