<template>
      <div id='rect' fluid>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-height=280
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                img-src='https://picsum.photos/1024/480/?image=201'
                background='#00A3FF'
                id='text2'
                img-height=200>
            </b-carousel-slide>

            <b-carousel-slide
                caption="Customised for Modules"
                img-src='https://picsum.photos/1024/480/?image=370'
                background='#00A3FF'
                id='text2'
            ></b-carousel-slide>

            <b-carousel-slide
                caption="Gamelike Exercises "
                img-src="https://picsum.photos/1024/480/?image=96"
                id='text2'
            ></b-carousel-slide>

        </b-carousel>


    </div>

</template>

<script>
  export default {

  }
</script>


<style scoped>

#rect{
    margin-top:1%;
}

#text2{
    font-family: Futura Hv BT;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 17px;
    display: flex;
    align-items: center;
    z-index: 10;
}

#log{
    font-family: Futura Hv BT;
    font-style: normal;
    font-size: 30px;
    z-index: 10;
}

#carousel-fade{
    top:0%;
}

.carousel-inner > .item > img {
  height:100px;
}

</style>