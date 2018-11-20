<template>
  <div>
  <v-responsive>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site</h3>
          <span class="subheading">Please log in with your information below.</span>
          <v-divider class="my-3"></v-divider>
            <!-- stuff -->
            <v-form name ="app" autocomplete="on">
                <v-container>
                  <v-layout row wrap>
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
                            single-line
                            outline
                          ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
              <!-- submit button -->
              <!-- <div class="error" v-html="error" /> -->
              <v-btn
                dark
                class="blue"
                style="border-radius: 10px"
                @click="login">
                Log in
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
  methods:{
    async login(){
      try{
      const response = await AuthenticationService.login({
        email:this.email,
        password:this.password
      })
      this.$store.dispatch('setToken',response.data.token)
      this.$store.dispatch('setUser',response.data.user)
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
