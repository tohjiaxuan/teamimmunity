<template>
<div class='bg-overlay '>
    <b-container fluid class='my-container text-dark'>
        <b-row align-h="center" class='my-row mt-3 pt-3'>
            <b-col cols='5.5' class='my-col'>
                <h1 class="mt-3 pt-3 display-4">{{text1}}</h1>
            </b-col>
        </b-row>

        <b-row align-h="center" class='my-row'>
            <b-col cols='5.5' class='my-col'>
                <h2 class='pt-3' v-if='!currentUser'>{{text2}}</h2>
                <h2 class='pt-5' v-if='currentUser'>Welcome back, {{userProfile.name}}!</h2>
            </b-col>
        </b-row>

        <b-row align-h='center' class='mt-5'>
            <b-col cols='1.5'>
                <b-button-group size='lg' v-if='!currentUser'>
                    <router-link to="/reg">
                        <b-button class='b-button' variant="outline-primary">Register</b-button>
                    </router-link>
                    <router-link to="/log">
                        <b-button class='b-button' variant="outline-primary">Sign In</b-button>
                    </router-link>
                </b-button-group>
                <div v-if='currentUser' id='loggedin'><span>You are logged in!</span></div>
            </b-col>
        </b-row>
    </b-container>

    <b-container fluid class='pt-5 mt-5 '>
        <b-row cols="3" align='center'>
            <b-col>
                <b-img center fluid src='assets/book.png' class='w-25'></b-img>
            </b-col>
            <b-col>
                <b-img center fluid src='assets/pitch.png' class='w-25'></b-img>
            </b-col>
            <b-col>
                <b-img center fluid src='assets/leaderboard.png' class='w-25 '></b-img>
            </b-col>
        </b-row>

        <b-row cols="3" align='center' >
            <b-col>
                <span>Customised for<br/>modules</span>
            </b-col>
            <b-col class='pr-1'>
                <span>Detailed<br/>explanation</span>
            </b-col>
            <b-col>
                <span>Leaderboard<br/>ranking</span>
            </b-col>
        </b-row>
    </b-container>
</div>    
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
      return {
        text1: 'Coding can be for anyone.',
        text2: 'Sign up with us today!',
      }
    },
    computed: {
        ...mapState(['currentUser', 'userProfile'])
    }
}
</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
  height: auto;
}

.bg-overlay {
    background: linear-gradient(180deg, #CBE7F8 0%, rgba(222, 248, 254, 0) 100%), url("/assets/mac.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: center center; */
    color: #fff;
    height: 90vh;
}

h1, h2, .b-button {
    font-family: Futura Hv Bt;
}

span{
    font-family: Futura Hv Bt;
    color: rgb(33, 32, 58);
}

#loggedin {
    padding:10px;
    background: rgb(255, 255, 255, 0.4);
    border-radius: 5px;
    padding-left:20px;
    padding-right:20px;

}
</style>