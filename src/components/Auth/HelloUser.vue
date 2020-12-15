<template>
  <div>
    <h1>Welcome Dear {{ getUser().name}} </h1>
     <button @click="showJoke()">Samo</button>
  </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: "HelloUser",
      data(){
        return{
          joke:''
        }
      },

      methods:{
        getUser() {
          let User = localStorage.getItem('current_user') || [];
          User = JSON.parse(User)
          return User
        },
         async showJoke(){
         let this_id=1
         await  axios
             .post('http://127.0.0.1:8000/api/auth/miban/'+this_id)
             .then(response => (this.joke = response));
                console.log(this.joke.data)
         }

      },

    }
</script>

<style scoped>

</style>
