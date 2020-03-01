<template>
    <div id="main">
        <router-link id="change" to="/reg">Back</router-link>
        <div id="background"></div>
        <div id="overlay"> </div>
        <div id="rectangle">
            <img id="holder" src="/assets/namecard.png"/> 
            <h1> MEMBER LOGIN </h1>
        </div> 
        <form id="login">
            <div class="form">
                <input type='text' name="username" v-model="input.username" placeholder="    User ID / Email" />
            </div>
            <div class="form">
                <input type='password' v-model='input.password' placeholder="    Password" />
            </div>
            <div class="form">
                <router-link to='/after'>
                <button id="start" type="button" v-on:click="login()"> LOGIN </button>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            return this.input.username + this.input.password;
        }
    }
}
</script>

<style scoped>
    #main {
        height: auto;
        width: 100%;    
    }

    #background {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        background-image: url('/assets/login.jpeg');
        background-size: 100%;
    }

    #overlay{
        position: absolute;
        background: rgba(23, 23, 23, 0.49);
        height: 100%;
        width: 100%;
        top: 0px;
    }

    #rectangle {
        position: absolute;
        width: 977px;
        height: 560px;
        left: 231px;
        margin-top: 100px;
        background: rgba(196, 196, 196, 0.7);
    }

    #holder {
        height:97px;
        width:107px;
        margin-left: 440px;
        margin-top: 40px;
        text-align: center;
    }

    h1 {
        font-family: 'Futura Hv BT';
        font-size: 40px;
        width: auto;
        margin-left: 336px;
        margin-top: 10px;
        color: #000000;
    }

    #login {
        position: absolute;
        height: auto;
        left: 410px;
        top: 350px;
        width: 790px;
    }

    input {
        width: 607px;
        height: 60px;
    }

    .form {
        width: 595px;
        margin-bottom:40px;
    }

    #start {
        background-color:#84CEEB; 
        width:385px; 
        height:43px;
        font-family:'Futura Hv BT'; 
        font-size:20px; 
        color:#FFFFFF;
        margin-left: 114px;
        top: 60px;
        border: none;
        cursor: pointer;
    }
    #start:hover {
        opacity: 0.8;
    }

    #change {
        font-family: Futura Hv BT;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 54px;
        top: 10px;
        width: auto;
        height: auto;
        align-items: center;
        text-align: center;
        margin-left: 50px;
        color: #ffffff;
        z-index: 1;
        position: absolute;
    }

</style> 