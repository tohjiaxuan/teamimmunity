 <template>
 <div>
    <Navbar></Navbar>
    <Body></Body>
    <Bottom></Bottom>
    <Footer></Footer>
</div>
</template>

<script>

import Navbar from './components/Common/Navbar.vue'
import Body from './components/About/Body.vue'
import Bottom from './components/About/Bottom.vue'
import Footer from './components/Common/Footer.vue'

export default {
    name:"home",
    components:{
        Navbar,
        Body,
        Bottom,
        Footer
    }
}
</script>


<style scoped>

</style>