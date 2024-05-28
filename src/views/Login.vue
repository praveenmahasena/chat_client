<script lang="ts" setup>
import axios from 'axios'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const r = useRouter()

const credentials = reactive({
  emailID: '',
  password: ''
})

async function login() {
  try {
    const { data } = await axios.post('http://localhost:42069/login', credentials, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    localStorage.setItem('X-Token', data)
    r.push('/profile')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="login">
      <div>
        <label>EmailID</label>
        <input type="text" v-model="credentials.emailID" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="credentials.Password" />
      </div>
      <button>Login</button>
    </form>
  </div>
</template>

<style lang="sass" scoped></style>
