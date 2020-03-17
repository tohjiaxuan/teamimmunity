<template>
  <div>
    <Navbar></Navbar>

    <b-container fluid>
        <b-row>
            <b-col class='first-section'>
                <b-row class='mt-5 pt-5'>
                    <b-col align='center'>
                        <b-img fluid src="http://nicesnippets.com/demo/1499344631_malecostume.png"></b-img>
                    </b-col>
                </b-row>

                <b-row><b-col align='center' class='pt-3'><span id='font40'>ARNOLD NG</span></b-col></b-row>

                <b-row>
                    <b-col align='center' class='pt-4 pb-2'>
                        <b-button variant='info'>Upload Profile Picture</b-button>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75' ></b-col>
                </b-row>

                <b-row>
                    <b-col align='left' class='offset-1 pl-4'>
                        <span id='number'>10</span>
                        <br>
                        <span>BADGES</span>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75' ></b-col>
                </b-row>

                <b-row>
                    <b-col align='left' class='offset-1 pl-4'>
                        <span id='number'>1</span>
                        <br>
                        <span>RANK</span>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75' ></b-col>
                </b-row>
            </b-col>

            <b-col cols='7' class='second-section'>
                <b-row>
                    <b-col align='center' class='pt-5 pb-5'>
                        <span id='font35'>EDIT PROFILE</span>
                    </b-col>
                </b-row>

                <b-row>
                  <b-col cols='auto' class='mt-5'><span id='font25'>Change Details</span>
                    <b-form-group id='input1' label="User ID">
                      <b-form-input id="userid" v-model="user.userid"></b-form-input>
                    </b-form-group>
                    <b-form-group id='input4' label="Email">
                      <b-form-input id="email" v-model="user.email"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                    <b-col cols='auto' class='mt-5'><span id='font25'>Change Password</span></b-col>
                    <b-row>
                      <b-col align='left' cols='auto' class='mt-5'>
                        <b-form-group id='input2' label="Current Password">
                          <b-form-input type="password" id="pw" v-model="user.password"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col align='left' cols='auto' class='mt-5'>
                        <b-form-group id='input3' label="New Password">
                          <b-form-input type="password" id="pw2" v-model="user.password2"></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                </b-row>
                <b-row>
                    <b-col class='mt-4'>
                      <router-link to="/after">
                      <b-button variant='info'>Confirm</b-button>
                      </router-link>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols='auto' class='mt-5'>
                      <span id='font25'>Change Schooling Details</span>
                      <b-form-group id='input5' label="Course">
                        <b-form-input id="course" v-model="user.course"></b-form-input>
                      </b-form-group>
                      <b-form-group id='input6' label="Year Of Study">
                        <b-form-select v-model="user.year" :options="options"> </b-form-select>
                      </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                  <b-col md="3" offset-md="3"></b-col>
                  <b-col md="3" offset-md="3">
                    <router-link to="/after">
                     <b-button id="final" variant='danger'>Submit</b-button>
                    </router-link>
                    </b-col>
                </b-row>

                <br>              
            </b-col>

            <b-col class='third-section'>
                <b-row>
                    <b-col align='center' class='pt-4'>
                        <span id='font35'>Leaderboard</span>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col><hr align='center' class='w-75 ' ></b-col>
                </b-row>

                <b-row>
                    <b-col align='right' class='mt-1 mb-4'><span id='badges'>Badges</span></b-col>
                </b-row>

                <b-row class='mb-3'>
                    <b-col cols='2'><span id='font20'>1</span></b-col>
                    <b-col><span id='font20'>Arnold</span></b-col>
                    <b-col cols='4' align='center'><span id='font20'>10</span></b-col>
                </b-row>
                <b-row class='mb-3'>
                    <b-col cols='2'><span id='font20'>2</span></b-col>
                    <b-col><span id='font20'>Charlotte</span></b-col>
                    <b-col cols='4' align='center'><span id='font20'>7</span></b-col>
                </b-row>
                <b-row class='mb-3'>
                    <b-col cols='2'><span id='font20'>3</span></b-col>
                    <b-col><span id='font20'>Nicole</span></b-col>
                    <b-col cols='4' align='center'><span id='font20'>5</span></b-col>
                </b-row>    


            </b-col>
        </b-row>        
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../Common/Navbar.vue'
import Footer from '../Common/Footer.vue'
export default {
    data() {
        return {
            oValue: 23,
            pValue: 100,
            jValue: 19,
            jsValue: 82,
            max: 100,
            user: {
              userid: '',
              email: '',
              password: '',
              password2: '',
              course: '',
              year: null,
            },
            show: true,
            options: [
              { value: null, text: 'Select One' },
              { value: 'new', text: 'Prospective Freshmen' },
              { value: '1', text: 'Year 1' },
              { value: '2', text: 'Year 2' },
              { value: '3', text: 'Year 3' },
              { value: '4', text: 'Year 4' }
            ]
        }
    },
    components: {
        Navbar,
        Footer,
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.user.userid = '',
        this.user.email = '',
        this.user.password = '',
        this.user.password2 = '',
        this.user.course = '',
        this.user.year = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style scoped>
.b-col {
    border:1px solid red;
}

.first-section {
    background-color:aliceblue;
}

#font20 {
    font-size: 20px;
}

#font25 {
    font-size: 25px;;
}

#font35 {
    font-size: 35px;
}

#font40 {
    font-size: 40px;
}

hr{
  border: 2px solid #E5E5E5;
}

button {
    font-family: Futura Hv BT;
}

span {
    font-family: Futura Hv BT;
    font-size: 25px;
}

#number {
    font-size: 40px;
    color: #7CBBC3;
}

.second-section {
    background-color: white;
}

.third-section {
    background-color: aliceblue
}

#badges {
    font-size: 20px;
    text-decoration: underline;
}

#input1 {
  font-family: 'Futura Hv BT';
  width: 350%;
  margin-top: 10%;
}

#input4 {
  font-family: 'Futura Hv BT';
  width: 350%;
}

#input2 {
  font-family: 'Futura Hv BT';
  margin-top: 30%;
  margin-left: -118%;
  width: 140%;
}

#input3 {
  font-family: 'Futura Hv BT';
  margin-top: 30%;
  margin-left: -25%;
  width: 140%;
}

#input5 {
  font-family: 'Futura Hv BT';
  margin-top: 8%;
  padding-left: 1%;
  width: 220%;
}

#input6 {
  font-family: 'Futura Hv BT';
  margin-top: 8%;
  padding-left: 1%;
  width: 220%;
}

#final {
  margin-top: 10%;
  margin-left: 20%;
}

</style>