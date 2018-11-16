<template>
  <div>




<h1>Register</h1>
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<div class="jumbotron" style = "border-radius: 10px">
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
      <div class="error" v-html="error" />

  <button @click="register" class="btn btn-primary">Submit</button>
  </div>
  </div>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email:'',
      password:'',
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
