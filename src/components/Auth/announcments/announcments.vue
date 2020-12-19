<template>
  <div>
    <h1>Samo</h1>
    <table class="table">
      <tr>
        <td>id</td>
        <td>Name</td>
        <td>Surname</td>
        <td>Email</td>
        <td>age</td>
        <td>type</td>
        <td>Edit</td>
        <td>Delete</td>



      </tr>

      <tr v-for="item in announcm" :key="item.id">
        <td><span class="badge">{{ item.id }}</span></td>
        <td>
          <input v-if="active_data.id===item.id" v-model="edit_data.title" type="text">
          <span v-else class="badge">{{ item.title }}</span>
        </td>
        <td>
          <input v-if="active_data.id===item.id" v-model="edit_data.description" type="text">
          <span v-else class="badge">{{ item.description}}</span></td>

        <td>
          <input v-if="active_data.id===item.id" v-model="edit_data.salary" type="text">
          <span v-else class="badge">{{ item.deadline}}</span>
        </td>
        <td>
          <input v-if="active_data.id===item.id" v-model="edit_data.user_id" type="text">
          <span v-else  class="badge">{{ item.salary}}</span>
        </td>
        <td>
          <input v-if="active_data.id===item.id" v-model="edit_data.deadline" type="text">
          <span v-else class="badge">{{ item.user_id}}</span>
        </td>
        <td>
          <button v-if="active_data.id!==item.id" @click="edit(item.id)" class="btn btn-dark">Edit</button>
          <button v-else @click="save(item.id)" class="btn btn-dark">Save</button>

        </td>
        <td><span @click="del(item.id)" class="btn btn-danger">Delete</span></td>

        <td>

        </td>

      </tr>

    </table>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "announcments",
  data() {
    return {
      active_data:{
        id:null
      },
      edit_data: {},
      announcm: null
    }
  },
  mounted() {
    this.getUsers()
    this.storeUser()
  },
  methods:{
    getUsers() {
      const token = `Bearer ${localStorage.getItem('access_token')}`
      axios.post('http://127.0.0.1:8000/api/announcment/get', null, {
        headers: {
          'Authorization': token
        }
      }).then(res => {
        this.announcm=res.data
      })
    },
    save(id){
      this.active_data.id=null;

      const token = `Bearer ${localStorage.getItem('access_token')}`
      axios.post('http://127.0.0.1:8000/api/announcment/save',
        {
          data: this.edit_data,
          user_id: id
        },
  {
          headers: {
            'Authorization': token
          }
      }).then(res => {
        console.log(res.data)
        this.announcm.forEach((announcment)=> {
          if (announcment.id === res.data.id) {
            announcment = res.data
          }
        });
      }).catch(err=>{
      })
    },
    edit(id){
      // const token = `Bearer ${localStorage.getItem('access_token')}`
      // axios.post('http://127.0.0.1:8000/api/admin/users/edit'+id, null, {
      //   headers: {
      //     'Authorization': token
      //   }
      // }).then(res => {
      //   this.active_data.id=id
      //   this.edit_data=res.data
      //
      // }).catch(err=>{
      //   console.log(err)
      // })
      this.active_data.id=id
      this.edit_data = this.announcm.find(ann => ann.id  === id)
      console.log(id, this.announcm, this.edit_data)
    },
    del(id){
      const token = `Bearer ${localStorage.getItem('access_token')}`
      axios.post('http://127.0.0.1:8000/api/announcment/delete', {
        user_id: id
       },
        {
        headers: {
          'Authorization': token
        }
      }).then(res => {
        console.log(res.data)
        this.announcm = this.announcm.filter((ann) => ann.id !== res.data)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
</style>
