 <template>
 <div>
    <Header></Header>
    <Body></Body>
    <Bottom></Bottom>
</div>
</template>

<script>

import Header from './components/About/Header.vue'
import Body from './components/About/Body.vue'
import Bottom from './components/About/Bottom.vue'


export default {
    name:"home",
    components:{
        Header,
        Body,
        Bottom
    }
}
</script>


<style scoped>

</style>