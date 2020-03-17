 <template>
 <div>
    <Navbar></Navbar>
    <Body></Body>
    <!-- <Footer></Footer> -->
</div>
</template>

<script>

import Navbar from './components/Homepage/Navbar.vue'
import Body from './components/Homepage/Body.vue'
// import Footer from './components/Common/Footer.vue'

export default {
    name:"home",
    components:{
        Navbar,
        Body, 
        // Footer
    }
}
</script>


<style scoped>

</style>