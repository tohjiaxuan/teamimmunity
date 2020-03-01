<template>
  <div class="headerStyle">
    <header>
        <div id='rect'></div>
        <router-link to="/" id='home'>Home</router-link>
        <router-link to="/about" id='about'>About</router-link>
        <router-link to="/menu" id='menu'>Exercise</router-link>
        <router-link to="/language" id='language'>Language</router-link>
        <span id='acc'>Account</span>
        <span id='log'>Logout</span>
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
}

#home {
    position: fixed;
    z-index: 2;
    width: auto;
    height: 34px;
    left: 38.61%;
    top: 31px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
}

#about {
    position: fixed;
    z-index: 2;
    width: auto;
    height: 34px;
    left: 46.8%;
    top: 31px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
}

#ex {
    position: fixed;
    z-index: 2;
    width: auto;
    height: 34px;
    left: 55.83%;
    top: 31px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
}

#language {
    position: fixed;
    z-index: 2;
    width: auto;
    height: 34px;
    left: 65.49%;
    top: 31px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
}

#acc {
    position: fixed;
    z-index: 2;
    width: auto;
    height: 34px;
    left: 75.83%;
    top: 31px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
}

#log {
    position: fixed;
    z-index: 2;
    width: auto;
    height: 34px;
    left: 83.96%;
    top: 31px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
}

/* span {
  display: inline-block;
  border: 1px solid red;
}; */

</style>
