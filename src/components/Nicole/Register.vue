<template>
    <div id="test1">
    <div id="overview" style="background-image: url(/assets/login.jpeg)">
       <div id="rectangle">
            <h2> Hello There! </h2>
            <p> Feeling lost about coding? </p>
                <div id="grey"> 
                    <p id="description"> Join us on a journey to discover the tips and 
                    tricks for coding in various languages! 
                    Suitable for aspiring coders and experienced coders who wish to 
                    further hone their skills or pick up a new language </p>
                </div>
        </div>

        <div id='reg'> 
            <h4> Sign Up /     
            <router-link id="change" to="/log">
                Login
            </router-link>
            </h4>
            <div id="extra"> 
                <h5> Fill in to join us! </h5>
            </div>
            <form id="signup">
                <div class="form">
                    <input type="text" v-model="user.userId" name="userId" placeholder="    User ID" class="box"/>
                </div>
                <div class="form">
                    <input type="text" v-model="user.email" name="email" placeholder="    Email" class="box"/>
                </div>
                <div class="form">
                    <input type="password" v-model="user.password" placeholder="    Password" class="box"/>
                </div>
                <div class="form">
                    <input type="password" v-model="user.password2" placeholder="    Re-Enter Password" class="box"/>
                </div>
                <div class="form">
                    <input type="text" v-model="user.course" placeholder="    Course" class="box"/>
                </div>
                <div class="dropdown">
                    <select v-model="user.year">
                        <option disabled value = ""> Year of Study </option>
                        <option> Prospective Freshmen </option>
                        <option> Year 1 </option>
                        <option> Year 2 </option>
                        <option> Year 3 </option>
                        <option> Year 4 </option>
                    </select>
                </div>
                <div>
                    <button id="signing" v-on:click="submitted = true">Let's Get Started!</button>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            user: {
                userId: '',
                email: '',
                password: '',
                password2: '',
                course: '',
                year: ''
            }
        }
    }
}
</script>

<style scoped>
#test1 {
    max-height: 100%;
    max-width: 100%;
}

#rectangle {
    position: absolute;
    width: 631px;
    height: 1153px;
    left: -35px;
    top: 0px;

    background: rgba(23, 23, 23, 0.49);
}

#overview {
    position: absolute;
    width: 594px;
    height: 1153px;
    left: 0px;
    top: 0px;
}

#description {
    position: absolute;
    width: 513px;
    height: 518px;
    left: 70px;
    top: 402px;

    background: rgba(196, 196, 196, 0.7);
}

#reg {
    position: absolute;
    margin-top: 2px;
    width: auto;
    height: auto;
    left: 730px;
}

#grey {
    position: absolute;
    top: -30px;
}

h4 {
    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    width: 250px;
}


.placeholder {
  position: absolute;
  left: 20px;
  top: 0px;
  bottom: 50px;
  opacity: -1;
  background-color: white;
  padding: 0 20px;
}

#change {
    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    display: flex;
    align-items: center;
    color: #000000;
}

h2 {
    position: absolute;
    width: auto;
    height: 58px;
    margin-left: 180px;
    top: 170px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 45px;
    line-height: 54px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
}

p {
    position: absolute;
    width: auto;
    height: 72px;
    left: 170px;
    top: 220px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
}

#quote {
    position: absolute;
    width: 348px;
    height: 72px;
    left: 150px;
    top: 220px;
    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
}

#extra {
    position: absolute;
    width: 241px;
    height: 54px;
    left: 0px;
    top: 173px;

    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: center;

    color: #000000;

}

#signup {
    position: absolute;
    width: auto;
    height: 500px;
    top: 280px;
}

input {
    width: 447px;
    height: 50px;
    outline: none;
    border: none;
    padding-bottom: 0px;
    border-bottom: 1px solid #000000;
}

#signing {
    background-color:#84CEEB; 
    width:385px; 
    height:43px;
    font-family:'Futura Hv BT'; 
    font-size:20px; 
    color:#FFFFFF;
    position: center;

    position: absolute;
    left: 90px;
    top: 600px;
    border: none;
    cursor: pointer;
}
#signing:hover {
    opacity: 0.8;
}

.form {
    margin-bottom: 40px;
    width: 700px;
}

.box {
    border:0px;
    border-bottom: 1px solid grey;
    width: 500px;
}

.dropdown {
    margin-top: 50px;
    top: 450px;
    left: 0px;
}

select {
    border: none;
    width: 456px;
    height: 40px;
    border-bottom: 1px solid #000000;
    background-color: #ffffff;
}
</style> 