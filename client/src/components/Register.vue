<template>
  <div>



  <v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site!</h3>
          <span class="subheading">Please reigster with your information below.</span>
          <v-divider class="my-3"></v-divider>
            <!-- User input; email, password -->
            <v-form v-model="valid">
              <v-text-field
                label="Email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
                <br>
              <v-text-field
                label="Password"
                v-model="password"
                :rules="pwRules"
                :counter="8"
              ></v-text-field>
                <br>
              <!-- <div class="error" v-html="error" /> -->
                <br>
            </v-form>
            <!-- Submit button -->
            <v-btn
              dark
              class="blue"
              @click="register">
              Register
            </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email:'',
      emailRules: [
        v => !!v || 'E-mail is required',
        // v => /.+@.+/.test(v) || 'E-mail must be valid'
        v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid'
        
      ],
      password:'',
      pwRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must mores than 8 characters'
      ],
      error: null
    }
  },
  watch:{
    email(value){
      console.log('email has changed value',value)
    }
  },
  methods:{
    async register(){
      try{
      const response = await AuthenticationService.register({
        emaill:this.email,
        password:this.password
      })
      console.log(response.data)
      }catch(error){
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error{
  color:red;
}
</style>
