<template>
    <b-container fluid class='bg-overlay pb-5 mb-3'>
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
                        <b-form-input id="input-default" placeholder="Name" v-model.lazy="feedback.name"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="10">
                        <b-form-input id="input-default" placeholder="Email" v-model.lazy="feedback.email"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="10">
                          <div>
                                <b-form-textarea
                                id="textarea"
                                placeholder="Your Message"
                                rows="3"
                                max-rows="6"
                                v-model.lazy="feedback.message"
                                ></b-form-textarea>

                                
                            </div>    
                        </b-col>
                    </b-row>
                    <b-button block variant="primary" class="my-1 w-75 ml-4" pill v-on:click.prevent="submitMessage">Submit Message</b-button>
                    </b-jumbotron>
                </b-container>

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import database from "../../firebase.js";
export default {
    data() {
        return {
            feedback: {
                name: '',
                email: '',
                message: '',
            }
        }
    },
    methods: {
        submitMessage() {
            database.collection('feedback').doc().set(this.feedback)
            .then((response)=>{
                alert('Feedback received. Have a nice day :)')
                console.log(response)
                this.$router.replace('contact')
            })
        }
    }
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