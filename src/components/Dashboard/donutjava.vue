<template>
  <radial-progress-bar :diameter="200" :completed-steps="jValue" :total-steps=100 :strokeWidth=16 startColor="#E74C3C" stopColor="#E74C3C" innerStrokeColor="#A6ACAF">
   <p class="header" style="font-family: Futura HV BT">Java: {{ Math.floor(jValue) }}%</p>
   
  </radial-progress-bar>
</template>

<script>
import { mapState } from 'vuex'
import RadialProgressBar from 'vue-radial-progress'
export default {
    props: {
    
    
    startColor: {
      type: String,
      required: false,
      default: '#FFC0CB'
    },
    stopColor: {
      type: String,
      required: false,
      default: '#429321'
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 10
    },
    strokeLinecap: {
      type: String,
      required: false,
      default: 'round'
    },
    animateSpeed: {
      type: Number,
      required: false,
      default: 1000
    },
    innerStrokeColor: {
      type: String,
      required: false,
      default: '#323232'
    },
    fps: {
      type: Number,
      required: false,
      default: 60
    },
    timingFunc: {
      type: String,
      required: false,
      default: 'linear'
    },
    isClockwise: {
      type: Boolean,
      required: false,
      default: true
    }
  },
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