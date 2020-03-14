<template>
  <div>
    <app-Navbar></app-Navbar>
    <Title></Title>
    <span id='badges'>10 badges</span>
    <span id='rank'>1 Rank</span>
    <router-link to='/after/account'><button id='profile'>Edit Profile</button></router-link>

    <div id='rect1'></div>
    <span id='current'>Currently On:</span>
    <span id='ex1'>Python Exercise 5</span>
    <div id='btn1'></div>
    <span id='btntext1'>Continue</span>

    <div id='rect2'></div>
    <span id='reco'>Recommended Exercise:</span>
    <span id='ex2'>Python Final Exercise</span>
    <div id='btn2'></div>
    <span id='btntext2'>Start</span>

    <div id='rect3'></div>
    <span id='prog'>Progress:</span>
    <hr id='line1'>
    <hr id='line2'>

    <div id='rect4'></div>
    <span id='leaderboard'>Leaderboard</span>
    <span id='badges2'>Badges</span>
    <span id='first'>1. </span>
    <span id='arnold'>Arnold</span>
    <span id='ten'>10</span>
    <span id='second'>2. </span>
    <span id='charlotte'>Charlotte</span>
    <span id='seven'>7</span>
    <span id='third'>3. </span>
    <span id='nicole'>Nicole</span>
    <span id='five'>5</span>

    <app-footer id='footer'></app-footer>
  </div>
</template>

<script>
import Navbar from '../About/Navbar.vue'
import Title from './afterlogintitle.vue'
import Footer from '../Footer.vue'
export default {
    components: {
    'app-Navbar': Navbar,
    Title,
    'app-footer': Footer,
  }

}
</script>

<style scoped>
#badges {
    position: absolute;
    width: 79px;
    height: 54px;
    left: 1255px;
    top: 170px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #000000;
}

#rank {
    position: absolute;
    width: 59px;
    height: 54px;
    left: 1360px;
    top: 170px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #000000;
}

#profile{
    position: absolute;
    width: 119px;
    height: 33px;
    left: 1300px;
    top: 234px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;

    color: #000000;
    background-color: rgba(86, 128, 233, 0.53);


}

#rect1 {
    position: absolute;
    width: 646px;
    height: 270px;
    left: 5%;
    top: 350px;

    background: #FFFFFF;
    border: 2px solid #C4C4C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
}

#current {
    position: absolute;
    width: auto;
    height: 101px;
    left: 7%;
    top: 335px;

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

#ex1 {
    position: absolute;
    width: auto;
    height: 42px;
    left: 21%;
    top: 454px;

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

#btn1 {
    position: absolute;
    width: 166px;
    height: 48px;
    left: 35.5%;
    top: 559px;

    background: #C4C4C4;
    border-radius: 20px;
}

#btntext1 {
    position: absolute;
    width: auto;
    height: 24px;
    left: 38%;
    top: 569px;

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

#rect2 {
    position: absolute;
    width: 646px;
    height: 270px;
    left: 53%;
    top: 350px;

    background: #FFFFFF;
    border: 2px solid #C4C4C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
}

#reco {
    position: absolute;
    width: auto;
    height: 101px;
    left: 55%;
    top: 335px;

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

#ex2 {
    position: absolute;
    width: auto;
    height: 42px;
    left: 68%;
    top: 454px;

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

#btn2 {
    position: absolute;
    width: 163px;
    height: 48px;
    left: 83.5%;
    top: 559px;

    background: #C4C4C4;
    border-radius: 20px;
}

#btntext2 {
    position: absolute;
    width: auto;
    height: 24px;
    left: 87.4%;
    top: 569px;

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

#rect3 {
    position: absolute;
    width: 900px;
    height: 490px;
    left: 5%;
    top: 698px;

    background: #FFFFFF;
    border: 2px solid #C4C4C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
}

#prog {
    position: absolute;
    width: auto;
    height: 75px;
    left: 7%;
    top: 710px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: center;

    color: #000000;
}

#line1 {
    position: absolute;
    width: 830px;
    height: 0px;
    left: 7.7%;
    top: 800px;
}

#line2 {
    position: absolute;
    width: 830px;
    height: 0px;
    left: 7.7%;
    top: 870px;
}

#rect4 {
    position: absolute;
    width: 393px;
    height: 490px;
    left: 70%;
    top: 698px;

    background: #FFFFFF;
    border: 2px solid #C4C4C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
}

#leaderboard {
    position: absolute;
    width: auto;
    height: 75px;
    left: 72%;
    top: 710px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: center;

    color: #000000;
}

#badges2 {
    position: absolute;
    width: auto;
    height: 22px;
    left: 90%;
    top: 782px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #000000;
}

#first {
    position: absolute;
    width: 223px;
    height: 43px;
    left: 71%;
    top: 815px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #000000;
}

#arnold {
    position: absolute;
    width: auto;
    height: 43px;
    left: 81%;
    top: 815px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #000000;
}

#ten {
    position: absolute;
    width: auto;
    height: 43px;
    left: 91.5%;
    top: 815px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
}

#second {
    position: absolute;
    width: 223px;
    height: 43px;
    left: 71%;
    top: 860px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #000000;
}

#charlotte {
    position: absolute;
    width: auto;
    height: 43px;
    left: 81%;
    top: 860px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #000000;
}

#seven {
    position: absolute;
    width: auto;
    height: 43px;
    left: 91.9%;
    top: 860px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
}

#third {
    position: absolute;
    width: 223px;
    height: 43px;
    left: 71%;
    top: 905px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #000000;
}

#nicole {
    position: absolute;
    width: auto;
    height: 43px;
    left: 81%;
    top: 905px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #000000;
}

#five {
    position: absolute;
    width: auto;
    height: 43px;
    left: 91.9%;
    top: 905px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
}

#footer {
  position: absolute;
  width: 454px;
  height: 30px;
  left: 1219px;
  top: 1250px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #000000;
}

/* span {
    border: 1px solid red;
} */
</style>