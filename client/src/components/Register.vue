<template>
  <div>
  <v-responsive>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site!</h3>

          <span class="subheading">Please register with your information below.</span>

          <v-divider class="my-3"></v-divider>

<!-- stuff -->
 <v-form name="app" autocomplete="off">
    <v-container>
      <v-layout row wrap>

<!-- fist name -->
        <v-flex xs12 sm6>
          <v-text-field
            label="First Name"
            single-line
            outline
            v-model="fName"
            :rules="fnRules"
          ></v-text-field>
        </v-flex>

<!-- Last Name -->
        <v-flex xs12 sm6>
          <v-text-field
            label="Last Name"
            single-line
            outline
            v-model="lName"
            :rules="lnRules"
          ></v-text-field>
        </v-flex>
<!-- Email -->
        <v-flex xs12 sm6>
         <v-text-field
                label="Email"
                single-line
                outline
                v-model="email"
                :rules="emailRules"
          ></v-text-field>
        </v-flex>
<!-- Passowrd -->
        <v-flex xs12 sm6>
              <v-text-field
                label="Password"
                v-model="password"
                type="password"
                :rules="pwRules"
                :counter="8"
                aria-autocomplete="new-password"
                single-line
                outline
              ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
          <!-- <div class="error" v-html="error" /> -->
            <v-btn
              dark
              class="blue"
              style="border-radius: 10px"
              @click="register">
              Register
            </v-btn>

<!-- stuff -->

        </v-flex>
      </v-layout>
    </v-container>
  </v-responsive>
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
      fName:'',
      fnRules: [
        v => !!v || 'First name is required',        
      ],
      lName:'',
      lnRules: [
        v => !!v || 'Last name is required',        
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
        email:this.email,
        password:this.password
      })
      this.$store.dispatch('setToken',response.data.token)
      this.$store.dispatch('setUser',response.data.user)
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
