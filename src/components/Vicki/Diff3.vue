
<template>
    
<div>
  <Navbar></Navbar>
  <div class="container-fluid difference mt-3">
    <div class="text-center mt-4">
    <img src="https://img.icons8.com/color/49/000000/3-circle-c--v1.png"/>
    </div>
    <h2 class="text-center">Key Differences in: Variable Declaration</h2>
    <div class="row">
    
      <!-- Python Tier -->
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0 w-75 ml-5">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">VARIABLE DECLARATION</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/45/000000/python.png"/> 
                <br>
                Python
                
                
            </h6>
            <hr>
            <ul class="fa-ul mb-5">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Don't need to declare data type(s)</li>
              
              
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
                                myCounter = 0 <br> myString = 'Hello'
                                
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
            <h5 class="card-title text-muted text-uppercase text-center">VARIABLE DECLARATION</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/47/000000/java-coffee-cup-logo.png"/> 
                <br>
                Java
               
            </h6>
            <hr>
            <ul class="fa-ul mb-5">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Data type(s) need to be declared</li>
              
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
                                    <strong>int </strong>myCounter = 0; <br> <strong>str </strong>myString = 'Hello';
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
        <div class="card mb-5 mb-lg-0 w-75 ml-5">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">VARIABLE DECLARATION</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                <br>
                JavaScript
                
            </h6>
            <hr>
            <ul class="fa-ul mb-5">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>var is used for variable declaration</li>
              
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
                        
                        <strong>var</strong> one = 1;<br><strong>var</strong> two = 'two';  
                        
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
    <router-link to="/diff2" id="getstarted5"><button type="button" class="btn btn-info ml-5">Back</button></router-link>
    <router-link to="/exercise" id="getstarted5"><button type="button" class="btn btn-info float-right mr-5">Try Exercises!</button></router-link>
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