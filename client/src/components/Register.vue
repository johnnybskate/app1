<template>
  <div>
    <h1>Register</h1>
    <input 
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
    <br>
    <input 
      type="password"
      name="password"
      v-model="password"
      placeholder="password"/>
    <br>
      <button @click="register">
        Register
      </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email:'',
      password:''
    }
  },
  watch:{
    email(value){
      console.log('email has changed value',value)
    }
  },
  methods:{
    // async register(){
    //   const response = await AuthenticationService.register({
    //     emaill:this.email,
    //     password:this.password
    //   })
    //   console.log(response.data)
    // }
    register(){
      console.log('reg')
    }
  }
  // mounted(){
  //   setTimeout(() => {
  //     this.email = 'helloworld'
  //           console.log('email has changed value')

  //   }, 2000)
  // }
}
</script>

<style scoped>

</style>
