<template>
  <div class="body">
    <img id='mac' src = '/assets/mac.jpeg'>
    <div id='background'></div>
    <span id='text1'>
        {{text1}}
    </span>
    <span id='text2'>
        {{text2}}
    </span>

    <div id='rec'></div>
    <router-link to="/reg" id='reg'>Register</router-link>
    <span id='a'>|</span>
    <router-link to="/log" id='log'>Sign In</router-link>
    <div id='line'></div>
  </div>
</template>

<script>


export default {
    data() {
      return {
          text1: 'Coding can be for anyone.',
          text2: 'Sign up with us today!',
      }
  }
    
}
</script>

<style scoped>

    #body{
        width: 100%;
        height:auto;
    }

    #mac{
        position: absolute;
        width: 100%;
        height: 110%;
        left: 0px;
        top: 5%;


        background: mac;
    }

    #background{
        position: absolute;
        width: 100%;
        height: 110%;
        left: 0px;
        top: 5%;
        
        background: linear-gradient(180deg, #CBE7F8 0%, rgba(222, 248, 254, 0) 100%);
    }

    #text1{
        position: absolute;
        width: 895px;
        height: 294px;
        left: 430px;
        top: 170px;

        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        line-height: 58px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #433A2C;
    }

    #text2{
        position: absolute;
        width: 895px;
        height: 494px;
        left: 550px;
        top: 170px;

        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        line-height: 43px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #433A2C;
    }

    #rec{
        position: absolute;
        width: 515px;
        height: 119px;
        left: 462px;
        top: 500px;
        z-index: 1;

        background: #00A3FF;
        border-radius: 10px;
        
    }

    #reg{
        position: absolute;
        width: 384px;
        height: 66px;
        left: 610px;
        top: 527px;

        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;
        z-index:1;

        color: #FCFDFE;

    }

    #a{
        position: absolute;
        width: auto;
        height: 66px;
        left: 730px;
        top: 527px;

        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;
        z-index:2;

        color: #FCFDFE;
    }

    #log{
        position: absolute;
        width: 384px;
        height: 66px;
        left: 750px;
        top: 527px;

        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;
        z-index:1;

        color: #FCFDFE;        
    }
    
    #line{
        position: absolute;
        width: 100%;
        height: 0px;
        left: 0px;
        top: 908px;

        border: 3px solid #000000;
        transform: rotate(0deg);
    }
</style>