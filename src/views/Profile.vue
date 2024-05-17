<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onBeforeMount } from 'vue'
import axios from 'axios'



onBeforeMount(async () => {
  try {
    const { data } = await axios.get('http://localhost:42069/profile', {
      headers: {
        'Content-Type': 'application/json',
        'X-Token': localStorage.getItem('X-Token')
      }
    })
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})

async function getMail() {
  try {
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
    <button v-if="!data" @click="getMail">get Verified</button>

  </div>
</template>

<style lang="scss" scoped>
</style>
