<template>
  <radial-progress-bar :diameter="200" :completed-steps="jsValue" :total-steps=100 :strokeWidth=16 startColor="#884EA0" stopColor="#884EA0" innerStrokeColor="#A6ACAF">
   <p class="header" style="font-family: Futura HV BT">JS: {{ Math.floor(jsValue) }}%</p>
   
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
