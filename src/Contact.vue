<template>
<div>
    <Navbar></Navbar>
    <Body></Body>
    <Footer></Footer>
</div>
</template>

<script>
import Navbar from './components/Common/Navbar.vue'
import Body from './components/Contact/Body.vue'
import Footer from './components/Common/Footer.vue'

export default {
    components:{
        Navbar,
        Body,
        Footer
    }
}
</script>

<style scoped>


</style>