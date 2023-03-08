<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';

const logout = async function () {
  await axios.post('/api/logout')
  console.log('logout')
}
</script>

<template>
  <v-app>
    <v-app-bar
      title="Jundevs"
      prominent>
      <v-btn :to="{name: 'login'}" variant="outlined">
        Login
      </v-btn>
      <v-btn :to="{name: 'register'}" variant="outlined">
        Register
      </v-btn>
      <v-btn variant="outlined" @click.prevent="logout">
        Logout
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
