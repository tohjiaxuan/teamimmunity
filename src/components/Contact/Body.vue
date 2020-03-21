<template>
    <b-container fluid class='bg-overlay'>
        <b-row>
            <b-col id="image">
                <b-img src='assets/email.png' fluid class="w-80 h-80 pt-5 mt-5" center>
                </b-img>
            </b-col>
            <b-col>
                <b-container>
                    <b-jumbotron header="Contact Us" lead="Send us a message" text-variant="dark">
                    <b-row class="my-1" >
                        <b-col sm="10">
                        <b-form-input id="input-default" placeholder="Name"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="10">
                        <b-form-input id="input-default" placeholder="Email"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="10">
                          <div>
                                <b-form-textarea
                                id="textarea"
                                v-model="text"
                                placeholder="Your Message"
                                rows="3"
                                max-rows="6"
                                ></b-form-textarea>

                                <pre class="mt-3 mb-0">{{ text }}</pre>
                            </div>    
                        </b-col>
                    </b-row>
                    <b-button block variant="primary" class="my-1 w-75 ml-4" pill>Submit Message</b-button>
                    </b-jumbotron>
                </b-container>

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.my-1{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}

.bg-overlay{
    background: linear-gradient(180deg, #CBE7F8 0%, rgba(222, 248, 254, 0) 100%);
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: center center; */
    color: #fff;
}

</style>