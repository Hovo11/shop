<template>
  <div class="login-container">

    <div class="register-container d-flex align-items-center justify-content-center">
      <div class="form-group w-50">
        <h3>Login</h3>

        <input class="form-control m-2" v-model="email" type="text" placeholder="email">
        <span v-if="errors.email" class="text-danger">{{errors.email}}</span>

        <input class="form-control m-2" v-model="password" type="text" placeholder="password">
        <span v-if="errors.password" class="text-danger">{{errors.password}}</span>

        <button @click="checkUser()" class="btn btn-dark">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        errors: {
          email: null,
          password: null,
        },
        current_user:{}
      }

    },

    methods: {
      getUser() {
        let allUsers = localStorage.getItem('auth_users') || [];
        allUsers = JSON.parse(allUsers)
        return allUsers
      },
      checkValidation(){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!this.email) {
          this.errors.email = 'Email is required.';
        } else if (!this.email.match(mailformat)) {
          this.errors.email = 'Please Write email.';
        } else {
          this.current_user.email=this.email
          this.errors.email = ""
        }

        if (!this.password) {
          this.errors.password = 'Password is required.';
        } else if (this.password.length < 6) {
          this.errors.password = "Password is short,write more than 5 letters"
        } else {
          this.current_user.password=this.password
          this.errors.password = ""
        }
      },
      storageUsers(user) {
        let allUsers = JSON.stringify(user);
        localStorage.setItem('current_user', allUsers);
      },
      checkUser() {
        this.checkValidation()
        if (this.errors.email===""&&this.errors.password===""){
         var users= this.getUser()
          users.forEach(user=>{
            if(user.email===this.current_user.email){

              if(user.password===this.current_user.password){
                this.storageUsers(user)
                this.$router.push('hello')
              }else{this.errors.password="Please check your password" }
            }
            else this.errors.email="this email does not registered"
          })
        }else return false
      }
    }
  }
</script>

<style scoped>
  .register-container > input {
    margin-bottom: 40px;
  }
</style>
