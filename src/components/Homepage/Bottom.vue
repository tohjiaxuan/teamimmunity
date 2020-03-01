<template>
  <div class="body">
    <img id='book' src = 'assets/book.png'>
        <span id='text1'>
            Customised for 
            <br/>
            modules
        </span>
    <img id='pitch' src = 'assets/pitch.png'>
        <span id='text2'>
            Detailed 
            <br/>
            explanation
        </span>
    <img id='console' src = 'assets/gamepad.png'>
        <span id='text3'>
            Gamelike 
            <br/>
            exercises
        </span>

  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #book{
        position: absolute;
        width: 136px;
        height: 136px;
        left: 200px;
        top: 1000px;

    }

    #pitch{
        position: absolute;
        width: 136px;
        height: 136px;
        left: 651px;
        top: 1000px;

        background: pitch;
    }

    #console{
        position: absolute;
        width: 132px;
        height: 132px;
        left: 1102px;
        top: 1000px;

        background: console;
    }


    #text1{
        position: absolute;
        width: 257px;
        height: 153px;
        left: 165px;
        top: 1150px;

        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #000000;
    }

    #text2{
        position: absolute;
        width: 257px;
        height: 153px;
        left: 640px;
        top: 1150px;

        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #000000;
    }

    #text3{
        position: absolute;
        width: 257px;
        height: 153px;
        left: 1100px;
        top:1150px;

        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #000000;
    }

</style>