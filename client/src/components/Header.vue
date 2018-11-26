<template>
  <div>
<v-toolbar fixed class="blue" dark >
    <v-toolbar-side-icon>
    </v-toolbar-side-icon>

    <!-- home button -->
        <v-toolbar-items>
          <v-btn 
          flat 
          dark
          :to="{
            name: 'home'
          }">LAVA
          </v-btn>
             <v-btn 
          flat 
          dark
          router
          grow
          :to="{
            name: 'home'
          }">Home
          </v-btn>
    <!-- documents button -->
          <v-btn 
          flat 
          dark
          router
          v-if="$store.state.isUserLoggedIn" 
          to="documents"
          >Documents</v-btn>

          <!-- Explore button -->
          <v-btn 
          flat 
          dark
          router
          to="documents"
          >Explore</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
      <v-text-field
        append-icon="mic"
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>
            <!-- profile button -->
          <v-btn 
          flat 
          dark
          router
          v-if="$store.state.isUserLoggedIn" 
          to="documents"
          >My Profile</v-btn>
          <!-- sign up button -->
          <v-btn
          v-if="!$store.state.isUserLoggedIn" 
          flat 
          dark
          router
          to="register"
          >Sign Up</v-btn>
          <!-- log in button -->
          <v-btn 
          v-if="!$store.state.isUserLoggedIn"
          flat 
          dark
          router
          to="login"
          >Log in</v-btn>
          <!-- log out button -->
          <v-btn
          v-if="$store.state.isUserLoggedIn" 
          flat 
          dark
          @click="logout"
          >Log out</v-btn>
      </v-toolbar-items>
  </v-toolbar>
  </div>
</template>

<script>
  export default {
    methods:{
      navigateTo(route){
        this.$router.push(route)
      },
      logout(){
        this.$store.dispatch('setToken',null)
        this.$store.dispatch('setUser',null)
        this.$router.push({
          name:'home'
        })
      }
    }
  }
</script>

<style scoped>
.home{
  cursor:pointer;
}
</style>
