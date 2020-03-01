<template>
  <div>
    <navbar></navbar>
    <app-header id="blueheader"></app-header>
    <div id="title">
      <p> My Details </p>
    </div>
    <hr>
    <div>
      <p id="userid"> User ID </p>
      <form id="id">
        <input type="text" v-model="user.userId" name=userId />
      </form>
    </div>
    <div>
      <p id="password"> Old Password </p>
      <form id="word">
        <input type="text" v-model="user.password" name=password />
      </form>
    </div>
    <div>
      <p id="course"> Course </p>
      <form id="cor">
        <input type="text" v-model="user.course" name=course />
      </form>
    </div>
    <div>
      <p id="email"> Email </p>
      <form id="mail">
        <input type="text" v-model="user.email" name=email />
      </form>
    </div>
    <div>
      <p id="passwordnew"> New Password </p>
      <form id="password2">
        <input type="text" v-model="user.passwordnew" name=passwordnew />
      </form>
    </div>
    <div>
      <p id="year"> Year of Study </p>
      <form id="studyyear">
        <input type="text" v-model="user.year" name=year />
      </form>
    </div>
    <div>
      <router-link id="change" to="/account">
        <button id="done"> Update Account </button>
      </router-link>
    </div>
    <Footer id='footer'></Footer>
  </div>
</template>

<script>
import navbar from '../About/Header.vue'
import Header from './Header.vue'
import Footer from '../Footer.vue'
export default {
  data () {
    return {
      user: {
        userId: '',
        email: '',
        password: '',
        passwordnew: '',
        course: '',
        year: ''
      }
    }
  }, 
  components: {
        'navbar': navbar,
        'app-header': Header,
        Footer
  }
}
</script>

<style scoped>

#title {
  position: absolute;
  width: 167px;
  height: 62px;
  left: 120px;
  top: 300px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

hr {
  position: absolute;
  width: 1194px;
  height: 0px;
  left: 115px;
  top: 350px;

  border: 1px solid #000000;
}

#userid {
  position: absolute;
  width: 107px;
  height: 62px;
  left: 120px;
  top: 380px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}

#id {
  position: absolute;
  left: 110px;
  top: 480px;
}

#password {
  position: absolute;
  width: 200px;
  height: 62px;
  left: 120px;
  top: 570px;


  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-align: center;
}

#word {
  position: absolute;
  left: 110px;
  top: 670px;
}

#course {
  position: absolute;
  width: 200px;
  height: 62px;
  left: 120px;
  top: 760px;


  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-align: center;
}

#cor {
  position: absolute;
  left: 120px;
  top: 860px;
}

#email {
  position: absolute;
  width: 107px;
  height: 62px;
  right: 500px;
  top: 380px;

  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}

#mail {
  position: absolute;
  right: 130px;
  top: 480px;
}

#passwordnew{
  position: absolute;
  width: 200px;
  height: 62px;
  right: 410px;
  top: 570px;


  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-align: center;
}

#password2 {
  position: absolute;
  right: 130px;
  top: 670px;
}

#year {
  position: absolute;
  width: 200px;
  height: 62px;
  right: 410px;
  top: 760px;


  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-align: center;
}

#studyyear {
  position: absolute;
  right: 130px;
  top: 860px;
}

input {
  width: 485px;
  background-color: rgba(132, 206, 235, 0.4);
  border-radius: 25px;
  border: none;
  height: 40px;
}

#change {
  position: absolute;
  width: 230px;
  height: 73px;
  left: 1080px;
  top: 980px;

  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-family: Futura Hv BT;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
}

#done {
  background-color: #FB7474;
  width:298px;
  height: 50px;
  font-size: 25px;
  font-family: Futura Hv BT;
  border-radius: 25px;

  color: #FFFFFF;
  border: none;
}

#footer {
  position: absolute;
  width: 454px;
  height: 30px;
  left: 1219px;
  top: 1150px;

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