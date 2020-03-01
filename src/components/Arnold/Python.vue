<template>
  <div>
    <app-header></app-header>
    <Title></Title>
    <img src="/assets/python.png" id='python'>
    <div id='divider'></div>

    <span id='text1'>{{text1}}</span>
    <img src="/assets/p1.jpg" id='badge1'>
    <img src="/assets/p2.jpg" id='badge2'>
    <img src="/assets/p3.jpg" id='badge3'>
    <!-- <img src="./assets/pythonbadge.jpg" id='badge4'>
    <img src="./assets/pythonbadge.jpg" id='badge5'>
    <img src="./assets/pythonbadge.jpg" id='badge6'> -->
    
    <!-- <div id='btn'></div> -->
    <router-link to="/newlang" id='btntxt'>
    <button>{{btntxt}}</button>
    </router-link>
    

    <span id='intro'>{{intro}}</span>
    <span id='introtxt'>{{introtxt}}</span>

    <span id='mod'>{{mod}}</span>
    <span id='com'>{{com}}
      <ul>
        <li>CS1010S</li>
        <li>CS1010X</li>
        <li>BT2101</li>
        <li>BT4222</li>
        <li>BT5151</li>
        <li>IT3010</li>
      </ul>
    </span>
    <span id='biz'>School of Business:
      <ul>
        <li>DAO2702</li>
      </ul>
    </span>
    <span id='fass'>School of Arts and Social Sciences
      <ul>
        <li>PH2113</li>
        <li>GE5219</li>
      </ul>
    </span>
    <span id='sci'>School of Science
      <ul>
        <li>COS2000</li>
        <li>CM3267</li>
        <li>DSA4212</li>
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
  name: 'Python',
  components: {
    'app-header': Header,
    Title,
    'app-footer': Footer,
  },
  data() {
    return {
      text1: 'Exercises available',
      btntxt: "Let's Get Started",
      intro: 'Introduction to Python',
      introtxt: 'Python is a general-purpose, versatile and modern programming language. It’s great as a first language because it is concise and easy to read. Use it for everything from web development to software development and scientific applications.',
      mod: 'Modules that require Python',
      com: 'School of Computing:'
    }
  }  
}
</script>

<style scoped>
div {
  width: 100%;
  height: auto;
}

#python {
  position: absolute;
  width: 460px;
  height: 153px;
  left: 75px;
  top: 359px;
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
  width: 225px;
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

#badge4 {
  position: absolute;
  width: 128px;
  height: 146px;
  left: 75px;
  top: 845px;
}

#badge5 {
  position: absolute;
  width: 128px;
  height: 146px;
  left: 249px;
  top: 845px;
}

#badge6 {
  position: absolute;
  width: 128px;
  height: 146px;
  left: 423px;
  top: 845px;
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
  top: 920px;

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
  top: 1020px;

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
  top: 1150px;

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
