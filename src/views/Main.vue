<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref()

onMounted(async () => {
    const data = await axios.get('/api/user')
    console.log(data)
})
</script>

<template>
  
</template>

<style>

</style>