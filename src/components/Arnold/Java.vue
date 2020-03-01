<template>
  <div>
    <app-header></app-header>
    <Title></Title>
    <img src="/assets/java.svg" id='java'>
    <div id='divider'></div>

    <span id='text1'>Exercises Available</span>
    <img src="/assets/j1.jpg" id='badge1'>
    <img src="/assets/j2.jpg" id='badge2'>
    <img src="/assets/j3.jpg" id='badge3'>
    <!-- <div id='btn'></div> -->
    <router-link to="/newlang" id='btntxt'>
    <button>Let's Get Started</button>
    </router-link>

    <span id='intro'>Introduction to Java</span>
    <span id='introtxt'>Java is among the most popular programming languages out there, thanks to its versatility and compatibility. Java is used for software development, mobile applications, and large systems development.</span>

    <span id='mod'>Modules that require Java</span>
    <span id='com'>School of Computing:
      <ul>
        <li>CS1010J</li>
        <li>CS1020E</li>
        <li>CS2030</li>
        <li>CS2040</li>
        <li>CS2104</li>
      </ul>
    </span>
    <span id='biz'>School of Business:
      <ul>
        <li></li>
      </ul>
    </span>
    <span id='fass'>School of Arts and Social Sciences
      <ul>
        <li></li>
      </ul>
    </span>
    <span id='sci'>School of Science
      <ul>
        <li></li>
      </ul>
    </span>
    
    <app-footer id='footer'></app-footer>
    
  </div>
</template>

<script>
import Header from '../About/Header.vue'
import Title from './Title.vue'
import Footer from './Footer.vue'
export default {
  name: 'Java',
  components: {
    'app-header': Header,
    Title,
    'app-footer': Footer,
  }
  
}
</script>

<style scoped>
div {
  width: 100%;
  height: auto;
}

#java {
  position: absolute;
  width: 127px;
  height: 234px;
  left: 236px;
  top: 319px;
} 

#divider {
  position: absolute;
  z-index: -1;
  width: 766px;
  height: 1320px;
  left: 764px;
  top: 0px;

  background: #E2F7FF;
}

#text1 {
  position: absolute;
  width: 230px;
  height: 60px;
  left: 75px;
  top: 599px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;

  color: #000000;
}

#badge1 {
  position: absolute;
  width: 128px;
  height: 146px;
  left: 75px;
  top: 677px;
}

#badge2 {
  position: absolute;
  width: 128px;
  height: 146px;
  left: 249px;
  top: 677px;
}

#badge3 {
  position: absolute;
  width: 128px;
  height: 146px;
  left: 423px;
  top: 677px;
}

/* #btn {
  position: absolute;
  width: 230px;
  height: 57px;
  left: 198px;
  top: 1036px;

  background: #5AB9EA;
  border-radius: 20px;
} */

#btntxt {
  position: absolute;
  width: auto;
  height: 28px;
  left: 238px;
  top: 1051px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;


  color: #000000;
}

button {
  background-color:#84CEEB; 
  width:230px; 
  height:55px;

  font-family:'Futura Hv BT';
  font-size:20px; 
  color:black;

  border-radius: 20px;
  border: none;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}

#intro {
  position: absolute;
  width: auto;
  height: auto;
  left: 813px;
  top: 340px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
  text-decoration-line: underline;

  color: #000000;
}

#introtxt {
  position: absolute;
  width: 648px;
  height: auto;
  left: 813px;
  top: 410px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}

#mod {
  position: absolute;
  width: 339px;
  height: auto;
  left: 813px;
  top: 599px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;

  color: #000000;
}

#com {
  position: absolute;
  width: 339px;
  height: auto;
  left: 813px;
  top: 670px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}

#biz {
  position: absolute;
  width: 339px;
  height: auto;
  left: 813px;
  top: 890px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}

#fass {
  position: absolute;
  width: 339px;
  height: auto;
  left: 813px;
  top: 990px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}

#sci {
  position: absolute;
  width: 339px;
  height: auto;
  left: 813px;
  top: 1090px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}

#footer {
  position: absolute;
  width: 454px;
  height: 30px;
  left: 1219px;
  top: 1330px;

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
  display: inline-block;
  border: 1px solid red;
}; */
</style>
