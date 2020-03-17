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
                <h2 class='pt-3'>{{text2}}</h2>
            </b-col>
        </b-row>

        <b-row align-h='center' class='mt-5'>
            <b-col cols='1.5'>
                <b-button-group size='lg'>
                    <router-link to="/reg">
                        <b-button class='b-button' variant="outline-primary">Register</b-button>
                    </router-link>
                    <router-link to="/log">
                        <b-button class='b-button' variant="outline-primary">Sign In</b-button>
                    </router-link>
                </b-button-group>
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
                <b-img center fluid src='assets/gamepad.png' class='w-25'></b-img>
            </b-col>
        </b-row>

        <b-row cols="3" align='center'>
            <b-col>
                <span>Customised for<br/>modules</span>
            </b-col>
            <b-col>
                <span>Detailed<br/>explanation</span>
            </b-col>
            <b-col>
                <span>Gamelike<br/>exercises</span>
            </b-col>
        </b-row>
    </b-container>
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
    color: black;
}
</style>