<template>
  <div class="container-fluid">
  <Navbar></Navbar>
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">Learning A New Language?</h3>
              <h4 class="login-heading1 mb-4">
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/> 
                <img src="https://img.icons8.com/color/45/000000/python.png"/> 
                <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
              </h4>
              
              
              <h4 class="login-heading1 mb-5">code.io makes it easy for you to compare the <strong>key differences</strong> between programming languages for effective mastery!</h4>
              
              

              

               <router-link to="/diff1" id="getstarted"><button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-5" type="submit">Let's Learn!</button></router-link>
               

            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>
<script>
import Navbar from '../Common/Navbar.vue'
import Footer from '../Common/Footer.vue'
export default {
    
    components: {
        Navbar,
        Footer
    }
}
</script>

<style scoped>
  :root {
    --input-padding-x: 1.5rem;
    --input-padding-y: 0.75rem;
  }
  
  .login,
  .image {
    min-height: 100vh;
  }
  
  .bg-image {
    background-image: url('https://images.unsplash.com/photo-1482745637430-91c0bbcea3e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
    background-size: cover;
    background-position: center;
  }
  
  .login-heading {
    font-size: 2rem;
    font-weight: 200;
    text-align:center;
    font-family: Futura HV BT;
  }

  .login-heading1 {
    font-size: 1.5rem;
    font-weight: 50;
    text-align:center;
    
  }
  
  .btn-login {
    font-size: 0.9rem;
    color:black;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
    border-radius: 2rem;
    background-color: #CBE7F8 !important;
    border-color: #CBE7F8;
  }

  .btn-login:hover {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
    border-radius: 2rem;
    background-color: #CBE7F8;
    color:black;
    border-color: #1E90FF;
  }
  .btn-info {
      background-color:#1E90FF;
      border-radius: 2rem;
      
  }

  .btn-info:hover {
    background-color:#1E90FF;
}


  

  .input-group {
      border-radius:2rem;
      
  }

  .input-group-text{
    border-radius:2rem;
    background-color: #CBE7F8;
    
  }

.custom-select {
    border-radius:2rem;
  }


  
  .form-label-group {
    position: relative;
    margin-bottom: 1rem;
  }
  
  .form-label-group>input,
  .form-label-group>label {
    padding: var(--input-padding-y) var(--input-padding-x);
    height: auto;
    border-radius: 2rem;
  }
  
  .form-label-group>label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0;
    /* Override default `<label>` margin */
    line-height: 1.5;
    color: #495057;
    cursor: text;
    /* Match the input under the label */
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: all .1s ease-in-out;
  }
  
  .form-label-group input::-webkit-input-placeholder {
    color: transparent;
  }
  
  .form-label-group input:-ms-input-placeholder {
    color: transparent;
  }
  
  .form-label-group input::-ms-input-placeholder {
    color: transparent;
  }
  
  .form-label-group input::-moz-placeholder {
    color: transparent;
  }
  
  .form-label-group input::placeholder {
    color: transparent;
  }
</style>

