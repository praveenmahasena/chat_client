<script lang="ts" setup>
import axios from 'axios'

;(async () => {
  try {
    const { data } = await axios.get('http://localhost:42069/chatroom', {
      headers: {
        'Content-Type': 'application/json',
        'X-Token': localStorage.getItem('X-Token')
      }
    })
    console.log(data)
    connect()
  } catch (error) {
    console.log(error)
  }
})()

async function connect() {
  const ws = new WebSocket('ws://localhost:6969')
  ws.onopen = (e) => {
    ws.send('yayayaaa')
    console.log(e)
  }
}
</script>

<template></template>

<style lang="scss" scoped></style>
