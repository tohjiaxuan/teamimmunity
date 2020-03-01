<template>
    <div id='about'>
        <about-header></about-header>
        <Title></Title>
        <Body></Body>
        <about-footer id='footer'></about-footer>
    </div>
</template>

<script>
import Header from './About/Header.vue'
import Title from './About/Title.vue'
import Body from './About/Body.vue'
import Footer from './Footer.vue'

export default {
  components: {
    'about-header': Header,
    Title,
    Body,
    'about-footer': Footer
  }
}
</script>

<style scoped>
    #about{
        width:100%;
        height: auto;
    }

    #footer {
        position: absolute;
        width: 454px;
        height: 30px;
        left: 1219px;
        top: 1300px;

        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 900;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;

        color: #000000;
    }
</style>