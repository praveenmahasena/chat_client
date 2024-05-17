// TODO: make sure u do all the error handlings
<script lang="ts" setup>
import axios from 'axios'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const r = useRouter()

const user = reactive({
  email: '',
  userName: '',
  password: ''
})

async function createAccount() {
  try {
    const { data } = await axios.post('http://localhost:42069/create', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    localStorage.setItem('X-Token', data)
    r.push({ path: '/profile' })
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="createAccount">
      <div>
        <label> EmailID </label>
        <input v-model="user.email" placeholder="Enter your EmailID" />
        <div>
          <label> UserName </label>
          <input v-model="user.userName" placeholder="Enter your userName" />
        </div>
        <div>
          <label> Password </label>
          <input v-model="user.password" placeholder="Enter your password" />
        </div>
      </div>
      <div>
        <button>submit</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
