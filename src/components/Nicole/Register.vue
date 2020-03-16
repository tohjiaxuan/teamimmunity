<template>
<b-container fluid id="main">
    <b-row id="rows" cols="2">
        <b-col>
            <div id="overview" class="bg-cover"> </div>
            <div id="rectangle"> </div>
                <h2 id="welcome"> Hello There! </h2>
                <p id="subtitle"> Feeling lost about coding? </p>
                <div id="grey" class="shadow-lg p-3 mb-5 bg-grey rounded">
                    <p id="description"> Join us on a journey to discover the tips and 
                    tricks for coding in various languages! 
                    Suitable for aspiring coders and experienced coders who wish to 
                    further hone their skills or pick up a new language. </p>
                </div>
        </b-col>
        <b-col>
            <b-row no-gutters="">
                <b-col sm="4"> <h2 id="titles"> Sign Up /</h2> </b-col>
                <b-col align-self="start">
                    <router-link to="/log">
                    <h2 id="login"> Login </h2>
                    </router-link>
                </b-col>
            </b-row>
            <h5 id="sub"> Fill in to join us! </h5>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-input-group id="group1">
                    <b-input-group-prepend is-text>
                        <b-icon icon="at" variant="info"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input id="userid" v-model="form.userid" type="text" required placeholder="User ID"> </b-form-input>
                </b-input-group>
                <b-input-group id="group2">
                    <b-input-group-prepend is-text>
                        <b-icon icon="envelope" variant="info"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input type="email" required placeholder="Email" v-model="form.email"> </b-form-input>
                </b-input-group>
                <b-input-group id="group3">
                    <b-input-group-prepend is-text>
                        <b-icon icon="lock-fill" variant="info"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input type="password" required placeholder="Password" v-model="form.password"> </b-form-input>
                </b-input-group>
                <b-input-group id="group4">
                    <b-input-group-prepend is-text>
                        <b-icon icon="shield-lock-fill" variant="info"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input type="password" required placeholder="Re-enter Password" v-model="form.password2"> </b-form-input>
                </b-input-group>
                <b-input-group id="group5">
                    <b-input-group-prepend is-text>
                        <b-icon icon="book-half-fill" variant="info"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input type="text" required placeholder="Course" v-model="form.course"> </b-form-input>
                </b-input-group>
                <b-input-group id="group6">
                    <b-input-group-prepend is-text>
                        <b-icon icon="calendar-fill" variant="info"></b-icon>
                    </b-input-group-prepend>
                    <b-form-select v-model="form.year" :options="options"> </b-form-select>
                </b-input-group>
                <br>
                <br>
                <router-link id="move" to="/after">
                    <b-button block variant="outline-light" id="start"> Let's Get Started! </b-button>
                </router-link>
            </b-form>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          userid: '',
          email: '',
          password: '',
          password2: '',
          course: '',
          year: null,

        },
        show: true,
        options: [
            { value: null, text: 'Year of study' },
            { value: 'new', text: 'Prospective Freshmen' },
            { value: '1', text: 'Year 1' },
            { value: '2', text: 'Year 2' },
            { value: '3', text: 'Year 3' },
            { value: '4', text: 'Year 4' }
        ]
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.userid = '',
        this.form.email = '',
        this.form.password = '',
        this.form.password2 = '',
        this.form.course = '',
        this.form.year = []
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
#main {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;

}

#rows {
    height: 100%;
    width: 100%;
}

#overview {
    position: absolute;
    left: 0%;
    background-image:url('/assets/login.jpeg');
    height: 100%;
    width: 100%;
    z-index: -1;
}


.bg-cover {
  background-size: cover !important;
}

#rectangle{
    position: absolute;
    background-color: rgba(23, 23, 23, 0.49);
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    z-index: -1;
}

#welcome {
    font-family: 'Futura Hv BT';
    font-size: 250%;
    text-align: center;
    padding-top: 30%;
    color: #ffffff;
}

#subtitle {
    font-family: 'Futura Hv BT';
    font-size: 150%;
    text-align: center;
    color:  #ffffff;
}

#grey {
    text-align: center;
    font-family: 'Futura Hv BT';
    background-color: rgba(196, 196, 196, 0.7);
    width: 68%;
    margin-left: 15%;
    padding-top: 10%;
    font-size: 120%;
    color: #000000;

}

#titles {
    font-family: 'Futura Hv BT';
    font-size: 190%;
    padding-top: 20%;
    margin-left: 20%;
    height: 40%;
    width: 75%;
}

#login {
    font-family: 'Futura Hv BT';
    font-size: 190%;
    padding-top: 10%;
    margin-left: 0%;
    text-align: left;
    color: #ADACAC;
    text-decoration: underline;
}

#sub {
    font-family: 'Futura Hv BT';
    font-size: 150%;
    margin-left: 7%;
    padding-top: 8%;
}

#group1 {
    padding-top: 10%;
    margin-left: 6%;
    width: 90%;
}

#group2 {
    width: 90%;
    margin-left: 6%;
    padding-top: 7%;
}

#group3 {
    width: 90%;
    margin-left: 6%;
    padding-top: 7%;
}

#group4 {
    width: 90%;
    margin-left: 6%;
    padding-top: 7%;
}

#group5 {
    width: 90%;
    margin-left: 6%;
    padding-top: 7%;
}

#group6 {
    width: 90%;
    margin-left: 6%;
    padding-top: 7%;
}

#start {
    font-family: 'Futura Hv BT';
    background-color: #84CEEB;
    margin-left: 29%;
    width: 50%;
}

</style> 