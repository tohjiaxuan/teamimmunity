 <template>
 <div>
    <Header></Header>
    <Body></Body>
    <!-- <Bottom></Bottom> -->
</div>
</template>

<script>

import Header from './components/Homepage/Header.vue'
import Body from './components/Homepage/Body.vue'
// import Bottom from './components/Homepage/Bottom.vue'

export default {
    name:"home",
    components:{
        Header,
        Body,
        // Bottom
    }
}
</script>


<style scoped>

</style>