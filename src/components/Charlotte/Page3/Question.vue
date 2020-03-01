<template>
  <div class="qn">
      <div id = "rect"> </div>
      <div id = "qn1"> {{ qn1 }} </div>
      <div id = "text1"> {{ text1}}  </div>
      <div id = "text2"> {{ text2 }} <br> {{text3}} <br> {{text4}} </div>

      <div id = "text5"> {{text5}} </div>
        
      <div id = "ans"> {{ ans }} </div>
      <div id = "line"> </div>
      <div id = "recthint"> </div>
      <div id = "hint"> {{ hint}} </div>
      <div id = "submitbtn"> </div>
      <div id = "submit"> {{ submit }} </div>  
    
  </div>
</template>

<script>
export default {
    data() {
        return {
        qn1: 'Question 1',
        text1: 'What is the output of the following code?',
        text2: 'var1 = 1',
        text3: 'var2 = 3',
        text4: 'var3 = 3',
        text5: 'print(var1 + var2 + var3)',
        ans: "Answer:",
        hint:'Hint',
        submit:'Submit'
    }
    }
}
</script>

<style scoped>

#rect {
    position: absolute;
    width: 656px;
    height: 147px;
    left: 354px;
    top: 133px;
    background: #84CEEB;
}

#qn1{
  
    position: absolute;
    width: 530px;
    height: 64px;
    left: 600px;
    top: 178px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 49px;
    display: flex;
    align-items: center;
    text-align: center;
    
}

#text1 {
    position: absolute;
    width: 500px;
    height: 64px;
    left: 354px;
    top: 350px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 49px;
   
}
#text2 {
    position: absolute;
    width: 300px;
    height: 64px;
    left: 354px;
    top: 400px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 49px;
    text-align: center;
   
}

#text5 {
    position: absolute;
    width: 400px;
    height: 64px;
    left: 354px;
    top: 550px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 49px;
   
}

#ans {

    position: absolute;
    width: 500px;
    height: 64px;
    left: 370px;
    top: 700px;

    font-family: Futura Hv BT;
   
    font-weight: 800;
    font-size: 25px;
    line-height: 49px;
    display: flex;
    align-items: center;
    text-align: center;

}

#line {
    position: absolute;
    width: 264.13px;
    height: 0px;
    left: 500px;
    top: 750px;
    border: 1px solid #000000;
}

#hint {

    position: absolute;
    width: 500px;
    height: 64px;
    left: 940px;
    top: 590px;
   

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 49px;
    display: flex;
    align-items: center;
    text-align: center;

}

#recthint {
    position: absolute;
    width: 195px;
    height: 57px;
    left: 864px;
    top: 595px;
    background: #E2F7FF;
}

#submit {

    position: absolute;
    width: 500px;
    height: 64px;
    left: 930px;
    top: 700px;
   
    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 49px;
    display: flex;
    align-items: center;
    text-align: center;

}

#submitbtn {
    position: absolute;
    width: 195px;
    height: 57px;
    left: 864px;
    top: 700px;
    background: #E2F7FF;
}

</style>