
<template>
    

<section class="pricing py-5">
  <br>
  <div class="container">
    <Navbar></Navbar>
    <div class="text-center">
    <img src="https://img.icons8.com/color/49/000000/1-circle-c--v1.png"/>
    </div>
    <h2 class="text-center">Key Differences in: Syntax</h2>
    <div class="row">
    
      <!-- Python Tier -->
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">SYNTAX</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/45/000000/python.png"/> 
                <br>
                Python
                
                
            </h6>
            <hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Code blocks defined by indentation</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Semi-colons not permitted to end statements</li>
              
            </ul>
             <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                See Code
            </button>
                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Python Code</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                if password == 'apple':<br><p style="text-indent: 3em;">print('Logging In...')</p><br>else:<br><p style="text-indent: 3em;">print('Incorrect password.')</p>
                            </div>
                            <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    
                            </div>
                            </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Java Tier -->
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">SYNTAX</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/47/000000/java-coffee-cup-logo.png"/> 
                <br>
                Java
               
            </h6>
            <hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Code blocks defined by curly braces</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Semi-colons required to end statements</li>
            </ul>
            <div>
            <button type="button"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong1">
                See Code
            </button>
                <div class="modal fade" id="exampleModalLong1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Java Code</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                    public static void myMethod() {
                                    <br>
                                    <p style="text-indent: 3em;">System.out.println("hello!");</p>
                                    <br>
                                    }   
                            </div>
                            <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    
                            </div>
                            </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- JS Tier -->
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">SYNTAX</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                <br>
                JavaScript
                
            </h6>
            <hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Code blocks defined by curly braces</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Semi-colons required to end statements</li>
              
            </ul>
            <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong2">
                See Code
            </button>
            <div class="modal fade" id="exampleModalLong2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">JavaScript Code</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        
                        function myFunction(p1, p2) { 
                            <br>
                            <p style="text-indent: 3em;">p1 + p2;</p>
                            <br>
                            
                        }
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    


    </div>
    
  </div>
  <router-link to="/btn" id="getstarted2"><button type="button" class="btn btn-info float-left">Back</button></router-link>
  <router-link to="/diff2" id="getstarted2"><button type="button" class="btn btn-info float-right">Next</button></router-link>
  <br>
  <br>
  <br>
  <Footer></Footer>
</section>



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



