 <template>
 <div>
    <Navbar></Navbar>
    <Body></Body>
    <!-- <Bottom></Bottom> -->
</div>
</template>

<script>

import Navbar from './components/Homepage/Navbar.vue'
import Body from './components/Homepage/Body.vue'
// import Bottom from './components/Homepage/Bottom.vue'

export default {
    name:"home",
    components:{
        Navbar,
        Body,
        // Bottom
    }
}
</script>


<style scoped>

</style>