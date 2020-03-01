<template>
  <div >
    <header>
        <div id='rect'></div>
        <router-link to="/" id='home' class='link'>Home</router-link>
        <router-link to="/about" id='about' class='link'>About</router-link>
        <router-link to="/language" id='language' class='link'>Language</router-link>
        <router-link to='/proglang' id='module' class='link'>Module</router-link>
        <router-link to='/exercise' id='exercise' class='link'>Exercise</router-link>
        <router-link to='/after' id='acc' class='link'>Account</router-link>
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
    left: 57%;
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
    left: 62%;
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

#module {
    position: fixed;
    z-index:2;
    width:auto;
    height:34px;
    left:67%;
    top:31px;

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

#exercise {
    position: fixed;
    z-index:2;
    width:auto;
    height:34px;
    left:73%;
    top:31px;

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
    z-index:2;
    width:auto;
    height:34px;
    left:79%;
    top:31px;

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
    left: 86%;
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
    left:92%;
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

.link {
    /* border:1px solid red; */
}

.link:hover {
    background-color: #CBE7F8;
    color: black;
}

.link.active {
    background-color: #CBE7F8;
    color: black;
  }

</style>
