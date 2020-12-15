<template>
  <div class="register-container d-flex align-items-center justify-content-center">
    <div class="form-group w-50">
      <input class="form-control m-2" v-model="user_data.name" type="text" placeholder="name">
      <input class="form-control m-2" v-model="user_data.surname" type="text" placeholder="surname">
      <input class="form-control m-2" v-model="user_data.age" type="text" placeholder="age">
      <input class="form-control m-2" v-model="user_data.email" type="text" placeholder="email">
      <input class="form-control m-2" v-model="user_data.password" type="password" placeholder="password">

      <input class="form-control m-2" v-model="user_data.confirm_password" type="password" placeholder="confirm password">

      <button @click="signup()" class="btn btn-dark">Register</button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { required, email, minLength } from "vuelidate/lib/validators";
  export default {
    name: "Register",
    validations: {

        email: { required, email },
        password: { required, minLength: minLength(6) },

    },
    data() {

      return {


          user_data:{}

      }
    },
    methods:{
      signup() {
      axios.post('http://127.0.0.1:8000/api/auth/signUp',this.user_data).then(res=>{

        this.$router.push("/login")
      }).catch(err=>{
        alert(err.response.data)
      })
      }
    }
  }


</script>

<style scoped>
  .register-container > input {
    margin-bottom: 40px;
  }
</style>
