<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref()

onMounted(async () => {
    const data = await axios.get('/api/users')
    console.log(data)
})
</script>

<template>
  
</template>

<style>

</style>