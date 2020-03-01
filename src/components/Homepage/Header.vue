<template>
  <div class="headerStyle">
    <header>
        <div id='rect'></div>
        <router-link to="/" id='home'>Home</router-link>
        <router-link to="/about" id='about'>About</router-link>
        <router-link to="/reg" id='reg'>Register</router-link>
        <router-link to="/log" id='log'>Sign In</router-link>
        <div id='line'></div>
    </header>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#rect {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 87px;
    left: 0px;
    top: 0px;
    background: white;
    z-index:3;
}

#home {
    position: fixed;
    width: 78px;
    height: 34px;
    left: 100px;
    top: 31px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 3;

    color: #000000;
}

#about {
    position: fixed;
    width: 90px;
    height: 34px;
    left: 180px;
    top: 31px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 3;

    color: #000000;
}

#reg {
    position: fixed;
    width: 109px;
    height: 34px;
    left: 1140px;
    top: 31px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 3;

    color: #000000;
}

#log {
    position: fixed;
    width: 109px;
    height: 34px;
    left: 1240px;
    top: 31px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 3;

    color: #000000;
}

#line {
    position: fixed;
    width: 100%;
    height: 0px;
    left: -2px;
    top: 86px;

    border: 3px solid #000000;
    transform: rotate(0deg);
    z-index:3;

}

</style>
