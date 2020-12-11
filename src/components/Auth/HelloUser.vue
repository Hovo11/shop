<template>
    <h1>Welcome Dear {{ getUser().name}} </h1>
</template>

<script>
    export default {
        name: "HelloUser",

      methods:{
        getUser() {
          let User = localStorage.getItem('current_user') || [];
          User = JSON.parse(User)
          return User
        },
      },

    }
</script>

<style scoped>

</style>
