<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
var verified = ref(false)

onBeforeMount(async () => {
  try {
    const { data } = await axios.get('http://localhost:42069/profile', {
      headers: {
        'Content-Type': 'application/json',
        'X-Token': localStorage.getItem('X-Token')
      }
    })
    verified.value = data
    console.log(verified.value)
  } catch (error) {
    console.log(error)
  }
})

async function getMail() {
  try {
  console.log('done')
    const { data } = await axios.get('http://localhost:42069/verify', {
      headers: {
        'Content-Type': 'application/json',
        'X-Token': localStorage.getItem('X-Token')
      }
    })
    console.log(localStorage.getItem('X-Token'))
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    welcome to our Chat app
    <button v-if="!verified" @click="getMail">get Verified</button>
    <router-link to="/chatroom" v-if="verified"> ChatRoom </router-link>
  </div>
</template>

<style lang="scss" scoped></style>
