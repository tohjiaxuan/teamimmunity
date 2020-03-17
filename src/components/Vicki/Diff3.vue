
<template>
    

<section class="pricing py-5">
  <div class="container">
    <div class="text-center">
    <img src="https://img.icons8.com/color/49/000000/3-circle-c--v1.png"/>
    </div>
    <h2 class="text-center">Key Differences in: Variable Declaration</h2>
    <div class="row">
    
      <!-- Python Tier -->
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">VARIABLE DECLARATION</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/45/000000/python.png"/> 
                <br>
                Python
                
                
            </h6>
            <hr>
            <ul class="fa-ul">
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
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">VARIABLE DECLARATION</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/47/000000/java-coffee-cup-logo.png"/> 
                <br>
                Java
               
            </h6>
            <hr>
            <ul class="fa-ul">
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
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">VARIABLE DECLARATION</h5>
            <h6 class="card-price text-center">
                <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                <br>
                JavaScript
                
            </h6>
            <hr>
            <ul class="fa-ul">
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
  </div>
  <router-link to="/diff2" id="getstarted5"><button type="button" class="btn btn-info float-left">Back</button></router-link>
  <button type="button" class="btn btn-info float-right">Next</button>
</section>



</template>

<style>
  section.pricing {
    background: #CBE7F8;
    
    
  }

  h2 {
    font-family: Futura HV BT;
    color:#3F6892;
  }

  
  .pricing .card {
    border: none;
    border-radius: 1rem;
    transition: all 0.2s;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    
    
   
  }
  
  .pricing hr {
    margin: 1.5rem 0;
  }
  
  .pricing .card-title {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    letter-spacing: .1rem;
    font-weight: bold;
  }
  
  .pricing .card-price {
    font-size: 3rem;
    margin: 0;
  }
  
  .pricing .card-price .period {
    font-size: 0.8rem;
  }
  
  .pricing ul li {
    margin-bottom: 1rem;
  }
  
  .pricing .text-muted {
    opacity: 0.7;
  }
  
  .pricing .btn {
    font-size: 80%;
    border-radius: 5rem;
    letter-spacing: .1rem;
    font-weight: bold;
    padding: 1rem;
    opacity: 0.7;
    transition: all 0.2s;
  }
  
  /* Hover Effects on Card */
  
  @media (min-width: 992px) {
    .pricing .card:hover {
      margin-top: -.25rem;
      margin-bottom: .25rem;
      box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
    }
    .pricing .card:hover .btn {
      opacity: 1;
    }
  }
  /* Fallback for Edge
  -------------------------------------------------- */
  
  @supports (-ms-ime-align: auto) {
    .form-label-group>label {
      display: none;
    }
    .form-label-group input::-ms-input-placeholder {
      color: #777;
    }
  }
  
  /* Fallback for IE
  -------------------------------------------------- */
  
  @media all and (-ms-high-contrast: none),
  (-ms-high-contrast: active) {
    .form-label-group>label {
      display: none;
    }
    .form-label-group input:-ms-input-placeholder {
      color: #777;
    }
  }
</style>