 <template>
 <div>
    <Navbar></Navbar>
    <Body></Body>
</div>
</template>

<script>

import Navbar from './components/Homepage/Navbar.vue'
import Body from './components/Homepage/Body.vue'

export default {
    name:"home",
    components:{
        Navbar,
        Body, 
    }
}
</script>


<style scoped>

</style>