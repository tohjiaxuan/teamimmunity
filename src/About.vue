 <template>
 <div>
    <Navbar></Navbar>
    <Body></Body>
    <Bottom></Bottom>
</div>
</template>

<script>

import Navbar from './components/Common/Navbar.vue'
import Body from './components/About/Body.vue'
import Bottom from './components/About/Bottom.vue'


export default {
    name:"home",
    components:{
        Navbar,
        Body,
        Bottom
    }
}
</script>


<style scoped>

</style>