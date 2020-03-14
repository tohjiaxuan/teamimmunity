<template>
<div id="bottom">
    <b-container fluid class='my-container text-dark bg-overlay pb-1'>
        <b-row align-h="center" class='my-row pt-3 pb-2'>
        <b-col cols='5.5' class='my-col'>
            <h2 class='pt-1'>{{text1}}</h2>
        </b-col>
        </b-row>
    </b-container>

    <div id='rect' fluid>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="white"
            img-height=280
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
        <b-carousel-slide>
                <template v-slot:img>
                <b-img
                    class="d-block img-fluid w-25 h-25 pb-5 mb-5 pt-3"
                    src="/assets/arnold.png"
                    alt="image slot"
                    fluid
                ></b-img>
                </template>
                <span id="text">Arnold<br/>Nerd </span>
        </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <b-img
                    class="d-block img-fluid w-25 h-25 pb-5 mb-5 pt-3"
                    src="/assets/nic.png"
                    alt="image slot"
                    fluid
                ></b-img>
                </template>
                <span id="text">Nicole<br/>Code Pro </span>
            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <b-img
                    class="d-block img-fluid w-25 h-25 pb-5 mb-5 pt-3"
                    src="/assets/jb.png"
                    alt="image slot"
                    fluid
                ></b-img>
                </template>
                <span id="text">Jian Bin<br/>SOC Struggler </span>
            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <b-img
                    class="d-block img-fluid w-25 h-25 pb-5 mb-5 pt-3"
                    src="/assets/charlotte.png"
                    alt="image slot"
                    fluid
                ></b-img>
                </template>
                <span id="text">Charlotte<br/>Leader </span>
            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <b-img
                    class="d-block img-fluid w-25 h-25 pb-5 mb-5 pt-3"
                    src="/assets/vicki.png"
                    alt="image slot"
                    fluid
                ></b-img>
                </template>
                <span id="text">Vicki<br/>The Serious One </span>
            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <b-img
                    class="d-block img-fluid w-25 h-25 pb-5 mb-5 pt-3"
                    src="/assets/jx.png"
                    alt="image slot"
                    fluid
                ></b-img>
                </template>
                <span id="text">Jia Xuan<br/>Follower </span>
            </b-carousel-slide>

        </b-carousel>

    </div>
</div>    
</template>

<script>
export default {
    data() {
      return {
        text1: 'Meet Our Team',
      };
  },

};

</script>

<style scoped>

/* #bottom{
    background-color: blanchedalmond;
} */

h2{
    font-family: Futura Hv Bt;
}

.carousel-inner img {
  margin: auto;
}

.carousel-inner .active{
     background:none !important;
}

#text{
    font-family: Futura Hv Bt;
    color:black
}

.carousel .controls{
    color:black !important;
}


</style>