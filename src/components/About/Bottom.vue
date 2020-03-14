<template>
<div id="bottom">
    <b-container fluid class='my-container mt-5 text-dark bg-overlay pb-5'>
        <b-row align-h="center" class='my-row pt-3 pb-5'>
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
                <img
                    class="d-block img-fluid w-25 h-25 pb-3 pt-0"
                    src="/assets/arnold.png"
                    alt="image slot"
                    fluid
                >
                </template>
                <span id="text">Arnold <br/> Nerd </span>
        </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <img
                    class="d-block img-fluid w-25 h-25 "
                    src="/assets/nic.png"
                    alt="image slot"
                    fluid
                >
                </template>
                <span id="text">Nicole <br/> Code Pro </span>
            ></b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <img
                    class="d-block img-fluid w-25 h-25 "
                    src="/assets/jb.png"
                    alt="image slot"
                    fluid
                >
                </template>
                <span id="text">Jian Bin <br/> SOC Struggler </span>
            ></b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <img
                    class="d-block img-fluid w-25 h-25 "
                    src="/assets/charlotte.png"
                    alt="image slot"
                    fluid
                >
                </template>
                <span id="text">Charlotte <br/> Leader </span>
            ></b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <img
                    class="d-block img-fluid w-25 h-25 "
                    src="/assets/vicki.png"
                    alt="image slot"
                    fluid
                >
                </template>
                <span id="text">Vicki <br/> The Serious One </span>
            ></b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <img
                    class="d-block img-fluid w-25 h-25 "
                    src="/assets/jx.png"
                    alt="image slot"
                    fluid
                >
                </template>
                <span id="text">Jia Xuan <br/> Follower </span>
            ></b-carousel-slide>

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
}
</style>