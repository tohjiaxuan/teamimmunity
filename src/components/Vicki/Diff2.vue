
<template>
    <div>
      <Navbar></Navbar>
  <div class="container-fluid difference mb-3">
    <div class="text-center mt-4">
    <img src="https://img.icons8.com/color/49/000000/2-circle-c--v1.png"/>
    </div>
    <h2 class="text-center">Key Differences in: Printing</h2>
    <div class="row">
    
      <!-- Python Tier -->
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0 w-75 ml-5">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">PRINTING</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/45/000000/python.png"/> 
                <br>
                Python
                
                
            </h6>
            <hr>
            <ul class="fa-ul mb-5 pb-3">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>print("Hello")</li>
              
              
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
                                def my_function():<br><p style="text-indent: 3em;">print("Hello from a function")</p>
                                
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
        <div class="card mb-5 mb-lg-0 w-75 ml-5">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">PRINTING</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/47/000000/java-coffee-cup-logo.png"/> 
                <br>
                Java
               
            </h6>
            <hr>
            <ul class="fa-ul mb-5">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>System.out.println("Hello");</li>
              
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
      <!-- JavaScript Tier -->
      <div class="col-lg-4">
        <div class="card w-75 ml-5">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">PRINTING</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                <br>
                JavaScript
                
            </h6>
            <hr>
            <ul class="fa-ul mb-5 pb-3">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>console.log("Hello");</li>
              
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
                        
                        function func(){<br> <p style="text-indent: 3em;">return (5 * 19);<br> } </p><br>console.log(func()); 
                        
                        
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
  <br>
    <router-link to="/diff1" id="getstarted3"><button type="button" class="btn btn-info ml-5">Back</button></router-link>
    <router-link to="/diff3" id="getstarted4"><button type="button" class="btn btn-info float-right mr-5">Next</button></router-link>
    
  </div>
  
  <br>
  <br>
  <br>
  <div class="row fixed-row-bottom float-right">
  <Footer></Footer>
  </div>

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
h2 {
  color:#3F6892;
}

</style>