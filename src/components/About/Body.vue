<template>
<div>
    <b-container fluid class='my-container text-dark bg-overlay pb-5 pt-0'>
        <b-row align-h="center" class='my-row pt-4'>
        <b-col cols='5.5' class='my-col'>
            <h1 class="mt-3 pt-3 display-4"><strong>{{text1}}</strong></h1>
        </b-col>
        </b-row>
        
        <b-row align-h="center" class='my-row pt-3'>
        <b-col cols='5.5' class='my-col'>
            <h2 class='pt-1'>{{text2}}</h2>
        </b-col>
        </b-row>

        <b-row align-h="center" class='my-row pt-4 text-center'>
            <b-col cols='5.5' class='my-col'>
                <span>
                 Code.io is a platform for beginners to gain exposure to coding <br/>
                 and enjoy the fun in coding through our interactive exercises. <br/> 
                </span>
            </b-col>
        </b-row>

        <b-row align-h="center" class='my-row pt-4 text-center'>
            <b-col cols='5.5' class='my-col'>
                <span>
                We believe that any individual who has a keen mind in learning can definitely become a Coder!
                </span>
            </b-col>
        </b-row>
    </b-container>

    <div>
        <b-img src='/assets/about.jpg' class="img-fluid h-50" style=" width:100%" alt="Responsive image"></b-img>
    </div>



</div>
</template>


<script>
export default {
data() {
      return {
        text1: 'Code.io',
        text2: 'What are we',
      };
  },

};


</script>

<style scoped>

h1, h2, span{
    font-family: Futura Hv Bt;
}

.bg-overlay {
    background: linear-gradient(180deg, #CBE7F8 54%, rgba(222, 248, 254, 0) 100%);
    background-repeat: no-repeat;
    background-size: cover;
    /* background-color: #CBE7F8 */
    /* height: 100vh; */
}

.b-img {
    height: 200px;
}

</style>