<template>
  <radial-progress-bar :diameter="200" :completed-steps="jValue" :total-steps=100>
   <p class="header" style="font-family: Futura HV BT">Java: {{ Math.floor(jValue) }}%</p>
   
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
        
        jValue() {
            return this.$store.state.userProfile.jValue
        }
    },
    
}
</script>

<style scoped>
.header {
    font-size: 1.4em;
}
</style>