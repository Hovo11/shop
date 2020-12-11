<template>
  <div class="register-container d-flex align-items-center justify-content-center">
    <div class="form-group w-50">
      <input class="form-control m-2" v-model="name" type="text" placeholder="name">
      <span v-if="errors.name" class="text-danger">{{errors.name}}</span>
      <input class="form-control m-2" v-model="surname" type="text" placeholder="surname">
      <span v-if="errors.surname" class="text-danger">{{errors.surname}}</span>
      <input class="form-control m-2" v-model="age" type="text" placeholder="age">
      <span v-if="errors.age" class="text-danger">{{errors.age}}</span>
      <input class="form-control m-2" v-model="email" type="text" placeholder="email">
      <span v-if="errors.email" class="text-danger">{{errors.email}}</span>

      <input class="form-control m-2" v-model="password" type="password" placeholder="password">
      <span v-if="errors.password" class="text-danger">{{errors.password}}</span>

      <input class="form-control m-2" v-model="confirm_password" type="password" placeholder="confirm password">
      <span v-if="errors.confirm_password" class="text-danger">{{errors.confirm_password}}</span>
      

      <button @click="checkForm()" class="btn btn-dark">Register</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        errors: {
          name: null,
          age: null,
          email: null,
          password: null,
          confirm_password: null,
          surname: null
        },
        name: null,
        age: null,
        email: null,
        password: null,
        confirm_password: null,
        surname: null,
        auth_user:{},
        users:[]
      }

    },
    methods: {
      checkForm() {
        var isnumbers = /^[A-Za-z]+$/;
        var isletters = /^[0-9]+$/;
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!this.name) {
          this.errors.name='Name is required.';
        } else if (isletters.test(this.name)) {
          this.errors.name='Please Write only letters.';
        }else
          {
            this.errors.name=""
          }
        if (!this.age) {
          this.errors.age='Age is required.';
        } else if (isnumbers.test(this.age)) {
          this.errors.age='Please Write only numbers.';
        }else
          {
            this.errors.age=""
          }
        if (!this.surname) {
          this.errors.surname='Surname is required.';
        } else if (isletters.test(this.surname)) {
          this.errors.surname='Please Write only letters.';
        }else {
          this.errors.surname=""
        }
         if (!this.email) {
           this.errors.email='Email is required.';
       } else if (!this.email.match(mailformat)) {
         this.errors.email='Please Write email.';
       }else {
         this.errors.email = ""
       }
       if (!this.password) {
         this.errors.password='Password is required.';
       }
        else if(this.password.length<6){
          this.errors.password="Password is short,write more than 5 letters"
        }else {
          this.errors.password = ""
        }
        if(this.confirm_password){
          if (this.password.localeCompare(this.confirm_password)) {
            this.errors.confirm_password="Password write the same password"
          }
        else {
          this.errors.confirm_password = ""
        }
        }
        if (this.errors.confirm_password ===""&&this.errors.password ===""&&this.errors.name===""&&this.errors.surname ===""
          &&this.errors.email ===""&&this.errors.age ===""){
          this.errors={}
          this.auth_user.name=this.name
          this.auth_user.surname=this.surname
          this.auth_user.email=this.email
          this.auth_user.age=this.age
          this.auth_user.password=this.password
          this.users.push(this.auth_user)
          this.storageUsers(this.users)
          this.$router.push('Login')
          console.log(1)
        }

      },
      storageUsers(user) {
        let allUsers = JSON.stringify(user);
        localStorage.setItem('auth_users', allUsers);
    },
    }
  }
</script>

<style scoped>
  .register-container > input {
    margin-bottom: 40px;
  }
</style>
